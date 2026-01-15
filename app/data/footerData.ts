

import { FooterItem } from "../types/footer";

export const footerData: FooterItem[] = [
  {
    id: 1,
    links: [
      { label: "Accueil",         href: "/" },
      { label: "À propos",        href: "/about" },
      { label: "Nos Prestations", href: "/Nos-prestations" },
      { label: "Projets",         href: "#" },
    ],
  },
  {
    id: 2,
    links: [
      { label: "Équipe",          href: "/equipes" },
      { label: "Contact",         href: "/Contact" },
      { label: "Confidentialité", href: "#" },
      { label: "Conditions",      href: "#" },
    ],
  },
];
