export const site = {
  name: "Smruti Ranjan Nayak",
  shortName: "Smruti Nayak",
  initials: "SN",
  role: "Design Lead, OmnisAI",
  description:
    "Product designer who ships the code. Smruti Ranjan Nayak leads design across OmnisAI's 14-product legal-AI suite.",
  url: "https://smrutinayak.vercel.app",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
] as const;

export type ContactRow = { label: string; value: string; href?: string; external?: boolean };

export const contact = {
  kicker: "GET IN TOUCH",
  heading: "Let's talk about the product you're building.",
  email: {
    label: "Email",
    value: "nsmruti66044@gmail.com",
    href: "mailto:nsmruti66044@gmail.com",
  },
  phone: { label: "Phone", value: "+91 99383 16275", href: "tel:+919938316275" },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/smrutinayak99",
    href: "https://www.linkedin.com/in/smrutinayak99",
    external: true,
  },
  website: {
    value: "pixhelp.framer.website",
    href: "https://pixhelp.framer.website/",
    external: true,
  },
  footerLeft: "Smruti Ranjan Nayak · Design Lead, OmnisAI",
  footerRight: "Confidential — shared for hiring review only · 2026",
};

/** Rows for the contact block. Home labels the last row "Website"; every other page says "Portfolio". */
export function contactRows(websiteLabel: "Website" | "Portfolio" = "Portfolio"): ContactRow[] {
  return [
    contact.email,
    contact.phone,
    contact.linkedin,
    { label: websiteLabel, ...contact.website },
  ];
}
