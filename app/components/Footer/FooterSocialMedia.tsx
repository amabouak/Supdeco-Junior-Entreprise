import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterSocialMedia = () => {
  return (
    <div className="flex gap-3">
      <Link
        href="https://www.linkedin.com/company/junior-entreprise-jpce/"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-gradient-to-r from-azure-950 to-azure-500 text-white rounded-full"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-gradient-to-r from-azure-950 to-azure-500 text-white rounded-full"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.instagram.com/supdeco_junior_entreprise?igsh=bTQzMGZqcW9paGN1"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-gradient-to-r from-azure-950 to-azure-500 text-white rounded-full"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;

