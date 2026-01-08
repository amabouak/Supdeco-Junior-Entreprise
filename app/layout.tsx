import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Supdeco Junior Entreprise",
  description: "Votre partenaire stratégique pour des solutions innovantes en stratégie, marketing et communication au Sénégal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/logo/logo_junior.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo/logo_junior.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo/logo_junior.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta
          property="og:image"
          content="/assets/logo/logo_junior.png"
        />
        <meta property="og:title" content="Supdeco Junior Entreprise" />
        <meta
          property="og:description"
          content="Votre partenaire stratégique pour des solutions innovantes en stratégie, marketing et communication au Sénégal."
        />
        <meta property="og:site_name" content="Supdeco Junior Entreprise" />
        <meta property="og:url" content="https://supdecoje.sn" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="keywords" content="Supdeco, Junior, Entreprise, stratégie, marketing, communication, Sénégal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Supdeco Junior Entreprise" />
        <meta
          name="twitter:description"
          content="Votre partenaire stratégique pour des solutions innovantes en stratégie, marketing et communication au Sénégal."
        />
        <meta
          name="twitter:image"
          content="/assets/logo/logo_junior.png"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
