import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import GradualSpacing from "@/app/magicui/ui/gradual-spacing";
import Companies from "../Companies";

const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #020617 0%, #082f49 50%, #075985 100%)",
      }}
    >
      <div className="mx-auto relative min-h-[100vh] flex flex-col justify-center items-center">
        <div className="text-center z-[1] my-10 px-6 max-w-5xl mx-auto">
          <GradualSpacing
            className="text-2xl sm:text-5xl lg:text-7xl drop-shadow-lg text-white font-semibold md:4px lh-96"
            text="Nous apportons de l'innovation et de "
          />
          <GradualSpacing
            className="text-2xl sm:text-5xl lg:text-7xl drop-shadow-lg text-white font-semibold md:4px lh-96"
            text="la fraîcheur à vos projets !"
          />
        </div>
        <div className="text-center z-[1] mt-10">
          <BlurFade>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-opacity-90">
              Supdeco Junior Entreprise accompagne entreprises, entrepreneurs et
              organisations à travers l'expertise et l'engagement des étudiants
              du Groupe Supdeco Dakar
            </p>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-opacity-90">
              dans l'esprit de fournir des solutions adaptées.
            </p>
          </BlurFade>
        </div>
        <div className="text-center z-[1] mt-10">
          <BlurFade>
            <Link
              href="#about"
              className="relative inline-flex items-center justify-center text-center text-[15px] text-azure-600 font-bold bg-white mx-2 mt-2 py-5 w-[180px] leafbutton"
            >
              <span className="block w-full text-center">
                Qui sommes-nous ?
              </span>
            </Link>

            <Link
              href="/Contact"
              className="relative inline-flex items-center justify-center text-center text-[15px] text-azure-600 font-bold bg-white mx-2 mt-2 py-5 w-[180px] leafbutton-reverse"
            >
              <span className="block w-full text-center">Nous contacter</span>
            </Link>
          </BlurFade>
        </div>
        <div className="banner-image z-[0]"></div>
        {/*<div className="companies-slider z-[1]">
          <Companies />
        </div>*/}
      </div>
    </div>
  );
};

export default Banner;
