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

/** Copies `value` on click and shows a short "Copied" confirmation next to it. */
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
    <span className="inline-flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label.toLowerCase()} ${value}`}
        title="Click to copy"
        className={className}
      >
        {value}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-xs leading-5 font-semibold text-white transition-all duration-200 ${
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        {copied && (
          <>
            <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6.5l2.2 2.2L9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Copied
          </>
        )}
      </span>
    </span>
  );
}
