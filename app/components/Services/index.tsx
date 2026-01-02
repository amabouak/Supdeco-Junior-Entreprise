import BlurFade from "@/app/magicui/ui/blur-fade";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { servicesData } from "../../data/servicesData";

const services = servicesData;

const Services = () => {
  return (
    <div id="services">
      <div className="mx-auto px-5 sm:px-24 py-20">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4">
            {/* COLUMN-1 */}
            <div className="col-span-6 flex flex-col justify-center">
              <div className="section-title relative pb-5 mb-10">
                <h5 className="text-xl md:text-2xl text-center md:text-start font-medium text-azure-800 uppercase mb-2">
                  Nos Services
                </h5>
                <h1 className="text-2xl md:text-4xl text-center md:text-start mb-0">
                  Solutions IT Personnalisées pour Votre Entreprise
                </h1>
              </div>
              <p className="font-normal text-lg text-black text-opacity-90 mb-5">
                Chez Supdeco Junior Entreprise, nous fournissons des solutions
                innovantes et personnalisées pour aider votre entreprise à croître.
                Du développement de logiciels à l'analyse de données, notre équipe
                qualifiée est dédiée à répondre à vos besoins uniques et à garantir
                des résultats de qualité supérieure.
              </p>
            </div>

            {/* COLUMN-2 */}
            <div className="col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-azure-950 to-azure-500 rounded-3xl">
                {services.map((item, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 shadow-xl">
                    <div className="mb-5">{item.icon}</div>
                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                    <h4 className="text-lg font-normal text-black text-opacity-90 my-2">
                      {item.paragraph}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Services;

