"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <--- Import important
import { navigationData } from "../../data/navigationData";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

const navigation = navigationData;

function Navbar() {
  const pathname = usePathname(); // Détecte la page actuelle
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CONDITION LOGIQUE : 
  // On veut le fond blanc + texte noir si :
  // 1. L'utilisateur a scrollé
  // 2. OU si le menu mobile est ouvert
  // 3. OU si on n'est PAS sur la page d'accueil (car les autres pages ont un fond clair)
  const isSolidStyle = isScrolled || isOpen || pathname !== "/";

  return (
    <div
      className={
        `fixed inset-x-0 top-0 left-0 right-0 z-50 w-full transition-all duration-300` +
        ` ${
          isSolidStyle
            ? "bg-white border-b border-black/10 text-black shadow-sm"
            : "bg-transparent border-b border-white/20 text-white"
        }`
      }
    >
      <div className="flex items-center justify-between px-5">
        <div
          className={
            `flex items-center border-0 md:border-r pr-5 py-4 transition-colors` +
            ` ${isSolidStyle ? "border-black/10" : "border-white/20"}`
          }
        >
          <Link className="flex items-center" href="/">
            <Image
              src="/assets/logo/SJE.png"
              width={65}
              height={65}
              alt="logo"
              className="h-auto w-auto object-contain"
              priority
              
            />
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // Suppression du text-gray-900 forcé pour laisser le parent décider
              className="inline-block rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 hover:opacity-70"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className={`hidden lg:block border-l pl-5 py-5 ${isSolidStyle ? "border-black/10" : "border-white/20"}`}>
          <div className="flex gap-2">
            {[ 
              { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/junior-entreprise-jpce/" },
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/supdeco_junior_entreprise/" }
            ].map((soc, i) => (
              <Link
                key={i}
                href={soc.href}
                target="_blank"
                className={
                  `flex items-center justify-center w-8 h-8 rounded-full transition-all` +
                  ` ${isSolidStyle ? "bg-azure-950 text-white" : "bg-white/20 text-white hover:bg-white/40"}`
                }
              >
                {soc.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className={`block lg:hidden border-l pl-5 py-6 ${isSolidStyle ? "border-black/10" : "border-white/20"}`}>
          <Bars3Icon
            className="block h-6 w-6 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata />
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;