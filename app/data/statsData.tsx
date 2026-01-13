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
    value: 50,
    suffix: "k",
    heading: "Projets réalisés",
    subheading:
      "Livraison réussie d’une large gamme de missions dans des secteurs variés.",
  },
  {
    icon: <FaSmile className="text-4xl text-azure-500" />,
    value: 100,
    suffix: "%",
    heading: "Satisfaction client",
    subheading:
      "Nous construisons des relations durables et visons la pleine satisfaction de nos partenaires.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-azure-500" />,
    value: 5,
    suffix: "+",
    heading: "Membres de l'équipe",
    subheading:
      "Une équipe pluridisciplinaire d’étudiants engagés au service de vos projets.",
  },
];

