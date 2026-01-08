import BlurFade from "@/app/magicui/ui/blur-fade";
import { FaCheck } from "react-icons/fa";
import { whyData } from "../../data/whyData";
import Image from "next/image";

const why = whyData;

const Why = () => {
  return (
    <div id="why">
      <div className="mx-auto px-5 sm:px-24 py-20">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="section-title relative text-center pb-5 mb-10">
            <h5 className="text-xl md:text-2xl font-medium text-azure-800 uppercase mb-2">
              Pourquoi Nous Choisir ?
            </h5>
            <h1 className="text-2xl md:text-4xl mb-0">
              Nos Engagements
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 gap-lg-8">
            {/* COLUMN-1 */}
            <div className="col-span-12 lg:col-span-5">
              <Image
                className="mx-auto w-full px-5"
                src="/assets/why/check.jpg"
                alt="Quality"
                width={500}
                height={500}
              />
            </div>

            {/* COLUMN-2 */}
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <div className="px-4 lg:px-0">
                {why.map((items, i) => (
                  <div className="flex mt-4" key={i}>
                    <FaCheck className="text-4xl text-azure-600" />
                    <div className="ml-5">
                      <h4 className="text-2xl font-semibold">
                        {items.heading}
                      </h4>
                      <h5 className="text-lg text-black text-opacity-90 font-normal mt-2">
                        {items.subheading}
                      </h5>
                    </div>
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

export default Why;

