import BlurFade from "@/app/magicui/ui/blur-fade";
import { FaArrowRight, FaCheck, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="mx-auto px-5 sm:px-24 py-20">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column */}
            <div className="col-span-6 lg:col-span-7">
              <div className="section-title relative pb-5 mb-10">
                <h5 className="text-xl md:text-2xl text-center md:text-start font-medium text-azure-800 uppercase mb-2">
                  À propos
                </h5>
                <h1 className="text-2xl md:text-4xl text-center md:text-start mb-0">
                  Les Meilleures Solutions IT
                </h1>
              </div>
              <p className="font-normal text-lg text-black text-opacity-90 mb-5">
                Supdeco Junior Entreprise est une organisation technologique qui
                se félicite d'un engagement envers l'excellence et l'innovation. Nous
                croyons en l'utilisation des dernières technologies pour fournir à nos clients
                des services et solutions de qualité supérieure. Notre équipe d'étudiants est
                dédiée à rester à jour avec les dernières tendances de l'industrie et
                s'efforce constamment d'améliorer nos compétences et
                nos connaissances. Chez Supdeco Junior Entreprise, nous valorisons l'intégrité,
                l'honnêteté et la transparence, et nous croyons en la construction
                de relations durables avec nos clients basées sur la confiance et
                le respect mutuel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 mb-3">
                <div className="col-span-6">
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-azure-600 me-4" />
                    Meilleur du Secteur
                  </h5>
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-azure-600 me-4" />
                    Équipe Passionnée
                  </h5>
                </div>
                <div className="col-span-6">
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-azure-600 me-4" />
                    Support 24/7
                  </h5>
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-azure-600 me-4" />
                    Tarifs Abordables
                  </h5>
                </div>
              </div>
              <div className="flex items-center mb-5">
                <div className="w-[60px] h-[60px] bg-gradient-to-r from-azure-950 to-azure-500 flex items-center justify-center rounded-lg">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <div className="ps-4">
                  <h5 className="text-lg">Appelez pour poser des questions</h5>
                  <Link
                    href="tel:+212708301269"
                    title="Président"
                    className="text-azure-600 text-lg mb-0"
                  >
                    +212 7 08 30 12 69
                  </Link>
                  <span className="mx-2">ou</span>
                  <Link
                    href="tel:+212674984499"
                    title="Vice Président"
                    className="text-azure-600 text-lg mb-0"
                  >
                    +212 6 74 98 44 99
                  </Link>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div className="col-span-6 lg:col-span-5 max-h-[500px] px-5">
              <Image
                src="/assets/about/business.jpg"
                alt="supdeco"
                width={500}
                height={500}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default About;

