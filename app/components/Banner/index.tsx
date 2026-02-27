import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import GradualSpacing from "@/app/magicui/ui/gradual-spacing";

const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #020617 0%, #082f49 50%, #075985 100%)",
      }}
      className="w-full relative overflow-hidden"
    >
      {/* Conteneur principal avec min-h-dvh pour éviter les sauts sur mobile */}
      <div className="mx-auto relative min-h-[100dvh] flex flex-col justify-center items-center px-4 py-10 sm:py-20">
        
        {/* TITRE : Utilisation de text-xl/text-2xl sur mobile pour éviter la coupure */}
        <div className="text-center z-[1] w-full max-w-5xl mx-auto mb-8 flex flex-col gap-2">
          <GradualSpacing
            className="text-xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl text-white font-bold tracking-tight leading-tight whitespace-normal block"
            text="Nous apportons de l'innovation et de"
          />
          <GradualSpacing
            className="text-xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl text-white font-bold tracking-tight leading-tight whitespace-normal block"
            text="la fraîcheur à vos projets !"
          />
        </div>

        {/* DESCRIPTION : texte adaptatif */}
        <div className="text-center z-[1] max-w-2xl mx-auto mb-12 px-2">
          <BlurFade delay={0.2}>
            <p className="text-sm sm:text-lg leading-relaxed text-white/90 drop-shadow-lg font-medium">
              Supdeco Junior Entreprise accompagne entreprises, entrepreneurs et
              organisations à travers l'expertise et l'engagement des étudiants
              du Groupe Supdeco Dakar dans l'esprit de fournir des solutions adaptées.
            </p>
          </BlurFade>
        </div>

        {/* BOUTONS : flex-col sur mobile, flex-row sur PC */}
        <div className="text-center z-[1] w-full max-w-xs sm:max-w-none">
          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="#about"
                className="relative inline-flex items-center justify-center text-[15px] text-azure-600 font-bold bg-white py-4 w-full sm:w-[200px] leafbutton shadow-xl"
              >
                <span>Qui sommes-nous ?</span>
              </Link>

              <Link
                href="/Contact"
                className="relative inline-flex items-center justify-center text-[15px] text-azure-600 font-bold bg-white py-4 w-full sm:w-[200px] leafbutton-reverse shadow-xl"
              >
                <span>Nous contacter</span>
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* IMAGE DE FOND : full responsive */}
        <div
          className="banner-image absolute inset-0 z-[0] pointer-events-none opacity-40"
          style={{
            backgroundImage: 'url("/assets/images/cubes.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;