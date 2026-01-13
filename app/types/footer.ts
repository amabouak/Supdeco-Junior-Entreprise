// types/footer.ts

export type FooterLink = {
  label: string;   
  href: string;    
};

export type FooterItem = {
  id: number;
  links: FooterLink[];
};
