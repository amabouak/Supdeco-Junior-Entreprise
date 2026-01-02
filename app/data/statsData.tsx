import { StatItem } from "../types/stats";
import { FaCheck, FaSmile, FaUserFriends } from "react-icons/fa";

export const statsData: StatItem[] = [
  {
    icon: <FaUserFriends className="text-4xl text-azure-500" />,
    value: 5,
    suffix: "+",
    heading: "Années d'expérience",
    subheading:
      "Nous fournissons des solutions innovantes à nos clients depuis plus de 5 ans.",
  },
  {
    icon: <FaCheck className="text-4xl text-azure-500" />,
    value: 90,
    suffix: "k",
    heading: "Projets réalisés",
    subheading:
      "Livraison réussie d'une large gamme de solutions innovantes dans plusieurs secteurs.",
  },
  {
    icon: <FaSmile className="text-4xl text-azure-500" />,
    value: 100,
    suffix: "%",
    heading: "Satisfaction client",
    subheading:
      "Nous sommes fiers de construire des relations durables et de dépasser les attentes.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-azure-500" />,
    value: 20,
    suffix: "+",
    heading: "Membres de l'équipe",
    subheading:
      "Notre équipe d'experts est dédiée à fournir des solutions innovantes aux clients.",
  },
];

