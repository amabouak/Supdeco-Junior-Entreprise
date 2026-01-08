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
    paragraph: "École Supérieure d'Informatique et de Télécommunication, excellence technologique au Sénégal.",
  },
  {
    imgSrc: "/assets/carousel/logo_junior-remove.png",
    company: "Supdeco Junior Entreprise",
    paragraph: "Votre partenaire stratégique pour des solutions innovantes en stratégie, marketing et communication.",
  },
  {
    imgSrc: "/assets/carousel/supdeco-remove.png",
    company: "Supdeco Dakar",
    paragraph: "École Supérieure de Commerce et d'Administration des Entreprises, formation d'excellence.",
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
        <motion.h3 
          className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81"
          initial={{ opacity: 0, y: -30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Nos partenaires au Sénégal
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={"/assets/network/map.png"}
            alt={"map-image"}
            width={1400}
            height={800}
            className="rounded-lg shadow-xl"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {Aboutdata.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={item.imgSrc}
                  alt={item.company}
                  width={55}
                  height={55}
                  className="mb-2 object-contain"
                />
                <h4 className="text-xl font-medium text-midnightblue">
                  {item.company}
                </h4>
              </div>
              <hr />
              <h4 className="text-lg font-normal text-bluegrey my-2">
                {item.paragraph}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;

