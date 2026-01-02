import { NavigationItem } from "@/app/types/navigation";

export const navigationData: NavigationItem[] = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'À propos', href: '#about', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'Projets', href: '#projects', current: false },
  { name: 'Équipe', href: '#team', current: false },
  { name: 'Contact', href: '#contact', current: false },
];
