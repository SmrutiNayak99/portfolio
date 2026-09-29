"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

type Img = { src: string; alt: string; w: number; h: number };

/**
 * Before/after comparison: drag anywhere (or use arrow keys on the handle) to move the divider.
 * `touch-action: pan-y` keeps vertical page scrolling working on phones while horizontal drags move the divider.
 */
export function CompareSlider({
  before,
  after,
  aspect,
  priority,
  className,
}: {
  before: Img;
  after: Img;
  /** Visible aspect ratio (w / h). Images are cropped from the top when shorter than their own ratio. */
  aspect: number;
  priority?: boolean;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function moveTo(clientX: number) {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }

  function onDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  }

  const sizes = "(min-width: 1280px) 1072px, 90vw";

  return (
    <div
      ref={box}
      className={`relative w-full cursor-ew-resize overflow-hidden select-none touch-pan-y ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
      onPointerDown={onDown}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={after.src} alt={after.alt} fill priority={priority} sizes={sizes} draggable={false} className="object-cover object-top" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill priority={priority} sizes={sizes} draggable={false} className="object-cover object-top" />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs leading-4 font-semibold tracking-[0.72px] text-white uppercase backdrop-blur md:top-4 md:left-4">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-brand px-3 py-1 text-xs leading-4 font-semibold tracking-[0.72px] text-white uppercase md:top-4 md:right-4">
        After
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgb(13_13_26/0.12)]" style={{ left: `${pos}%` }} />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before`}
        onKeyDown={onKey}
        className="absolute top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_6px_20px_-6px_rgb(13_13_26/0.45)] outline-none focus-visible:ring-2 focus-visible:ring-brand"
        style={{ left: `${pos}%` }}
      >
        <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 5.5L3 10l4.5 4.5M12.5 5.5L17 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
