"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PrestationCard from "./PrestationCard";
import { prestationsData } from "@/app/data/prestationsData";
import { RiBriefcase5Line } from "react-icons/ri";

const Prestations = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-slate-50/50 to-emerald-50/50">
      <div className="mx-auto px-4 sm:px-12 max-w-7xl">
        
        
        <div className="text-center mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/3 to-orange-500/5 rounded-3xl blur-3xl" />
          
          <div className="inline-flex items-center gap-3 mb-8 relative z-10 mx-auto w-fit">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping" />
            <RiBriefcase5Line className="w-12 h-12 text-emerald-600 drop-shadow-lg" />
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-ping" 
                 style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-azure-950 drop-shadow-2xl mb-6 leading-none relative z-10">
               Nos Prestations
         </h1>


          <div className="w-40 h-1 bg-gradient-to-r from-emerald-500 via-orange-500 to-yellow-500 rounded-full mx-auto mb-8 shadow-lg" />

          <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium relative z-10">
            Excellence professionnelle au service de vos ambitions stratégiques, marketing et digitales
          </p>
        </div>

        {/* GRILLE - SANS BlurFade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {prestationsData.map((prestation, index) => (
            <motion.div
              key={prestation.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <PrestationCard prestation={prestation} index={index} />
            </motion.div>
          ))}
        </div>

        {/* CTA - SANS BlurFade */}
        <div className="text-center mt-24">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            
           className="
  !bg-gradient-to-r !from-blue-700 !via-blue-400 !to-yellow-200
  text-gray-900
  px-12 py-5
  rounded-full
  font-medium text-lg
  shadow-lg
  transition-all duration-300 ease-out
  hover:!from-blue-800 hover:!via-blue-500 hover:!to-yellow-300
  hover:shadow-2xl
"



            
          >
            Obtenir un devis personnalisé
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Prestations;
