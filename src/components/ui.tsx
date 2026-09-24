import type { ComponentProps, ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Horizontal page gutter: 20px mobile, 48px tablet, 120px desktop, max content width 1200. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[120px]", className)} {...props} />;
}

export function Inner({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-[1200px]", className)} {...props} />;
}

/** The blue dash + uppercase label used above every heading. */
export function Kicker({ children, tone = "brand", className }: { children: ReactNode; tone?: "brand" | "light"; className?: string }) {
  const color = tone === "light" ? "text-brand-light" : "text-brand";
  const bar = tone === "light" ? "bg-brand-light" : "bg-brand";
  return (
    <p className={cx("flex items-center gap-2.5 text-[13px] leading-[18px] font-semibold tracking-[1.3px] uppercase", color, className)}>
      <span aria-hidden className={cx("h-0.5 w-[18px] shrink-0", bar)} />
      <span>{children}</span>
    </p>
  );
}

/** Small uppercase caption, e.g. "OUTCOME", "DECISIONS", "BASED IN". */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("text-xs leading-4 font-semibold tracking-[0.96px] text-subtle uppercase", className)}>{children}</p>;
}
