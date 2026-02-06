"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface datatype {
  imgSrc: string;
  company: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/carousel/esitec-remove.png",
    company: "ESITEC",
    paragraph:
      "École Supérieure d'Informatique et de Télécommunication, excellence technologique au Sénégal.",
  },
  {
    imgSrc: "/assets/carousel/junior_entreprise.png",
    company: "Supdeco Junior Entreprise",
    paragraph:
      "Votre partenaire stratégique pour des solutions innovantes en stratégie, marketing et communication.",
  },
  {
    imgSrc: "/assets/carousel/supdeco-remove.png",
    company: "Supdeco Dakar",
    paragraph:
      "École Supérieure de Commerce et d'Administration des Entreprises, formation d'excellence.",
  },
];

const Network = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-babyblue" id="project">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        {/* On a retiré le titre H3 et l'image de la map ici */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8">
          {Aboutdata.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              // J'ai aussi enlevé le whileHover ici pour rester cohérent avec ta demande précédente
            >
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={item.imgSrc}
                  alt={item.company}
                  width={55}
                  height={55}
                  className="mb-2 w-auto h-12 object-contain"
                />
                <h4 className="text-xl font-bold text-midnightblue">
                  {item.company}
                </h4>
              </div>
              <hr className="my-3" />
              <p className="text-lg font-normal text-bluegrey">
                {item.paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;