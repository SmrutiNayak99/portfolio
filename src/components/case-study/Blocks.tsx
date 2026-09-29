import type { Block, LeftWidth } from "@/content/types";
import { CompareSlider } from "../CompareSlider";
import { HeroPanel, MediaRowView } from "../Media";
import { Shot, shotSrc, type ShotRef } from "../Shot";
import { Eyebrow, Kicker, cx } from "../ui";

const leftCol: Record<LeftWidth, string> = {
  280: "lg:w-[280px]",
  440: "lg:w-[320px] xl:w-[440px]",
};

const img = (s: ShotRef) => ({ src: shotSrc(s), alt: s.label, w: s.w, h: s.h });

/** Two-column row: fixed left column, fluid right. Stacks below 1024px. */
export function TwoCol({
  left,
  right,
  leftWidth = 280,
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: LeftWidth;
  className?: string;
}) {
  return (
    <div className={cx("flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-20", className)}>
      <div className={cx("flex shrink-0 flex-col gap-3", leftCol[leftWidth])}>{left}</div>
      <div className="min-w-0 flex-1">{right}</div>
    </div>
  );
}

const chipTone = {
  brand: "bg-brand-soft text-brand",
  player: "bg-[#e9f8ee] text-[#128a3e]",
  admin: "bg-[#e8f5fd] text-[#0b7bbd]",
  organizer: "bg-[#eaeefe] text-[#2446d8]",
  referee: "bg-ink text-white",
} as const;

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return (
        <div className="stagger flex flex-col gap-7">
          <Kicker>{block.kicker}</Kicker>
          <h1 className="max-w-[1000px] text-[36px] leading-[43px] font-bold tracking-[-0.72px] text-ink md:text-[48px] md:leading-[56px] md:tracking-[-0.96px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-1.28px]">
            {block.title}
          </h1>
          <p className="max-w-[920px] text-lg leading-7 text-subtle md:text-[22px] md:leading-[34px]">{block.lede}</p>
        </div>
      );

    case "meta":
      return (
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 md:gap-y-10 lg:flex lg:gap-0">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 lg:flex-1">
              <dt>
                <Eyebrow>{item.label}</Eyebrow>
              </dt>
              <dd className="text-base leading-6 font-medium text-ink lg:max-w-[260px]">{item.value}</dd>
            </div>
          ))}
        </dl>
      );

    case "heroPanel":
      if (block.compare)
        return (
          <div className="overflow-hidden rounded-t-[20px] bg-brand-tint px-4 pt-6 md:rounded-t-[28px] md:px-10 md:pt-10 lg:px-16 lg:pt-16">
            <CompareSlider
              before={img(block.compare.before)}
              after={img(block.compare.after)}
              aspect={block.compare.aspect ?? block.compare.after.w / block.compare.after.h}
              priority
              className="rounded-t-xl border border-b-0 border-shot-line bg-white shadow-shot"
            />
          </div>
        );
      // Whole panel exported from Figma as one image (background + mockups).
      if (block.image)
        return <Shot shot={{ ...block.image, bare: true, topOnly: true, radius: 28 }} priority zoom={false} sizes="(min-width: 1280px) 1200px, 100vw" />;
      if (block.row)
        return (
          <div className="overflow-hidden rounded-t-[20px] bg-brand-tint px-4 pt-6 md:rounded-t-[28px] md:px-10 md:pt-10 lg:px-16 lg:pt-16">
            {block.maxWidth ? (
              <div className="mx-auto" style={{ maxWidth: block.maxWidth }}>
                <MediaRowView row={block.row} />
              </div>
            ) : (
              <MediaRowView row={block.row} />
            )}
          </div>
        );
      return <HeroPanel shot={block.shot!} pad={block.pad} />;

    case "statement":
      return (
        <TwoCol
          leftWidth={block.leftWidth}
          left={<Kicker>{block.kicker}</Kicker>}
          right={
            <p className="text-xl leading-[30px] font-medium tracking-[-0.2px] text-ink md:text-[26px] md:leading-[38px] md:tracking-[-0.26px] lg:max-w-[840px]">
              {block.text}
            </p>
          }
        />
      );

    case "split":
      return (
        <TwoCol
          leftWidth={block.leftWidth}
          left={
            <>
              <Kicker>{block.kicker}</Kicker>
              <h2 className="text-2xl leading-[30px] font-bold tracking-[-0.24px] text-ink md:text-[28px] md:leading-[34px] md:tracking-[-0.28px]">
                {block.heading}
              </h2>
            </>
          }
          right={<p className="text-base leading-[26px] text-body md:text-lg md:leading-[30px]">{block.body}</p>}
        />
      );

    case "cards":
      return (
        <ol
          className={cx(
            "grid grid-cols-1 gap-4 md:gap-6",
            block.items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3",
          )}
        >
          {block.items.map((card, i) => (
            <li
              key={card.title}
              className={cx(
                "flex flex-col gap-3.5 rounded-2xl border border-line bg-page",
                block.compact ? "px-6 py-7" : "p-7",
              )}
            >
              <span className="text-[13px] leading-[18px] font-semibold tracking-[0.78px] text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3
                className={cx(
                  "font-bold text-ink",
                  block.compact ? "text-[19px] leading-[25px] tracking-[-0.095px]" : "text-xl leading-[26px] tracking-[-0.1px]",
                )}
              >
                {card.title}
              </h3>
              <p className={cx("text-subtle", block.compact ? "text-[15px] leading-6" : "text-base leading-[26px]")}>{card.body}</p>
            </li>
          ))}
        </ol>
      );

    case "chips":
      return (
        <ul
          className={cx(
            "flex flex-wrap gap-3",
            block.indent === 280 && "lg:pl-[360px]",
            block.indent === 440 && "lg:pl-[400px] xl:pl-[520px]",
            block.indent === "right" && "lg:justify-end",
          )}
        >
          {block.items.map((chip) => (
            <li key={chip.label} className={cx("rounded-full px-4 py-2.5 text-sm leading-5 font-medium", chipTone[chip.tone ?? "brand"])}>
              {chip.label}
            </li>
          ))}
        </ul>
      );

    case "solutionHeader":
      return (
        <TwoCol
          // Always the wide column: solution titles are long and wrapped to three lines at 280px.
          leftWidth={440}
          left={
            <>
              <Kicker>{block.kicker}</Kicker>
              <h2 className="text-[26px] leading-8 font-bold tracking-[-0.26px] text-ink md:text-[32px] md:leading-[38px] md:tracking-[-0.32px]">
                {block.title}
              </h2>
            </>
          }
          right={
            <div className="flex flex-col gap-2">
              <Eyebrow>Outcome</Eyebrow>
              <p className="text-lg leading-7 font-medium tracking-[-0.09px] text-ink md:text-[22px] md:leading-8 md:tracking-[-0.11px]">
                {block.outcome}
              </p>
            </div>
          }
        />
      );

    case "media":
      return (
        <figure className="flex flex-col gap-4">
          {block.caption && (
            <figcaption>
              <Eyebrow>{block.caption}</Eyebrow>
            </figcaption>
          )}
          <div className="flex flex-col gap-8 md:gap-12">
            {block.rows.map((row, i) => (
              <MediaRowView key={i} row={row} />
            ))}
          </div>
        </figure>
      );

    case "group":
      return (
        <div className="flex flex-col" style={{ gap: block.gap ?? 32 }}>
          {block.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </div>
      );

    case "decisions":
      return (
        <TwoCol
          left={<Eyebrow>Decisions</Eyebrow>}
          right={
            <ol className="flex flex-col">
              {block.items.map((item, i) => {
                const { text, why } = typeof item === "string" ? { text: item, why: undefined } : item;
                return (
                  <li key={i} className={cx("flex items-start gap-5 py-[18px]", i > 0 && "border-t border-line")}>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs leading-4 font-semibold text-brand">
                      {i + 1}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <p className="text-base leading-[26px] font-medium text-ink md:text-[17px] md:leading-7">{text}</p>
                      {why && <p className="text-[15px] leading-6 text-subtle md:text-base md:leading-[26px]">{why}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          }
        />
      );

    case "beforeAfter":
      return (
        <div className="flex flex-col gap-8 md:gap-10">
          {block.before && block.after && (
            <CompareSlider
              before={img(block.before)}
              after={img(block.after)}
              aspect={block.after.w / block.after.h}
              className="rounded-xl border border-shot-line bg-white shadow-shot"
            />
          )}
          <ul className={cx("grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3", block.before && "border-t border-line pt-6")}>
            {block.changes.map((c) => (
              <li key={c.to} className="flex flex-col gap-1.5">
                <span className="text-sm leading-5 text-subtle line-through decoration-faint">{c.from}</span>
                <span className="text-base leading-6 font-medium text-ink">
                  <span aria-hidden className="mr-1.5 text-brand">→</span>
                  {c.to}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "code":
      return (
        <TwoCol
          leftWidth={440}
          left={
            <>
              <Kicker>{block.kicker}</Kicker>
              <h2 className="text-[26px] leading-8 font-bold tracking-[-0.26px] text-ink md:text-[32px] md:leading-[38px] md:tracking-[-0.32px]">
                {block.heading}
              </h2>
              <p className="pt-1 text-base leading-[26px] text-body md:text-lg md:leading-[30px]">{block.body}</p>
            </>
          }
          right={
            <figure className="overflow-hidden rounded-2xl bg-ink">
              <figcaption className="flex items-center gap-2 border-b border-night-line px-5 py-3 text-xs leading-4 font-medium text-night-muted">
                <span className="size-2 rounded-full bg-night-line" />
                {block.file}
              </figcaption>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-[22px] text-night-body">
                <code>
                  {block.code.split("\n").map((line, i) => (
                    <span key={i} className={cx("block", /^\s*(\/\/|\/\*|\*)/.test(line) && "text-night-muted")}>
                      {line || " "}
                    </span>
                  ))}
                </code>
              </pre>
            </figure>
          }
        />
      );
  }
}
