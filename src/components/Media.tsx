import type { CSSProperties } from "react";
import { Shot, type ShotRef } from "./Shot";
import { cx } from "./ui";

export type ShotItem = { kind: "shot" } & ShotRef;

/** A soft-blue rounded panel holding one or more mockups. */
export type PanelItem = {
  kind: "panel";
  /** Design width of the panel (px) — relative width within its row. */
  w: number;
  dir: "row" | "col";
  gap?: number;
  pad?: number;
  radius?: number;
  items: ShotRef[];
};

export type MediaItem = ShotItem | PanelItem;

export type MediaRow = {
  items: MediaItem[];
  gap?: number;
  /** Vertical alignment of items in the row. */
  align?: "start" | "center";
};

const MAX = 1200;

function fluid(px: number, min: number) {
  // Scale design spacing with the viewport, never below `min`.
  return `clamp(${min}px, ${((px / MAX) * 100).toFixed(3)}vw, ${px}px)`;
}

function itemWidth(item: MediaItem) {
  return item.kind === "panel" ? item.w : item.w;
}

function sizesFor(fraction: number) {
  const px = Math.round(MAX * fraction);
  return `(min-width: 1280px) ${px}px, (min-width: 768px) ${Math.round(fraction * 100)}vw, 100vw`;
}

export function Panel({ panel, fraction = 1 }: { panel: PanelItem; fraction?: number }) {
  const pad = panel.pad ?? 32;
  const gap = panel.gap ?? (panel.dir === "row" ? 40 : 24);
  const innerW = panel.w - pad * 2;
  const style: CSSProperties = { padding: fluid(pad, 16), borderRadius: panel.radius ?? 16 };

  if (panel.dir === "col") {
    return (
      <div className="flex flex-col items-center justify-center bg-brand-soft" style={{ ...style, gap: fluid(gap, 12) }}>
        {panel.items.map((s) => (
          <div key={s.id} className="w-full" style={{ maxWidth: `${(s.w / innerW) * 100}%` }}>
            <Shot shot={s} sizes={sizesFor((fraction * s.w) / panel.w)} />
          </div>
        ))}
      </div>
    );
  }

  const total = panel.items.reduce((n, s) => n + s.w, 0);
  return (
    <div className="bg-brand-soft" style={style}>
      {/* Mobile: swipeable strip at a readable size. md+: the design's single row. */}
      <div
        className="-mx-4 flex snap-x snap-mandatory items-center overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:snap-none md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        style={{ gap: fluid(gap, 12) }}
      >
        {panel.items.map((s) => (
          <div
            key={s.id}
            className="w-[72vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:basis-0"
            style={{ flexGrow: s.w }}
          >
            <Shot shot={s} sizes={sizesFor((fraction * s.w) / total)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({ item, fraction }: { item: MediaItem; fraction: number }) {
  if (item.kind === "panel") return <Panel panel={item} fraction={fraction} />;
  return <Shot shot={item} sizes={sizesFor(fraction)} />;
}

export function MediaRowView({ row }: { row: MediaRow }) {
  const total = row.items.reduce((n, i) => n + itemWidth(i), 0) + (row.gap ?? 24) * (row.items.length - 1);
  if (row.items.length === 1) {
    const only = row.items[0];
    return <Item item={only} fraction={itemWidth(only) / MAX} />;
  }
  // Strips of phone screens: swipe on mobile instead of stacking into one very long column.
  const isStrip = row.items.length >= 3 && row.items.every((i) => i.kind === "shot" && i.h > i.w * 1.3);
  if (isStrip) {
    return (
      <div
        className="-mx-5 flex snap-x snap-mandatory items-start overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:snap-none md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        style={{ gap: fluid(row.gap ?? 24, 12) }}
      >
        {row.items.map((item, i) => (
          <div key={i} className="w-[58vw] max-w-[260px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:basis-0" style={{ flexGrow: itemWidth(item) }}>
            <Item item={item} fraction={itemWidth(item) / total} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className={cx("flex flex-col md:flex-row", row.align === "center" ? "md:items-center" : "md:items-start")}
      style={{ gap: fluid(row.gap ?? 24, 16) }}
    >
      {row.items.map((item, i) => (
        <div key={i} className="min-w-0 md:basis-0" style={{ flexGrow: itemWidth(item) }}>
          <Item item={item} fraction={itemWidth(item) / total} />
        </div>
      ))}
    </div>
  );
}

/** The soft panel at the top of each case study with a large mockup bleeding off its bottom edge. */
export function HeroPanel({ shot, pad = 64 }: { shot: ShotRef; pad?: number }) {
  return (
    <div
      className="flex justify-center overflow-hidden rounded-t-[20px] bg-brand-tint md:rounded-t-[28px]"
      style={{ paddingTop: fluid(pad, 24), paddingInline: fluid(pad, 16) }}
    >
      <div className="w-full" style={{ maxWidth: shot.w }}>
        <Shot shot={{ ...shot, topOnly: true }} priority sizes="(min-width: 1280px) 1072px, 90vw" />
      </div>
    </div>
  );
}
