"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHandshake, FaSearch, FaCogs, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "1. Prise de contact",
    description: "Premier échange pour comprendre votre contexte et vos attentes.",
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "2. Analyse du besoin",
    description: "Réunion de cadrage afin de définir précisément les objectifs et le périmètre de la mission.",
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: "3. Phase opérationnelle",
    description: "Réalisation de la mission par une équipe dédiée, avec points de suivi réguliers.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: "4. Synthèse et livrables",
    description: "Présentation synthétique des résultats et remise de livrables exploitables.",
  },
];

const Process = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-azure-50 to-blue-50 py-20">
      <div className="mx-auto px-5 sm:px-24 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-azure-950 mb-4">
            Notre Démarche
          </h2>
          <p className="text-xl text-bluegrey max-w-3xl mx-auto">
            Une méthodologie rigoureuse pour garantir le succès de vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
            >
              {/* Connecting line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-azure-300 to-transparent" />
              )}
              
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl text-center h-full relative z-10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-azure-500 to-azure-700 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-midnightblue mb-3">
                  {step.title}
                </h3>
                <p className="text-bluegrey font-medium">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

