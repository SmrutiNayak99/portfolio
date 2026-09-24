import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { MediaRowView } from "@/components/Media";
import { Container, Eyebrow, Inner, Kicker, cx } from "@/components/ui";
import { playground, type PlaygroundSection } from "@/content/playground";

export const metadata: Metadata = {
  title: playground.meta.title,
  description: playground.meta.description,
  openGraph: { title: playground.meta.title, description: playground.meta.description },
};

const { hero, sections } = playground;

function Hero() {
  return (
    <section aria-label="Playground" className="pt-[104px] pb-10 md:pt-28 md:pb-14 lg:pt-40 lg:pb-16">
      <Container>
        <Inner className="flex flex-col gap-5 md:gap-6">
          <Kicker>{hero.kicker}</Kicker>
          <h1 className="text-[36px] leading-[42px] font-bold tracking-[-0.72px] text-ink md:text-[50px] md:leading-[55px] md:tracking-[-1px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.28px]">
            {hero.title.map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="hidden md:block" />}
                {i > 0 && <span className="md:hidden"> </span>}
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg leading-7 text-muted md:text-[22px] md:leading-8">{hero.lede}</p>
        </Inner>
      </Container>
    </section>
  );
}

function Section({ section }: { section: PlaygroundSection }) {
  const headingId = `${section.id}-heading`;
  return (
    <section id={section.id} aria-labelledby={headingId} className="py-16 md:py-[88px] lg:py-[120px]">
      <Container>
        <Inner className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="flex flex-col gap-3.5 md:max-w-[640px] lg:w-[640px]">
              <Kicker>{section.kicker}</Kicker>
              <h2
                id={headingId}
                className="text-[28px] leading-[34px] font-bold tracking-[-0.56px] text-ink md:text-[32px] md:leading-[37px] md:tracking-[-0.64px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-0.8px]"
              >
                {section.title}
              </h2>
            </div>
            <p className="text-base leading-[26px] text-muted md:max-w-[520px] lg:w-[360px]">{section.description}</p>
          </div>

          <div className="flex flex-col gap-8">
            {section.groups.map((group, i) => (
              <div key={group.caption ?? i} className={cx("flex flex-col", group.gap === 16 ? "gap-4" : "gap-4 md:gap-8")}>
                {group.caption && <Eyebrow>{group.caption}</Eyebrow>}
                {group.rows.map((r, j) => (
                  <MediaRowView key={j} row={r} />
                ))}
              </div>
            ))}
          </div>
        </Inner>
      </Container>
    </section>
  );
}

export default function PlaygroundPage() {
  return (
    <>
      <Hero />
      {sections.map((s) => (
        <Section key={s.id} section={s} />
      ))}
      <ContactSection />
    </>
  );
}
