import React from "react";
import Image from "next/image";
import { TeamItem } from "@/app/types/team";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamItemCardProps {
  item: TeamItem;
}

const TeamItemCard = ({ item }: TeamItemCardProps) => {
  const linkedinHref = item.linkedin?.startsWith("http")
    ? item.linkedin
    : `https://www.linkedin.com/in/${item.linkedin}`;

  return (
    <div className="team-item h-[400px] w-full max-w-[280px] rounded-lg border border-gray-200 shadow-md p-5 mx-auto mb-7 flex flex-col items-center justify-between gap-1 bg-white">
      {/* Conteneur Image Fixe */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-5 overflow-hidden rounded-full shadow-inner">
        <Image
          src={`/assets/team/${item.img}`}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 128px, 160px"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="team-content flex flex-col items-center justify-center w-full">
        <h3 className="text-md md:text-lg font-bold text-center text-azure-600 mb-1 line-clamp-2">
          {item.name}
        </h3>
        <p className="text-sm text-center text-gray-500 mb-4 h-10 flex items-center">
          {item.position}
        </p>
        
        <div className="team-social mt-auto">
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-azure-600 hover:text-azure-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamItemCard;
