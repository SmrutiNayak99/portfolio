import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Shot } from "@/components/Shot";
import { Container, Inner, Kicker } from "@/components/ui";
import { home } from "@/content/home";

const { hero, strengths, work } = home;

function Hero() {
  return (
    <section aria-label="Introduction" className="pt-[104px] pb-16 md:pt-28 md:pb-[72px] lg:pt-[136px] lg:pb-24">
      <Container>
        <Inner className="flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-14 md:gap-20 lg:flex-row">
            <div className="stagger flex flex-1 flex-col gap-7">
              <Kicker>{hero.kicker}</Kicker>
              <h1 className="text-[44px] leading-[50px] font-bold tracking-[-1.1px] text-ink md:text-[60px] md:leading-[66px] md:tracking-[-1.5px] xl:text-[72px] xl:leading-[78px] xl:tracking-[-1.8px]">
                {hero.title}
                <span className="text-brand">.</span>
              </h1>
              <p className="text-lg leading-7 text-muted md:text-[22px] md:leading-[34px]">{hero.lede}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={hero.primaryCta.href}
                  className="press rounded-full bg-brand px-[22px] py-3.5 text-[15px] leading-5 font-semibold text-white hover:bg-[#0060dd]"
                >
                  {hero.primaryCta.label}
                </a>
                <Link
                  href={hero.secondaryCta.href}
                  className="press rounded-full border border-line bg-white px-[22px] py-3.5 text-[15px] leading-5 font-semibold text-ink hover:border-ink/25"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="enter-late hidden shrink-0 lg:block">
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                width={320}
                height={380}
                priority
                sizes="320px"
                className="aspect-[320/380] w-[320px] rounded-[28px] object-cover"
              />
            </div>
          </div>

          <dl data-reveal className="grid grid-cols-2 gap-x-6 gap-y-7 border-y border-line py-7 lg:grid-cols-[1fr_1fr_0.75fr_1.25fr] lg:gap-x-8">
            {hero.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1.5">
                <dt className="text-xs leading-4 font-semibold tracking-[0.96px] text-muted">{fact.label}</dt>
                <dd className="text-base leading-6 font-medium text-ink">
                  {fact.value}
                  {fact.note && <span className="block text-xs leading-6 text-faint">{fact.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </Inner>
      </Container>
    </section>
  );
}

function Strengths() {
  return (
    <section aria-label="What I'm good at" className="pb-16 md:pb-[88px] lg:pb-[120px]">
      <Container>
        <Inner className="flex flex-col gap-6">
          <Kicker>{strengths.kicker}</Kicker>
          <ol data-reveal-children className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {strengths.tiles.map((t, i) => (
              <li
                key={t.title}
                className="flex flex-col gap-4 overflow-hidden rounded-[20px] border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_12px_32px_-18px_rgb(13_13_26/0.18)] md:p-7"
              >
                <span className="text-[13px] leading-[18px] font-semibold tracking-[0.78px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl leading-[26px] font-bold tracking-[-0.1px] text-ink">{t.title}</h3>
                <p className="text-[15px] leading-[23px] text-muted">{t.body}</p>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-4 text-sm leading-5 font-semibold">
                  {t.proof.map((p) => (
                    <Link key={p.href} href={p.href} className="group/proof flex items-center gap-1.5 text-ink hover:text-brand">
                      {p.label}
                      <span aria-hidden className="text-brand transition-transform duration-200 group-hover/proof:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Inner>
      </Container>
    </section>
  );
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-16 md:py-[88px] lg:py-[120px]">
      <Container>
        <Inner className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <Kicker>{work.kicker}</Kicker>
              <h2
                id="work-heading"
                className="text-[34px] leading-[40px] font-bold tracking-[-0.68px] text-ink md:text-[44px] md:leading-[50px] md:tracking-[-0.88px]"
              >
                {work.title[0]}
                <br />
                {work.title[1]}
              </h2>
            </div>
            <p className="text-lg leading-7 text-muted md:w-[300px]">{work.aside}</p>
          </div>

          <ul data-reveal-children className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {work.cards.map((card, i) => (
              <li key={card.slug}>
                <Link
                  href={`/work/${card.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-page transition-[box-shadow,border-color,translate] duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_40px_-16px_rgb(13_13_26/0.16)]"
                >
                  <div className="overflow-hidden bg-brand-soft">
                    <Shot
                      shot={card.visual}
                      zoom={false}
                      priority={i < 2}
                      sizes="(min-width: 1280px) 588px, (min-width: 768px) 50vw, 100vw"
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                    <div className="flex justify-between gap-4 text-xs leading-4 font-semibold tracking-[0.96px]">
                      <span className="text-brand">{card.eyebrow}</span>
                      <span className="text-muted">{card.number}</span>
                    </div>
                    <h3 className="pr-6 text-[22px] leading-7 font-bold tracking-[-0.22px] text-ink md:text-2xl md:leading-[30px] md:tracking-[-0.24px]">
                      {card.title}
                    </h3>
                    <p className="text-[15px] leading-[23px] text-muted">{card.body}</p>
                    <span className="mt-auto flex items-center gap-2 pt-2 text-sm leading-5 font-semibold text-ink">
                      Read case study
                      <span aria-hidden className="nudge">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link href={work.more.href} className="self-center text-base leading-4 font-semibold text-brand hover:underline">
            {work.more.label}
          </Link>
        </Inner>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strengths />
      <Work />
      <ContactSection websiteLabel="Website" />
    </>
  );
}
