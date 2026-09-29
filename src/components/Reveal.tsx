"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STEP = 90; // ms between cards revealed together
const SELECTOR = "[data-reveal], [data-reveal-children] > *";

/**
 * Fades cards up once as they scroll into view. Elements are hidden by CSS only while
 * `html.js-reveal` is set (added before paint in the layout), so without JS everything shows.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = () =>
      [...document.querySelectorAll<HTMLElement>(SELECTOR)].filter((el) => !el.classList.contains("is-visible"));
    if (!("IntersectionObserver" in window)) {
      pending().forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            const el = e.target as HTMLElement;
            io.unobserve(el);
            // Stagger siblings that arrive together; clear the delay afterwards so hover effects stay instant.
            el.style.transitionDelay = `${i * STEP}ms`;
            el.classList.add("is-visible");
            setTimeout(() => (el.style.transitionDelay = ""), 900 + i * STEP);
          });
      },
      // Fire as soon as any edge enters the viewport: a fraction threshold made tall images wait until they were mostly on screen.
      { rootMargin: "0px 0px -24px 0px", threshold: 0 },
    );
    pending().forEach((el) => io.observe(el));
    // Elements rendered after the first pass (a re-render, a hot reload) would otherwise stay hidden.
    const mo = new MutationObserver(() => pending().forEach((el) => io.observe(el)));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
