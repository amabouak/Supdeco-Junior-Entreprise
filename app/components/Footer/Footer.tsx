import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/app/data/footerData";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterSocialMedia from "./FooterSocialMedia";

const data = footerData;
const year = new Date().getFullYear();

const footer = () => {
  return (
    <div className="bg-black opacity-90 mt-40">
      <div className="w-full pt-8">
        <div className="my-20 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-12 gap-y-10 gap-x-0 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start">
            <Image
              src="/assets/carousel/junior_entreprise.png"
              width={160}
              height={60}
              alt="logo"
              priority
              className="pb-8 w-auto h-auto"
            />
            <div className="mb-5 lg:mb-0">
              <FooterSocialMedia />
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {data.map((item) => (
            <div
              key={item.id}
              className="group relative col-span-12 lg:col-span-2 flex flex-col items-center lg:items-start"
            >
              <ul>
                {item.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5 text-center lg:text-start">
                    <Link
                      href="/"
                      className="text-white text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-azure-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                7, Avenue Macky Sall (ex Faidherbe), Dakar Plateau
              </h5>
            </div>
            <div className="flex gap-2 mt-5">
              <FaPhone className="text-azure-500 text-2xl" />
              <Link
                href="tel:+221774130411"
                title="Présidente du Club"
                className="text-base font-normal text-white"
              >
                +221 77 413 04 11 (Présidente)
              </Link>
            </div>
            <div className="flex gap-2 mt-5">
              <FaPhone className="text-azure-500 text-2xl" />
              <Link
                href="tel:+221776861535"
                title="Responsable Commercial"
                className="text-base font-normal text-white"
              >
                +221 77 686 15 35 (Resp. Commercial)
              </Link>
            </div>
            <div className="flex gap-2 mt-5">
              <FaEnvelope className="text-azure-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                juniorentreprise@supdeco.edu.sn
              </h5>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="py-8 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex items-center justify-between border-t border-white/20">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            &copy; {year} Supdeco Junior Entreprise.
          </h4>
          <h4 className="text-offwhite text-sm text-center mt-5 lg:mt-0 lg:text-start font-normal">
            Fait avec ❤️ par{" "}
            <Link href="/" target="_blank">
              la Supdeco Junior Entreprise
            </Link>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Politique de confidentialité
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Conditions générales
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
