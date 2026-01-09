import BlurFade from "@/app/magicui/ui/blur-fade";
import { FaCheck } from "react-icons/fa";
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
                  Supdeco Junior Entreprise
                </h1>
              </div>
              <p className="font-normal text-lg text-black text-opacity-90 mb-5">
                Supdeco Junior Entreprise est une structure à vocation
                professionnelle portée et pilotée par les étudiants du Groupe
                Supdeco Dakar. Depuis sa création, elle accompagne entreprises,
                entrepreneurs et organisations dans des domaines tels que la
                stratégie, le marketing, la communication et l'informatique.
              </p>

              {/* NOS VALEURS */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-azure-800 mb-4">
                  Nos Valeurs
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <h5 className="mb-3 flex items-center text-lg">
                    <FaCheck className="text-azure-600 me-4" />
                    Professionnalisme : Une exigence constante dans la qualité
                    des livrables et le respect des engagements.
                  </h5>
                  <h5 className="mb-3 flex items-center text-lg">
                    <FaCheck className="text-azure-600 me-4" />
                    Engagement : Une implication totale de nos équipes sur
                    chaque projet confié.
                  </h5>
                  <h5 className="mb-3 flex items-center text-lg">
                    <FaCheck className="text-azure-600 me-4" />
                    Intégrité : Transparence, confidentialité et honnêteté dans
                    toutes nos collaborations.
                  </h5>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div className="col-span-6 lg:col-span-5 max-h-[500px] px-5">
              <Image
                src="/assets/about/ancien.jpeg"
                alt="supdeco"
                width={500}
                height={500}
                priority
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default About;
