import type { MediaRow } from "@/components/Media";
import type { ShotRef } from "@/components/Shot";

export type { MediaRow, ShotRef };

/** Left column width of two-column rows. The design uses 280px or 440px depending on the study. */
export type LeftWidth = 280 | 440;

export type Block =
  /** Page title block: kicker, H1 and lede. */
  | { type: "hero"; kicker: string; title: string; lede: string }
  /** Four-up ROLE / SCOPE / TIMELINE / … row between hairlines. */
  | { type: "meta"; items: { label: string; value: string }[] }
  /** Large mockup in the soft-blue hero panel. Use `row` for multi-device heroes. */
  | { type: "heroPanel"; /** Full-panel export (preferred when available). */ image?: ShotRef; shot?: ShotRef; row?: MediaRow; pad?: number; /** Max width of `row` (design px), centred in the panel. */ maxWidth?: number }
  /** Kicker on the left, a large statement on the right ("WHY THIS ONE", "REFLECTION"). */
  | { type: "statement"; kicker: string; text: string; leftWidth?: LeftWidth }
  /** Kicker + heading on the left, body copy on the right. */
  | { type: "split"; kicker: string; heading: string; body: string; leftWidth?: LeftWidth }
  /** Numbered problem cards. `compact` = the 4-up variant (19px titles, 15px body). */
  | { type: "cards"; items: { title: string; body: string }[]; compact?: boolean }
  /** Pill tags; `indent` aligns them with the right column. */
  | { type: "chips"; items: { label: string; tone?: "brand" | "player" | "admin" | "organizer" | "referee" }[]; indent?: LeftWidth | "right" }
  /** Solution header: kicker + title left, OUTCOME + statement right. */
  | { type: "solutionHeader"; kicker: string; title: string; outcome: string; leftWidth?: LeftWidth }
  /** Row(s) of mockups. */
  | { type: "media"; rows: MediaRow[]; caption?: string }
  /** Numbered DECISIONS list. */
  | { type: "decisions"; items: string[] }
  /** Blocks that sit closer together than the section gap (e.g. PROBLEM heading + its cards, 32px). */
  | { type: "group"; gap?: number; blocks: Block[] };

export type Section = {
  name: string;
  tone?: "page" | "white" | "dark";
  /** Vertical rhythm, from the design: hero=140/0, intro=120/96, context=96/120, block=120/120, tight=120/120 with 48 gap. */
  pad?: "hero" | "intro" | "context" | "block";
  gap?: number;
  blocks: Block[];
};

export type ImpactRow = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  /** Title used in the "Next case study" card and page metadata. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  sections: Section[];
  impact: { kicker: string; heading: string; rows: ImpactRow[] };
  reflection: string;
  /** The dark card before the footer. Defaults to "NEXT CASE STUDY" → /work/{slug}; the last study links home instead. */
  next: { slug?: string; name: string; href?: string; label?: string };
  /** "Design Lead, OmnisAI · Case study 01 of 04" */
  footerNote: string;
};
