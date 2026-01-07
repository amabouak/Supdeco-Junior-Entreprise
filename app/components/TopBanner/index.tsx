import BlurFade from "@/app/magicui/ui/blur-fade";

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-azure-950 via-azure-800 to-azure-600 py-12">
      <div className="mx-auto px-5 sm:px-24">
        <BlurFade inView={true}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Supdeco Junior Entreprise
              </h2>
              <p className="text-azure-100 text-lg">
                Votre partenaire stratégique pour des solutions innovantes
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
                <p className="text-azure-100 text-sm">Appelez-nous</p>
                <p className="text-white font-semibold">+212 7 08 30 12 69</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
                <p className="text-azure-100 text-sm">Email</p>
                <p className="text-white font-semibold">contact@sje.com</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default TopBanner;

