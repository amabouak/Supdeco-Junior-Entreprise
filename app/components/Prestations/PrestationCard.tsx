"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Prestation } from "@/app/data/prestationsData";

interface PrestationCardProps {
  prestation: Prestation;
  index: number;
}

const PrestationCard = ({ prestation, index }: PrestationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl hover:border-emerald-200/50 overflow-hidden relative"
    >
      
      <div className="relative mb-8 h-48 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-700">
        <Image
          src={prestation.image}
          alt={`${prestation.category} - Supdeco Junior Entreprise`}
          fill
          className="object-cover group-hover:brightness-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-emerald-700 shadow-lg">
            Expert
          </span>
        </div>
      </div>

     
      <motion.h3 
        className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-900 to-azure-800 bg-clip-text text-transparent mb-4"
        whileHover={{ scale: 1.02 }}
      >
        {prestation.category}
      </motion.h3>

      
      <p className="text-bluegrey mb-8 leading-relaxed text-lg font-medium opacity-90">
        {prestation.description}
      </p>

     
      <div className="space-y-3">
        {prestation.services.map((service, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl group/service hover:bg-emerald-50 hover:shadow-md transition-all border border-emerald-100/50"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            whileHover={{ x: 8 }}
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0 shadow-sm" />
            <span className="font-semibold text-bluegrey group-hover/service:text-emerald-800 transition-colors">
              {service}
            </span>
          </motion.div>
        ))}
      </div>

     
      <motion.div 
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50">
          <span className="text-white font-bold text-lg">5⭐</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrestationCard;
