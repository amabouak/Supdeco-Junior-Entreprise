import { NavigationItem } from "@/app/types/navigation";

export const navigationData: NavigationItem[] = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'À propos', href: '#about', current: false },
  { name: 'Nos Prestations', href: '/Nos-prestations', current: false },
  { name: 'Projets', href: '#projects', current: false },
  { name: 'Équipe', href: "/equipes", current: false },
  { name: 'Contact', href: '/Contact', current: false },
];