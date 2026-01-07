"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BlurFade from "@/app/magicui/ui/blur-fade";
import { teamData } from "../../data/teamData";
import TeamItemCard from "./TeamItemCard";
import Slider from "react-slick";
import { RiTeamLine, RiStarSmileLine } from "react-icons/ri";

const team = teamData;

const Team = () => {
  // ÉTAT CLIENT UNIQUEMENT pour éviter hydration mismatch
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipe: true,
    speed: 3000,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  };

  // Serveur et client rendent LE MÊME HTML
  if (!isClient) {
    return (
      <div className="min-h-screen py-24">
        <div className="mx-auto px-4 sm:px-12 max-w-7xl">
          {/* HEADER STATIQUE (identique serveur/client) */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
              <RiTeamLine className="w-10 h-10 text-yellow-500 drop-shadow-lg" />
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
            </div>
            <h5 className="text-2xl md:text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-azure-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              NOTRE ÉQUIPE
            </h5>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-azure-950 via-midnightblue to-black bg-clip-text text-transparent mb-6 leading-none">
              Pluridisciplinaire
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-emerald-500 rounded-full mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-bluegrey max-w-3xl mx-auto leading-relaxed font-medium">
              Supdeco Junior Entreprise s&apos;appuie sur une équipe pluridisciplinaire composée 
              d&apos;étudiants sélectionnés pour leurs compétences, leur motivation et leur 
              sens des responsabilités.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full font-semibold text-bluegrey shadow-xl border border-white/50">
                <RiStarSmileLine className="inline-block w-5 h-5 mr-2 text-yellow-500" />
                Excellence Académique
              </span>
              <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full font-semibold text-bluegrey shadow-xl border border-white/50">
                Engagement Total
              </span>
            </div>
          </div>

          {/* Slider statique serveur */}
          <div className="text-center px-5 pb-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-azure-600 to-blue-700">
              Rencontrez nos talents
            </h3>
          </div>
        </div>
      </div>
    );
  }

  // VERSION CLIENT avec animations
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-12 py-24 max-w-7xl">
        
        {/* HEADER ANIMÉ (client seulement) */}
        <BlurFade inView={isVisible}>
          <motion.div
            className="text-center mb-24 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Particules (client seulement) */}
            {isVisible && (
              <>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-azure-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6 relative z-10"
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <RiTeamLine className="w-10 h-10 text-yellow-500 drop-shadow-lg" />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            <motion.h5
              className="text-2xl md:text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-azure-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              NOTRE ÉQUIPE
            </motion.h5>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-azure-950 via-midnightblue to-black bg-clip-text text-transparent mb-6 leading-none relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Pluridisciplinaire
            </motion.h1>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-emerald-500 rounded-full mx-auto mb-8 relative z-10"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.8 }}
            />

            <motion.p
              className="text-xl md:text-2xl text-bluegrey max-w-3xl mx-auto leading-relaxed font-medium relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Supdeco Junior Entreprise s&apos;appuie sur une équipe pluridisciplinaire composée 
              d&apos;étudiants sélectionnés pour leurs compétences, leur motivation et leur 
              sens des responsabilités.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mt-12 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.span
                className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full font-semibold text-bluegrey shadow-xl border border-white/50 hover:shadow-2xl cursor-default inline-block"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <RiStarSmileLine className="inline-block w-5 h-5 mr-2 text-yellow-500" />
                Excellence Académique
              </motion.span>
              <motion.span
                className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full font-semibold text-bluegrey shadow-xl border border-white/50 hover:shadow-2xl cursor-default inline-block"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                Engagement Total
              </motion.span>
            </motion.div>
          </motion.div>
        </BlurFade>

        {/* SLIDER (client seulement) */}
        <BlurFade inView={isVisible}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center px-5 pb-8 mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-azure-600 to-blue-700">
              Rencontrez nos talents
            </h3>
          </motion.div>

          <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50/50 to-blue-50/50 backdrop-blur-sm border border-white/30 shadow-2xl">
            <Slider {...settings}>
              {team.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 1.5 }}
                >
                  <TeamItemCard item={item} />
                </motion.div>
              ))}
            </Slider>
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 from-azure-600 to-blue-700 px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white/20"
            >
              Rejoignez notre équipe ✨
            </motion.button>
          </motion.div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Team;
