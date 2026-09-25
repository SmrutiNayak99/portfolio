import { contact, contactRows } from "@/content/site";
import { CopyButton } from "./CopyButton";
import { Container, Inner, Kicker } from "./ui";

export function ContactSection({ websiteLabel = "Portfolio" }: { websiteLabel?: "Website" | "Portfolio" }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink pt-16 pb-10 md:pt-[88px] md:pb-14 lg:pt-[120px] lg:pb-16">
      <Container>
        <Inner className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 md:gap-20 lg:flex-row">
            <div className="flex flex-1 flex-col gap-5">
              <Kicker tone="light">{contact.kicker}</Kicker>
              <h2
                id="contact-heading"
                className="text-[32px] leading-[38px] font-bold tracking-[-0.64px] text-white md:text-[44px] md:leading-[50px] md:tracking-[-0.88px] lg:max-w-[560px]"
              >
                {contact.heading}
              </h2>
            </div>
            <dl data-reveal-children className="flex flex-1 flex-col gap-3.5 font-medium lg:pt-11">
              {contactRows(websiteLabel).map((row) => (
                <div key={row.label} className="flex gap-4 border-b border-night-line pb-3">
                  <dt className="w-[100px] shrink-0 text-sm leading-5 text-night-muted">{row.label}</dt>
                  <dd className="min-w-0 flex-1 text-[15px] leading-5 break-words text-white">
                    {row.copy ? (
                      <CopyButton
                        value={row.value}
                        label={row.label}
                        className="cursor-copy text-left underline-offset-4 transition-colors hover:text-brand-light hover:underline"
                      />
                    ) : row.href ? (
                      <a
                        href={row.href}
                        {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="underline-offset-4 transition-colors hover:text-brand-light hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-2 pt-6 text-[13px] leading-[18px] font-medium text-night-foot md:flex-row md:justify-between md:gap-6 md:pt-12">
            <p>{contact.footerLeft}</p>
            <p>{contact.footerRight}</p>
          </div>
        </Inner>
      </Container>
    </section>
  );
}
