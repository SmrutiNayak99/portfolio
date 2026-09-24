"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/content/site";
import { cx } from "./ui";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/#work") return pathname.startsWith("/work");
  return pathname.startsWith(href);
}

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  // The menu remembers which page it was opened on, so it closes itself on navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  const goBack = () => {
    const cameFromSite = typeof document !== "undefined" && document.referrer.startsWith(window.location.origin);
    if (cameFromSite && window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 border-b border-line bg-page/92 backdrop-blur-[8px]",
        isHome ? "pb-4 md:pb-6" : "pb-4 md:pb-5",
      )}
    >
      <nav
        aria-label="Primary"
        className={cx(
          "mx-auto flex max-w-[1440px] items-center justify-between px-5 pt-4 md:px-12 xl:px-[120px]",
          isHome ? "md:pt-10" : "md:pt-5",
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 rounded-md" aria-label={`${site.shortName} — home`}>
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-[11px] leading-[14px] font-bold tracking-[0.22px] text-white">
            {site.initials}
          </span>
          <span className="text-[15px] leading-5 font-semibold text-ink">{site.shortName}</span>
        </Link>

        <ul className="hidden items-start gap-5 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "block py-1.5 text-sm leading-5 transition-colors",
                    active ? "font-semibold text-ink" : "font-medium text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5 text-[13px] leading-[18px] font-semibold">
          {!isHome && (
            <button
              type="button"
              onClick={goBack}
              className="hidden items-center gap-2 rounded-full border border-line-strong bg-white py-2 pr-4 pl-3.5 text-ink transition-colors hover:border-ink/30 sm:flex"
            >
              <span aria-hidden>←</span>
              <span>Back</span>
            </button>
          )}
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-white transition-colors hover:bg-ink/85"
          >
            <span>Contact me</span>
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-[34px] items-center justify-center rounded-full border border-line-strong bg-white text-ink md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              {open ? (
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2.5 5h11M2.5 11h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="mx-5 mt-4 flex flex-col border-t border-line pt-2 md:hidden">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cx("block py-3 text-base", active ? "font-semibold text-ink" : "font-medium text-muted")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
