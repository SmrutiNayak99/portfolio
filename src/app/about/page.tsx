import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { Container, Inner, Kicker } from "@/components/ui";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  openGraph: { title: about.meta.title, description: about.meta.description },
};

const { hero, howIWork, experience, skills, education, beyondWork } = about;

function Hero() {
  return (
    <section aria-label="About" className="pt-[104px] pb-16 md:pt-28 md:pb-[72px] lg:pt-40 lg:pb-24">
      <Container>
        <Inner className="flex flex-col gap-10 md:gap-20 lg:flex-row">
          <div className="enter-late hidden shrink-0 lg:block">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={360}
              height={420}
              priority
              sizes="360px"
              className="aspect-[360/420] w-[360px] rounded-[28px] object-cover"
            />
          </div>
          <div className="stagger flex min-w-0 flex-1 flex-col gap-6">
            <Kicker>{hero.kicker}</Kicker>
            <h1 className="text-[34px] leading-10 font-bold tracking-[-0.68px] text-ink md:text-[46px] md:leading-[50px] md:tracking-[-0.92px] lg:text-[52px] lg:leading-[58px] lg:tracking-[-1.04px]">
              {hero.title}
            </h1>
            <p className="text-base leading-[27px] text-body md:text-lg md:leading-[30px]">{hero.body}</p>
          </div>
        </Inner>
      </Container>
    </section>
  );
}

function SectionKicker({ children }: { children: string }) {
  return <Kicker className="self-center">{children}</Kicker>;
}

function HowIWork() {
  return (
    <section aria-label="How I work" className="py-16 md:py-[88px] lg:py-[120px]">
      <Container>
        <Inner className="flex flex-col gap-8">
          <SectionKicker>{howIWork.kicker}</SectionKicker>
          <ul data-reveal-children className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {howIWork.tiles.map((tile, i) => (
              <li
                key={tile.title}
                className={`flex flex-col gap-3 rounded-[20px] border border-line bg-white p-7 transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_12px_32px_-18px_rgb(13_13_26/0.18)] ${
                  i === howIWork.tiles.length - 1 && howIWork.tiles.length % 2 === 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <h2 className="text-lg leading-[23px] font-bold tracking-[-0.18px] text-ink md:text-[22px] md:leading-7 md:tracking-[-0.22px]">
                  {tile.title}
                </h2>
                <p className="text-[15px] leading-6 text-muted">{tile.body}</p>
              </li>
            ))}
          </ul>
        </Inner>
      </Container>
    </section>
  );
}

function Experience() {
  return (
    <section aria-label="Experience" className="py-16 md:py-[88px] lg:py-[120px]">
      <Container>
        <Inner className="flex flex-col gap-8">
          <SectionKicker>{experience.kicker}</SectionKicker>
          <ol data-reveal-children className="flex flex-col divide-y divide-line">
            {experience.roles.map((r) => (
              <li key={r.company} className="flex flex-col gap-6 py-8 md:flex-row md:gap-12">
                <div className="flex flex-col gap-1 md:w-[312px] md:shrink-0 lg:w-[320px]">
                  <h2 className="text-xl leading-[26px] font-bold tracking-[-0.2px] text-ink">{r.company}</h2>
                  <p className="text-[15px] leading-[22px] font-medium text-ink">{r.role}</p>
                  <p className="text-sm leading-5 text-muted">{r.dates}</p>
                </div>
                <ul className="flex min-w-0 flex-1 flex-col gap-2.5">
                  {r.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-6">
                      <span aria-hidden className="w-4 shrink-0 text-brand">
                        —
                      </span>
                      <span className="min-w-0 flex-1 text-body">{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Inner>
      </Container>
    </section>
  );
}

function Tile({ title, small, children }: { title: string; small?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-[20px] border border-line bg-white p-7">
      <h2
        className={
          small
            ? "text-[15px] leading-[18px] font-semibold text-ink"
            : "text-xl leading-[26px] font-bold tracking-[-0.2px] text-ink"
        }
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillsAndEducation() {
  return (
    <section aria-label="Skills and education" className="py-16 md:py-[88px] lg:py-[120px]">
      <Container>
        <Inner data-reveal-children className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_295px] lg:grid-cols-[1fr_384px]">
          <div className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-7">
            <h2 className="text-xl leading-[26px] font-bold tracking-[-0.2px] text-ink">{skills.title}</h2>
            <dl className="flex flex-col text-[15px] leading-[22px]">
              {skills.rows.map((r) => (
                <div key={r.label} className="flex flex-col gap-1 border-t border-line py-3 lg:flex-row lg:gap-5">
                  <dt className="font-semibold text-ink lg:w-[150px] lg:shrink-0">{r.label}</dt>
                  <dd className="min-w-0 flex-1 text-muted">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-6">
            <Tile title={education.title}>
              <div className="flex flex-col gap-2">
                <p className="text-[15px] leading-[22px] font-semibold text-ink">{education.degree}</p>
                <p className="text-sm leading-5 text-muted">{education.detail}</p>
              </div>
            </Tile>
            <Tile title={beyondWork.title} small>
              <p className="text-base leading-[25px] text-muted">{beyondWork.body}</p>
            </Tile>
          </div>
        </Inner>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <HowIWork />
      <Experience />
      <SkillsAndEducation />
      <ContactSection />
    </>
  );
}
