import { FaLaptop, FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";
import { ServiceItem } from "../types/services";

export const servicesData: ServiceItem[] = [
  {
    icon: <FaLaptop className="text-4xl text-azure-600" />,
    country: "Développement Web & Mobile",
    paragraph: "Notre équipe de développeurs est prête à donner vie à vos idées.",
  },
  {
    icon: <FaChartLine className="text-4xl text-azure-600" />,
    country: "Analyse de Données",
    paragraph:
      "Nous fournissons des informations basées sur les données pour vous aider à prendre des décisions éclairées.",
  },
  {
    icon: <FaRobot className="text-4xl text-azure-600" />,
    country: "IA & Machine Learning",
    paragraph: "Exploitez la puissance de l'IA pour optimiser vos processus métier.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-azure-600" />,
    country: "Cybersécurité",
    paragraph:
      "Protégez vos données et sécurisez votre entreprise avec nos solutions de cybersécurité.",
  },
];
