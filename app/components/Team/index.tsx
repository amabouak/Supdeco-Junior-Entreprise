"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlurFade from "@/app/magicui/ui/blur-fade";
import { teamData } from "../../data/teamData";
import TeamItemCard from "./TeamItemCard";
import Slider from "react-slick";
import { RiTeamLine, RiStarSmileLine } from "react-icons/ri";

// Composants pour les flèches personnalisées
const NextArrow = ({ onClick }: any) => (
  <div 
    className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-azure-800 hover:bg-yellow-500 text-white p-2 rounded-full shadow-lg transition-all hidden md:flex"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }: any) => (
  <div 
    className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-azure-800 hover:bg-yellow-500 text-white p-2 rounded-full shadow-lg transition-all hidden md:flex"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const team = teamData;

const Team = () => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Activé
    nextArrow: <NextArrow />, // Flèche droite perso
    prevArrow: <PrevArrow />, // Flèche gauche perso
    autoplay: true,
    swipe: true,
    speed: 800, // Vitesse de transition plus rapide (plus réactif au clic)
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } }, // On cache les flèches sur mobile
      { breakpoint: 500, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  if (!isClient) {
    return (
      <div className="min-h-screen py-24">
        <div className="mx-auto px-4 sm:px-12 max-w-7xl text-center">
          <h5 className="text-2xl font-bold text-azure-800 mb-6 uppercase">NOTRE ÉQUIPE</h5>
          <h1 className="text-5xl md:text-8xl font-black text-azure-950 mb-6">Pluridisciplinaire</h1>
          <p className="text-xl text-bluegrey mb-12 max-w-3xl mx-auto">
            Supdeco Junior Entreprise s'appuie sur une équipe pluridisciplinaire...
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <span className="px-6 py-3 bg-white shadow-lg rounded-full font-semibold">Excellence Académique</span>
            <span className="px-6 py-3 bg-white shadow-lg rounded-full font-semibold">Engagement Total</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-12 py-24 max-w-7xl">
        
        <BlurFade inView={isVisible}>
          <motion.div className="text-center mb-24 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 mb-6 relative z-10"
            >
              <RiTeamLine className="w-10 h-10 text-yellow-500" />
            </motion.div>

            <h5 className="text-2xl md:text-3xl font-bold uppercase text-azure-800 mb-6 relative z-10">
              NOTRE ÉQUIPE
            </h5>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-azure-950 mb-6 leading-none relative z-10 break-words hyphens-auto">
              Pluridisciplinaire
            </h1>

            <p className="text-xl md:text-2xl text-bluegrey max-w-3xl mx-auto leading-relaxed font-medium mb-12 relative z-10">
              Supdeco Junior Entreprise s&apos;appuie sur une équipe pluridisciplinaire composée 
              d&apos;étudiants sélectionnés pour leurs compétences et leur motivation.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-20 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <span className="px-6 py-3 bg-white rounded-full font-semibold text-bluegrey shadow-xl border border-white/50 cursor-default">
                <RiStarSmileLine className="inline-block w-5 h-5 mr-2 text-yellow-500" />
                Excellence Académique
              </span>
              <span className="px-6 py-3 bg-white rounded-full font-semibold text-bluegrey shadow-xl border border-white/50 cursor-default">
                <RiStarSmileLine className="inline-block w-5 h-5 mr-2 text-yellow-500" />
                Engagement Total
              </span>
            </motion.div>
          </motion.div>
        </BlurFade>

        <BlurFade inView={isVisible}>
          <div className="text-center px-5 pb-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-azure-600">
              Rencontrez nos talents
            </h3>
          </div>

          {/* Ajout de la classe relative pour positionner les flèches */}
          <div className="relative w-full px-4 md:px-10"> 
            <Slider {...settings}>
              {team.map((item, index) => (
                <div key={index} className="px-2">
                  <TeamItemCard item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Team;