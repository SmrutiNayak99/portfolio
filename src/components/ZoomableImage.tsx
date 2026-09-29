"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION = 420;
/** Extra magnification when the open image is clicked (at least 40% more, per the brief). */
const ZOOM = 1.6;
/** Taller than this (h / w) opens fitted to width and scrolls, instead of shrinking to fit the screen. */
const TALL = 1.2;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Transform that maps the `to` box onto the `from` box, for a FLIP zoom. */
function invert(from: DOMRect, to: DOMRect) {
  const sx = from.width / to.width;
  const sy = from.height / to.height;
  const dx = from.left - to.left;
  const dy = from.top - to.top;
  return `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
}

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  zoom,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  zoom: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLImageElement>(null);
  const full = useRef<HTMLImageElement>(null);
  const busy = useRef(false);
  const [zoomed, setZoomed] = useState(false);

  const img = (
    <Image
      ref={thumb}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className="size-full object-cover object-top"
    />
  );
  if (!zoom) return img;

  // Fitted size: the whole image on screen, or full width for tall images (which then scroll).
  const tall = height / width > TALL;
  const fit = tall
    ? `min(${Math.min(width * 1.5, 1200)}px, 94vw)`
    : `min(${Math.min(width * 1.5, 1600)}px, 94vw, calc(92vh * ${width / height}))`;
  const imgWidth = zoomed ? `calc(${fit} * ${ZOOM})` : fit;

  /** Runs `change`, then animates the image from where it was to where it lands. */
  function flip(change: () => void, from?: DOMRect) {
    const f = full.current;
    const s = scroller.current;
    if (!f || !s) return;
    const before = from ?? f.getBoundingClientRect();
    change();
    if (reducedMotion()) return;
    busy.current = true;
    s.style.overflow = "hidden"; // no scrollbar flashes while the image is transformed
    const anim = f.animate([{ transform: invert(before, f.getBoundingClientRect()) }, { transform: "none" }], {
      duration: DURATION * 0.8,
      easing: EASE,
    });
    anim.finished.finally(() => {
      s.style.overflow = "";
      busy.current = false;
    });
  }

  function toggleZoom(e?: MouseEvent) {
    const f = full.current;
    const s = scroller.current;
    if (!f || !s || busy.current) return;
    const rect = f.getBoundingClientRect();
    const box = s.getBoundingClientRect();
    // Keep the clicked point (or the centre, from the button) under the cursor.
    const cx = e ? e.clientX : box.left + box.width / 2;
    const cy = e ? e.clientY : box.top + box.height / 2;
    const px = Math.min(Math.max((cx - rect.left) / rect.width, 0), 1);
    const py = Math.min(Math.max((cy - rect.top) / rect.height, 0), 1);
    const next = !zoomed;
    flip(() => {
      f.style.width = next ? `calc(${fit} * ${ZOOM})` : fit;
      s.scrollLeft = f.offsetLeft + px * f.offsetWidth - (cx - box.left);
      s.scrollTop = f.offsetTop + py * f.offsetHeight - (cy - box.top);
    }, rect);
    setZoomed(next);
  }

  function open() {
    const d = dialog.current;
    const t = thumb.current;
    const f = full.current;
    const s = scroller.current;
    if (!d || !t || !f || !s || busy.current) return;

    // Start from the already-loaded thumbnail so the zoom never waits on the network,
    // then swap in the full-resolution file once it has decoded.
    f.src = t.currentSrc || src;
    const hi = new window.Image();
    hi.src = src;
    hi.decode().then(() => f.isConnected && (f.src = src), () => {});

    d.showModal();
    s.scrollTo(0, 0);
    if (reducedMotion()) return;

    busy.current = true;
    s.style.overflow = "hidden";
    const from = t.getBoundingClientRect();
    const to = f.getBoundingClientRect();
    t.style.visibility = "hidden";
    const anim = f.animate(
      [
        { transform: invert(from, to), borderRadius: "0px" },
        { transform: "none", borderRadius: "12px" },
      ],
      { duration: DURATION, easing: EASE },
    );
    d.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DURATION * 0.7, easing: "ease-out", pseudoElement: "::backdrop" });
    anim.finished.finally(() => {
      t.style.visibility = "";
      s.style.overflow = "";
      busy.current = false;
    });
  }

  function reset() {
    const f = full.current;
    if (f) f.style.width = "";
    setZoomed(false);
  }

  function close() {
    const d = dialog.current;
    const t = thumb.current;
    const f = full.current;
    const s = scroller.current;
    if (!d || !t || !f || !s || busy.current) return;
    if (reducedMotion()) {
      d.close();
      return reset();
    }

    busy.current = true;
    s.style.overflow = "hidden";
    const from = t.getBoundingClientRect();
    const to = f.getBoundingClientRect();
    t.style.visibility = "hidden";
    const anim = f.animate(
      [
        { transform: "none", borderRadius: "12px" },
        { transform: invert(from, to), borderRadius: "0px" },
      ],
      { duration: DURATION * 0.85, easing: EASE, fill: "forwards" },
    );
    d.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: DURATION * 0.6,
      easing: "ease-in",
      fill: "forwards",
      pseudoElement: "::backdrop",
    });
    anim.finished.finally(() => {
      d.close();
      d.getAnimations({ subtree: true }).forEach((a) => a.cancel());
      t.style.visibility = "";
      s.style.overflow = "";
      reset();
      busy.current = false;
    });
  }

  const control =
    "flex size-11 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <>
      <button type="button" onClick={open} className="block size-full cursor-zoom-in overflow-hidden [&_img]:transition-[filter] [&_img]:duration-300 hover:[&_img]:brightness-[1.03]" aria-label={`Enlarge: ${alt}`}>
        {img}
      </button>
      <dialog
        ref={dialog}
        data-lenis-prevent
        aria-label={alt}
        onCancel={(e) => {
          // Escape: run the same animated close instead of the native instant one.
          e.preventDefault();
          close();
        }}
        className="fixed inset-0 m-0 size-full max-h-none max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {/* Anything outside the image closes; the image itself toggles zoom. */}
        <div ref={scroller} onClick={close} className="relative size-full overflow-auto overscroll-contain">
          <div className="flex min-h-full w-max min-w-full items-center justify-center px-[3vw] py-[4vh]">
            {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution original in the lightbox */}
            <img
              ref={full}
              alt={alt}
              width={width}
              height={height}
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom(e);
              }}
              className={`block max-w-none shrink-0 origin-top-left rounded-xl bg-white object-contain shadow-2xl will-change-transform ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
              style={{ width: imgWidth, aspectRatio: `${width} / ${height}` }}
            />
          </div>
        </div>
        <div className="fixed top-4 right-4 flex gap-2 md:top-6 md:right-6">
          <button type="button" onClick={() => toggleZoom()} className={control} aria-label={zoomed ? "Zoom out" : "Zoom in"}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5M8 11h6" />
              {!zoomed && <path d="M11 8v6" />}
            </svg>
          </button>
          <button type="button" onClick={close} className={control} aria-label="Close">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
}
