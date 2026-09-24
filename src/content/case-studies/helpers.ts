import type { MediaItem, MediaRow, PanelItem } from "@/components/Media";
import type { ShotRef } from "@/components/Shot";

/** A mockup from Figma. `id` is the node id of the "shot / …" frame; w×h is its design size. */
export const shot = (id: string, label: string, w: number, h: number, opts: Partial<ShotRef> = {}): ShotRef & { kind: "shot" } => ({
  kind: "shot",
  id,
  label,
  w,
  h,
  ...opts,
});

export const panel = (w: number, dir: PanelItem["dir"], items: ShotRef[], opts: Partial<Omit<PanelItem, "kind" | "w" | "dir" | "items">> = {}): PanelItem => ({
  kind: "panel",
  w,
  dir,
  items,
  ...opts,
});

export const row = (items: MediaItem[], opts: Omit<MediaRow, "items"> = {}): MediaRow => ({ items, ...opts });
