import Link from "next/link";
import type { CSSProperties } from "react";
import type { CaseStudy, Section } from "@/content/types";
import { contact, site } from "@/content/site";
import { ContactSection } from "../ContactSection";
import { Container, Inner, Kicker, cx } from "../ui";
import { BlockView, TwoCol } from "./Blocks";

const tones = { page: "", white: "bg-white", dark: "bg-ink text-white" } as const;

// Vertical padding per section kind: mobile / tablet / desktop, taken from the 390 / 768 / 1440 frames.
const pads = {
  hero: "pt-[120px] md:pt-[140px]",
  intro: "pt-16 pb-12 md:pt-[88px] md:pb-[72px] lg:pt-[120px] lg:pb-24",
  context: "pt-12 pb-16 md:pt-[72px] md:pb-[88px] lg:pt-24 lg:pb-[120px]",
  block: "py-16 md:py-[88px] lg:py-[120px]",
} as const;

function SectionView({ section }: { section: Section }) {
  const gap = section.gap ?? 48;
  return (
    <section aria-label={section.name} className={cx(tones[section.tone ?? "page"], pads[section.pad ?? "block"])}>
      <Container>
        <Inner
          data-reveal-children
          className="flex flex-col [gap:var(--gap-sm)] md:[gap:var(--gap)]"
          style={{ "--gap": `${gap}px`, "--gap-sm": `${Math.round(gap * 0.67)}px` } as CSSProperties}
        >
          {section.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </Inner>
      </Container>
    </section>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <>
      {study.sections.map((s) => (
        <SectionView key={s.name} section={s} />
      ))}

      <section aria-label="Impact" className="bg-ink py-16 md:py-[88px] lg:py-[120px]">
        <Container>
          <Inner>
            <TwoCol
              left={
                <>
                  <Kicker>{study.impact.kicker}</Kicker>
                  <h2 className="text-[26px] leading-8 font-bold tracking-[-0.26px] text-white md:text-[32px] md:leading-[38px] md:tracking-[-0.32px]">
                    {study.impact.heading}
                  </h2>
                </>
              }
              right={
                <dl className="flex flex-col lg:max-w-[840px]">
                  {study.impact.rows.map((row, i) => {
                    const word = /[a-z]/i.test(row.value);
                    return (
                      <div key={i} className={cx("flex items-center gap-5 py-[22px] md:gap-8", i > 0 && "border-t border-night-line")}>
                        <dt
                          className={cx(
                            "w-[88px] shrink-0 font-bold text-white md:w-[120px]",
                            word
                              ? "text-xl leading-[26px] tracking-[-0.2px] md:text-2xl md:leading-[30px] md:tracking-[-0.24px]"
                              : "text-[32px] leading-9 tracking-[-0.64px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px]",
                          )}
                        >
                          {row.value}
                        </dt>
                        <dd className="min-w-0 flex-1 text-base leading-[26px] text-night-body md:text-lg md:leading-7">{row.label}</dd>
                      </div>
                    );
                  })}
                </dl>
              }
            />
          </Inner>
        </Container>
      </section>

      <SectionView section={{ name: "Reflection", pad: "intro", blocks: [{ type: "statement", kicker: "REFLECTION", text: study.reflection }] }} />

      <div className="pb-10">
        <Container>
          <Inner>
            <Link
              href={study.next.href ?? `/work/${study.next.slug}`}
              className="group flex items-center justify-between gap-6 overflow-hidden rounded-[20px] bg-ink px-6 py-7 transition-colors hover:bg-[#1c1c24] md:px-10 md:py-9"
            >
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="text-xs leading-4 font-semibold tracking-[0.96px] text-night-muted">{study.next.label ?? "NEXT CASE STUDY"}</span>
                <span className="text-[26px] leading-8 font-bold tracking-[-0.26px] text-white md:text-[32px] md:leading-[38px] md:tracking-[-0.32px]">
                  {study.next.name}
                </span>
              </span>
              <span aria-hidden className="text-[26px] leading-8 font-bold text-brand-light transition-transform duration-300 ease-out group-hover:translate-x-1.5 md:text-[32px] md:leading-[38px]">
                →
              </span>
            </Link>
          </Inner>
        </Container>
      </div>

      <footer className="pt-8 pb-10 md:pt-10 md:pb-14">
        <Container>
          <Inner className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-base leading-[22px] font-semibold text-ink">{site.name}</p>
              <p className="text-sm leading-5 text-subtle">{study.footerNote}</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm leading-5 font-medium text-brand">
              <a href={contact.website.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                {contact.website.value}
              </a>
              <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                {contact.linkedin.value}
              </a>
            </div>
          </Inner>
        </Container>
      </footer>

      <ContactSection />
    </>
  );
}
