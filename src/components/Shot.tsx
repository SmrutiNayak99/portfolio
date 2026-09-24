import fs from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { ZoomableImage } from "./ZoomableImage";
import { cx } from "./ui";

export type ShotRef = {
  /** Figma node id of the mockup frame, e.g. "24:147131". The export lives at /shots/24-147131.png */
  id: string;
  /** Human label (the Figma layer name) — used as alt text. */
  label: string;
  /** Design size in px; drives the aspect ratio and relative widths in rows. */
  w: number;
  h: number;
  /** Corner radius in px. Defaults to 12. */
  radius?: number;
  /** Top corners only (hero shots that bleed into the bottom of their panel). */
  topOnly?: boolean;
  /** No white card / border / shadow — the image is the whole surface (home cards, playground). */
  bare?: boolean;
  /** File extension of the export. */
  ext?: "png" | "jpg" | "webp";
};

const onDisk = (src: string) => fs.existsSync(path.join(process.cwd(), "public", src));

/** Public path of a shot's image: an explicit `ext`, else .webp, else .png. */
export function shotSrc(shot: Pick<ShotRef, "id" | "ext">) {
  const base = `/shots/${shot.id.replace(":", "-")}`;
  if (shot.ext) return `${base}.${shot.ext}`;
  return onDisk(`${base}.webp`) ? `${base}.webp` : `${base}.png`;
}

const shotExists = onDisk;

export function Shot({
  shot,
  className,
  style,
  sizes = "(min-width: 1280px) 1200px, 100vw",
  priority,
  zoom = true,
}: {
  shot: ShotRef;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
}) {
  const src = shotSrc(shot);
  const radius = shot.radius ?? 12;
  const frameStyle: CSSProperties = {
    aspectRatio: `${shot.w} / ${shot.h}`,
    borderRadius: shot.topOnly ? `${radius}px ${radius}px 0 0` : radius,
    ...style,
  };
  const frame = cx(
    "relative w-full overflow-hidden",
    !shot.bare && "border border-shot-line bg-white shadow-shot",
    shot.topOnly && "border-b-0",
    className,
  );

  // Placeholder until the mockup is exported from Figma (see scripts/export-shots.mjs).
  if (!shotExists(src)) {
    return (
      <div
        className={cx(frame, shot.bare ? "bg-brand-soft" : "bg-white")}
        style={frameStyle}
        role="img"
        aria-label={shot.label}
        data-shot={shot.id}
        data-missing
      >
        <div className="absolute inset-0 flex flex-col">
          {!shot.bare && (
            <div className="flex h-[6%] max-h-6 min-h-3 items-center gap-1 border-b border-line bg-page px-[2%]">
              <span className="size-1.5 rounded-full bg-line-strong" />
              <span className="size-1.5 rounded-full bg-line-strong" />
              <span className="size-1.5 rounded-full bg-line-strong" />
            </div>
          )}
          <div className="flex flex-1 items-center justify-center p-3 text-center">
            <span className="text-[11px] leading-4 font-medium text-subtle/70">{shot.label}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={frame} style={frameStyle} data-shot={shot.id}>
      <ZoomableImage src={src} alt={shot.label} width={shot.w} height={shot.h} sizes={sizes} priority={priority} zoom={zoom} />
    </div>
  );
}
