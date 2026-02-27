"use client";
import BlurFade from "@/app/magicui/ui/blur-fade";
import { FormEvent, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";

// Using Formspree to send emails directly to juniorentreprise@supdeco.edu.sn
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjboowg";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setSuccess(false);
    setError(false);
    setSending(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    // Send to Formspree which will forward to juniorentreprise@supdeco.edu.sn
    await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(JSONFormData(formData)),
    })
      .then((response) => {
        if (response.ok) {
          setSending(false);
          setSuccess(true);
          (event.target as HTMLFormElement).reset();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  // Helper function to convert FormData to plain object
  const JSONFormData = (formData: FormData): Record<string, string> => {
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    return data;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full min-h-screen pt-28 md:pt-36" ref={sectionRef}> {/* Augmentation du padding top */}
  <div className="mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl py-12">
    <BlurFade inView={true}>
      <motion.div
        className="text-center mb-16 mt-4" // Ajout d'une marge haute ici aussi
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h5
          className="text-lg md:text-2xl font-bold text-azure-800 uppercase mb-4 tracking-widest"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Nous Contacter
        </motion.h5>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-azure-950 to-azure-500 bg-clip-text text-transparent mb-6 pb-4 leading-tight"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Parlons de votre projet
            </motion.h1>
            <motion.p
              className="text-xl text-bluegrey max-w-2xl mx-auto"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h !
            </motion.p>
          </motion.div>
        </BlurFade>

        {/* Main Content Grid */}
        <motion.div
          className="grid lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-midnightblue mb-6">
                Nos coordonnées
              </h3>

              <div className="space-y-5">
                <motion.div
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-azure-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-bluegrey text-sm">Email</p>
                    <a
                      href="mailto:juniorentreprise@supdeco.edu.sn"
                      className="text-azure-800 font-medium hover:underline text-sm"
                    >
                      juniorentreprise@supdeco.edu.sn
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-bluegrey text-sm">Téléphone</p>
                    <p className="text-gray-600 text-sm">+221 77 413 04 11</p>
                    <p className="text-gray-500 text-xs">Diawo Sarr (Présidente)</p>
                    <p className="text-gray-600 text-sm mt-1">+221 77 686 15 35</p>
                    <p className="text-gray-500 text-xs">N'gamet Camara (Resp. Commercial)</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-bluegrey text-sm">Adresse</p>
                    <p className="text-gray-600 text-sm">
                      7, Avenue Macky Sall (ex Faidherbe)
                    </p>
                    <p className="text-gray-500 text-sm">Dakar Plateau</p>
                  </div>
                </motion.div>
              </div>

              {/* Obtenir un devis button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-azure-900 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg mt-8 hover:bg-azure-950 transition-all duration-300"
              >
                Obtenir un devis
              </motion.button>
            </div>

            {/* Map - Small version for mobile/tablet */}
            <div className="lg:hidden rounded-3xl overflow-hidden shadow-xl h-64">
              <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61754.68681271504!2d-17.5113527513672!3d14.674777300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172527a8fdf53%3A0x5058fb23050170f5!2sGroupe%20Ecole%20Superieure%20de%20Commerce%20de%20Dakar!5e0!3m2!1sfr!2ssn!4v1767449206885!5m2!1sfr!2ssn"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="bg-[#0a192f] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-5 h-full">
                {/* Form Section */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Prêt à démarrer votre projet ?
                  </motion.h3>

                  <motion.p
                    className="text-lg font-normal mb-8 text-white/70"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Remplissez le formulaire pour un premier échange gratuit
                  </motion.p>

                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleFormSubmit}
                    data-netlify="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                        <MdOutlineBusinessCenter className="text-white/60 w-5 h-5 flex-shrink-0" />
                        <input
                          type="text"
                          name="company"
                          placeholder="Entreprise *"
                          className="w-full bg-transparent outline-none text-white placeholder-white/40 font-medium text-sm"
                          required
                        />
                      </div>

                      <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                        <AiOutlineUser className="text-white/60 w-5 h-5 flex-shrink-0" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Nom *"
                          className="w-full bg-transparent outline-none text-white placeholder-white/40 font-medium text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                        <FiPhone className="text-white/60 w-5 h-5 flex-shrink-0" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Téléphone *"
                          className="w-full bg-transparent outline-none text-white placeholder-white/40 font-medium text-sm"
                          required
                        />
                      </div>

                      <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                        <AiOutlineMail className="text-white/60 w-5 h-5 flex-shrink-0" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email *"
                          className="w-full bg-transparent outline-none text-white placeholder-white/40 font-medium text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                        <FiMail className="text-white/60 w-5 h-5 flex-shrink-0" />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Sujet *"
                          className="w-full bg-transparent outline-none text-white placeholder-white/40 font-medium text-sm"
                          required
                        />
                      </div>

                      <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                        <span className="text-white/60 w-5 h-5 flex-shrink-0 flex items-center justify-center text-sm font-bold">
                          ₣
                        </span>
                        <input
                          type="text"
                          name="budget"
                          placeholder="Budget (FCFA)"
                          className="w-full bg-transparent outline-none text-white placeholder-white/40 font-medium text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
                      <label className="text-white/60 text-xs">
                        Comment avez-vous entendu parler de nous ?
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="source"
                            value="google"
                            className="accent-azure-500 w-4 h-4"
                          />
                          <span className="text-white/80 text-xs">Google</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="source"
                            value="reseaux-sociaux"
                            className="accent-azure-500 w-4 h-4"
                          />
                          <span className="text-white/80 text-xs">Réseaux sociaux</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="source"
                            value="bouche-a-oreille"
                            className="accent-azure-500 w-4 h-4"
                          />
                          <span className="text-white/80 text-xs">Bouche à oreille</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 focus-within:border-azure-500 transition-all">
                      <AiOutlineMessage className="text-white/60 w-5 h-5 flex-shrink-0 mt-1" />
                      <textarea
                        name="message"
                        placeholder="Décrivez votre projet... *"
                        className="w-full bg-transparent outline-none text-white placeholder-white/40 resize-none text-sm"
                        rows={3}
                        required
                      />
                    </div>

                    {sending ? (
                      <motion.button
                        type="button"
                        className="w-full bg-white/10 border border-white/20 text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2"
                        disabled
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        className="w-full bg-white text-[#0a192f] font-bold py-3 px-6 rounded-2xl hover:bg-azure-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Envoyer <FiSend />
                      </motion.button>
                    )}

                    {success && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-white text-center bg-green-500/20 border border-green-500/50 p-3 rounded-2xl font-medium text-sm"
                      >
                        Message envoyé ! Nous vous répondons sous 24h.
                      </motion.div>
                    )}

                    {error && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-white text-center bg-red-500/20 border border-red-500/50 p-3 rounded-2xl font-medium text-sm"
                      >
                        Erreur lors de l'envoi. Veuillez réessayer.
                      </motion.div>
                    )}
                  </form>
                </div>

                {/* Map Section - Desktop only */}
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center bg-white/5">
                  <div className="w-full h-full min-h-[500px]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61754.68681271504!2d-17.5113527513672!3d14.674777300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172527a8fdf53%3A0x5058fb23050170f5!2sGroupe%20Ecole%20Superieure%20de%20Commerce%20de%20Dakar!5e0!3m2!1sfr!2ssn!4v1767449206885!5m2!1sfr!2ssn"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;

