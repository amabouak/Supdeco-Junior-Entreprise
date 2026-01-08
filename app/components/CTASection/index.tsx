"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-gradient-to-r from-azure-950 via-azure-800 to-azure-600 py-20 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-azure-500/20 rounded-full blur-3xl"
        animate={isMounted ? {
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={isMounted ? {
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        } : {}}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="mx-auto px-5 sm:px-24 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer vos idées en réalité ?
          </h2>
          <p className="text-xl text-azure-100 max-w-2xl mx-auto mb-10">
            Rejoignez les entreprises qui nous font confiance pour leurs projets stratégiques
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-azure-950 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Obtenir un devis
                <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats counter */}
          <motion.div
            className="flex flex-wrap justify-center gap-12 mt-16"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-azure-200">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">30+</div>
              <div className="text-azure-200">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5</div>
              <div className="text-azure-200">Années d'expérience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;

