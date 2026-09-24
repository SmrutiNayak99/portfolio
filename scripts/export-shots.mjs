#!/usr/bin/env node
/**
 * Export every product mockup ("shot") referenced in src/content from Figma into public/shots/.
 *
 *   FIGMA_TOKEN=figd_… node scripts/export-shots.mjs     # REST API, 2x PNGs (recommended)
 *   node scripts/export-shots.mjs                         # Figma desktop MCP (app must be open), 1x PNGs
 *
 * Flags: --force (re-export existing files), --only=24:1234,24:5678, --dry-run
 *
 * Shots are keyed by Figma node id; the site renders a labelled placeholder until the file exists.
 */
import fs from "node:fs";
import path from "node:path";

const FILE_KEY = "qStHL7o8IpPT1X94ZptQWu";
const MCP_URL = "http://127.0.0.1:3845/mcp";
const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public/shots");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);

function collectIds() {
  const ids = new Set();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(entry.name)) {
        const src = fs.readFileSync(p, "utf8");
        for (const m of src.matchAll(/"(\d+:\d+)"/g)) ids.add(m[1]);
      }
    }
  };
  walk(path.join(ROOT, "src/content"));
  return [...ids];
}

const fileFor = (id) => path.join(OUT, `${id.replace(":", "-")}.png`);
const exported = (id) => fs.existsSync(fileFor(id)) || fs.existsSync(fileFor(id).replace(/\.png$/, ".webp"));

async function viaRest(ids, token) {
  for (let i = 0; i < ids.length; i += 40) {
    const batch = ids.slice(i, i + 40);
    const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(batch.join(","))}&format=png&scale=2`;
    const res = await fetch(url, { headers: { "X-Figma-Token": token } });
    if (!res.ok) throw new Error(`Figma images API ${res.status}: ${await res.text()}`);
    const { images, err } = await res.json();
    if (err) throw new Error(err);
    await Promise.all(
      batch.map(async (id) => {
        if (!images[id]) return console.warn(`  ! no render for ${id}`);
        const img = await fetch(images[id]);
        fs.writeFileSync(fileFor(id), Buffer.from(await img.arrayBuffer()));
        console.log(`  ✓ ${id}`);
      }),
    );
  }
}

async function mcpPost(body, sessionId) {
  const res = await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      ...(sessionId ? { "mcp-session-id": sessionId } : {}),
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  const events = text
    .replace(/\r\n/g, "\n")
    .split("\n\n")
    .map((ev) =>
      ev
        .split("\n")
        .filter((l) => l.startsWith("data:"))
        .map((l) => l.slice(5).replace(/^ /, ""))
        .join("\n"),
    )
    .filter((d) => d.trim());
  return { messages: events.map((d) => JSON.parse(d)), sessionId: res.headers.get("mcp-session-id") };
}

async function viaMcp(ids) {
  const init = await mcpPost({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "export-shots", version: "1" } },
  });
  const sid = init.sessionId;
  await mcpPost({ jsonrpc: "2.0", method: "notifications/initialized" }, sid);
  let n = 2;
  for (const id of ids) {
    const { messages } = await mcpPost(
      { jsonrpc: "2.0", id: n++, method: "tools/call", params: { name: "get_screenshot", arguments: { nodeId: id } } },
      sid,
    );
    const content = messages.at(-1)?.result?.content ?? [];
    const image = content.find((c) => c.type === "image");
    if (!image) {
      const msg = content.map((c) => c.text).join(" ");
      if (/rate limit/i.test(msg)) {
        console.error(`\nFigma MCP rate limit reached after ${n - 2} calls. Re-run later — existing files are skipped.`);
        process.exit(2);
      }
      console.warn(`  ! ${id}: ${msg || "no image"}`);
      continue;
    }
    fs.writeFileSync(fileFor(id), Buffer.from(image.data, "base64"));
    console.log(`  ✓ ${id}`);
  }
}

fs.mkdirSync(OUT, { recursive: true });
let ids = args.only ? String(args.only).split(",") : collectIds();
if (!args.force) ids = ids.filter((id) => !exported(id));
console.log(`${ids.length} shot(s) to export${args["dry-run"] ? " (dry run)" : ""}`);
if (args["dry-run"]) {
  console.log(ids.join("\n"));
  process.exit(0);
}
if (!ids.length) process.exit(0);

if (process.env.FIGMA_TOKEN) await viaRest(ids, process.env.FIGMA_TOKEN);
else await viaMcp(ids);
