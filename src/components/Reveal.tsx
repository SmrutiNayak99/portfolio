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
    const els = [...document.querySelectorAll<HTMLElement>(SELECTOR)].filter((el) => !el.classList.contains("is-visible"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
