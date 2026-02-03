import { NavigationItem } from "@/app/types/navigation";

export const navigationData: NavigationItem[] = [
  { name: 'Accueil', href: '/', current: true },
  
  { name: 'Nos Prestations', href: '/Nos-prestations', current: false },
  
  { name: 'Équipe', href: "/equipes", current: false },
  { name: 'Contact', href: '/Contact', current: false },
];