import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import GradualSpacing from "@/app/magicui/ui/gradual-spacing";
import Companies from "../Companies";

const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( to bottom, #082f49 0%, #0c4a6e 10%, #0369a1 50%, #0284c7 75%, #0ea5e9 100% )",
      }}
    >
      <div className="mx-auto relative min-h-[100vh] flex flex-col justify-center items-center">
        <div className="text-center z-[1]">
          <GradualSpacing
            className="text-2xl sm:text-5xl lg:text-7xl drop-shadow-lg text-white font-semibold md:4px lh-96"
            text="Donner de l'essor à l'innovation,"
          />
          <GradualSpacing
            className="text-2xl sm:text-5xl lg:text-7xl drop-shadow-lg text-white font-semibold md:4px lh-96"
            text="Façonner demain"
          />
        </div>
        <div className="text-center z-[1] mt-10">
          <BlurFade>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-opacity-90">
              Chez Supdeco Junior Entreprise, nous harnaisons le talent et la
              créativité des leaders de demain
            </p>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-opacity-90">
              pour fournir des solutions de pointe.
            </p>
          </BlurFade>
        </div>
        <div className="text-center z-[1] mt-10">
          <BlurFade>
            <Link
              href="#about"
              type="button"
              className="text-15px text-azure-600 font-bold bg-white mx-2 mt-2 py-5 w-[180px] leafbutton"
            >
              Qui sommes-nous ?
            </Link>
            <Link
              href="/Contact"
              type="button"
              className="text-15px text-azure-600 font-bold bg-white mx-2 mt-2 py-5 w-[180px] leafbutton-reverse"
            >
              Nous contacter
            </Link>
          </BlurFade>
        </div>
        <div className="banner-image z-[0]"></div>
        <div className="companies-slider z-[1]">
          <Companies />
        </div>
      </div>
    </div>
  );
};

export default Banner;
