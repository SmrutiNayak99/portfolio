import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Reveal } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { site } from "@/content/site";
import "./globals.css";

// Inter 4 variable, subset to Latin + punctuation + arrows. Google's "latin" subset omits → and ←,
// which the design uses throughout ("Contact me →", "← Back").
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Product designer who ships the code`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} · Product designer who ships the code`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Opt in to scroll reveals before first paint, so cards never flash visible then hide. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-reveal')" }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Reveal />
        <Nav />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
