import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterSocialMedia = () => {
  // Classe commune pour éviter la répétition
  const iconStyle = "flex items-center justify-center text-xl p-3.5 bg-[#38b6ff] hover:bg-[#2e99d6] text-white rounded-full transition-colors";

  return (
    <div className="flex gap-3">
      <Link
        href="https://www.linkedin.com/company/junior-entreprise-jpce/"
        target="_blank"
        className={iconStyle}
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="#"
        target="_blank"
        className={iconStyle}
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.instagram.com/supdeco_junior_entreprise?igsh=bTQzMGZqcW9paGN1"
        target="_blank"
        className={iconStyle}
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;