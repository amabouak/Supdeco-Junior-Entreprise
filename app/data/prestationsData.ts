
export interface Prestation {
  category: string;
  description: string;
  services: string[];
  image: string;
}

export const prestationsData: Prestation[] = [
  {
    category: "STRATÉGIE",
    description: "Nous vous aidons à structurer votre vision et prendre des décisions éclairées.",
    services: [
      "Études de marché",
      "Benchmark", 
      "Veille concurrentielle",
      "Business plan",
      "Étude de positionnement"
    ],
    image: "/assets/prestations/strategie.jpg"
  },
  {
    category: "MARKETING & COMMUNICATION", 
    description: "Nous vous accompagnons dans la construction de messages clairs et cohérents ainsi qu'une meilleure visibilité.",
    services: [
      "Stratégie de communication",
      "Plan de communication", 
      "Marketing digital"
    ],
    image: "/assets/prestations/marketing.jpg"
  },
  {
    category: "EXPÉRIENCE CLIENT",
    description: "Nous analysons la perception et la satisfaction de vos clients pour améliorer vos performances.",
    services: [
      "Client mystère",
      "Étude de notoriété",
      "Étude de satisfaction",
      "Focus group"
    ],
    image: "/assets/prestations/client.jpg"
  },
  {
    category: "ENTREPRENEURIAT",
    description: "Nous assistons dans l'étude et dans la mise en œuvre de vos projets.",
    services: [
      "Business plan",
      "Pitch deck",
      "Étude de faisabilité"
    ],
    image: "/assets/prestations/entrepreneuriat.jpg"
  },
  {
    category: "INFORMATIQUE & DIGITAL",
    description: "Nous concevons des solutions numériques adaptées à vos besoins.",
    services: [
      "Création et design de sites web",
      "Développement d'applications mobiles"
    ],
    image: "/assets/prestations/digital.jpg"
  }
];
