"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Inertial page scrolling. Off for visitors who prefer reduced motion. */
export function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Offset keeps anchored sections clear of the fixed nav (matches scroll-padding-top).
    lenis.current = new Lenis({ autoRaf: true, lerp: 0.12, anchors: { offset: -96 } });
    return () => {
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  // New page: start at the top, unless the URL points at a section.
  useEffect(() => {
    if (!window.location.hash) lenis.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
