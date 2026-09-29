"use client";

import { useEffect, useRef, useState } from "react";

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for non-secure contexts / older browsers.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}

/** Copies `value` on click. An instant tooltip says "Click to copy" on hover/focus and flips to "Copied" after a click. */
export function CopyButton({ value, label, className }: { value: string; label: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    if (!(await writeClipboard(value))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="group/copy relative inline-flex">
      <button type="button" onClick={copy} aria-label={`Copy ${label.toLowerCase()} ${value}`} className={className}>
        {value}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute bottom-full left-0 mb-2 inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-ink shadow-[0_6px_16px_-6px_rgb(0_0_0/0.4)] transition-opacity duration-100 ${
          copied ? "opacity-100" : "opacity-0 group-hover/copy:opacity-100 group-has-[:focus-visible]/copy:opacity-100"
        }`}
      >
        {copied ? (
          <>
            <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-brand">
              <path d="M2.5 6.5l2.2 2.2L9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Copied
          </>
        ) : (
          "Click to copy"
        )}
      </span>
    </span>
  );
}
