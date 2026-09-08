import { Linkedin, Mail, Facebook, Instagram, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  /** aria-label / title. Brand names stay Latin in both languages. */
  label: string;
  /** mailto: links must not open in a new tab. */
  external: boolean;
}

/**
 * Single source of truth for Ahmed's social links.
 * Used by the hero social row and the footer icon row.
 */
export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmed--fadhl",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/ahmed.fadhl.255800/",
    label: "Facebook",
    external: true,
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ahmed_fadhl/",
    label: "Instagram",
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:delov.ahmed@gmail.com",
    label: "Email",
    external: false,
  },
];
