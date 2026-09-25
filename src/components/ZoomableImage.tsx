"use client";

import Image from "next/image";
import { useRef } from "react";

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
  const img = (
    <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className="size-full object-cover object-top" />
  );
  if (!zoom) return img;

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="block size-full cursor-zoom-in overflow-hidden [&_img]:transition-[transform,filter] [&_img]:duration-500 [&_img]:ease-out hover:[&_img]:scale-[1.012] hover:[&_img]:brightness-[1.02]"
        aria-label={`Enlarge: ${alt}`}
      >
        {img}
      </button>
      <dialog
        ref={dialog}
        data-lenis-prevent
        onClick={() => dialog.current?.close()}
        className="m-auto max-h-none max-w-none cursor-zoom-out bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution original in the lightbox */}
        <img
          src={src}
          alt={alt}
          className="max-h-[92vh] w-auto max-w-[94vw] rounded-xl bg-white object-contain shadow-2xl"
          style={{ width: Math.min(width * 1.5, 1600) }}
        />
      </dialog>
    </>
  );
}
