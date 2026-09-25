"use client";

import Image from "next/image";
import { useRef } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION = 420;

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
  const thumb = useRef<HTMLImageElement>(null);
  const full = useRef<HTMLImageElement>(null);
  const busy = useRef(false);

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

  function open() {
    const d = dialog.current;
    const t = thumb.current;
    const f = full.current;
    if (!d || !t || !f || busy.current) return;

    // Start from the already-loaded thumbnail so the zoom never waits on the network,
    // then swap in the full-resolution file once it has decoded.
    f.src = t.currentSrc || src;
    const hi = new window.Image();
    hi.src = src;
    hi.decode().then(() => f.isConnected && (f.src = src), () => {});

    d.showModal();
    if (reducedMotion()) return;

    busy.current = true;
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
      busy.current = false;
    });
  }

  function close() {
    const d = dialog.current;
    const t = thumb.current;
    const f = full.current;
    if (!d || !t || !f || busy.current) return;
    if (reducedMotion()) return d.close();

    busy.current = true;
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
      busy.current = false;
    });
  }

  return (
    <>
      <button type="button" onClick={open} className="block size-full cursor-zoom-in overflow-hidden [&_img]:transition-[filter] [&_img]:duration-300 hover:[&_img]:brightness-[1.03]" aria-label={`Enlarge: ${alt}`}>
        {img}
      </button>
      <dialog
        ref={dialog}
        data-lenis-prevent
        onClick={close}
        onCancel={(e) => {
          // Escape: run the same animated close instead of the native instant one.
          e.preventDefault();
          close();
        }}
        className="m-auto max-h-none max-w-none cursor-zoom-out overflow-visible bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution original in the lightbox */}
        <img
          ref={full}
          alt={alt}
          width={width}
          height={height}
          className="block origin-top-left rounded-xl bg-white object-contain shadow-2xl will-change-transform"
          // Largest size that fits the viewport at the image's own aspect ratio, so the zoom maps cleanly onto the thumbnail.
          style={{
            width: `min(${Math.min(width * 1.5, 1600)}px, 94vw, calc(92vh * ${width / height}))`,
            aspectRatio: `${width} / ${height}`,
          }}
        />
      </dialog>
    </>
  );
}
