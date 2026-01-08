"use client";
import BlurFade from "@/app/magicui/ui/blur-fade";
import { FormEvent, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FiSend, FiPhone, FiMail, FiMapPin, FiDollarSign } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";

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
    
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSending(false);
        setSuccess(true);
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen py-20" ref={sectionRef}>
      <div className="mx-auto px-5 sm:px-24 max-w-7xl">
        
       
        <BlurFade inView={true}>
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h5 
              className="text-xl md:text-2xl font-medium text-azure-800 uppercase mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Nous Contacter
            </motion.h5>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-azure-950 to-azure-500 bg-clip-text text-transparent mb-6"
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
              Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h
            </motion.p>
          </motion.div>
        </BlurFade>

       
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-midnightblue mb-8">Nos coordonnées</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-azure-500 to-azure-600 rounded-2xl flex items-center justify-center">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-bluegrey">Email</p>
                  <a href="mailto:juniorentreprise@supdeco.edu.sn" className="text-azure-800 font-medium hover:underline">
                    juniorentreprise@supdeco.edu.sn
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-bluegrey">Téléphone</p>
                  <p className="text-gray-600">+221 77 413 04 11 - Diawo Sarr (Présidente)</p>
                  <p className="text-gray-600">+221 77 686 15 35 - N'gamet Camara (Resp. Commercial)</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <FiMapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-bluegrey">Adresse</p>
                  <p className="text-gray-600">7, Avenue Macky Sall (ex Faidherbe)<br/>Dakar Plateau</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

         
          <motion.div 
            variants={itemVariants}
            className="flex flex-col lg:justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-azure-950 to-azure-500 text-white py-6 px-8 rounded-2xl font-semibold text-xl shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300"
            >
              Obtenir un devis
            </motion.button>
          </motion.div>
        </motion.div>

       
        <BlurFade inView={true}>
          <div className="mx-auto max-w-2xl lg:max-w-7xl bg-gradient-to-r from-azure-950 to-azure-500 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8 p-2 lg:p-0">
              
              
              <div className="hidden lg:flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-4 lg:mx-0 overflow-hidden shadow-2xl">
                <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61754.68681271504!2d-17.5113527513672!3d14.674777300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172527a8fdf53%3A0x5058fb23050170f5!2sGroupe%20Ecole%20Superieure%20de%20Commerce%20de%20Dakar!5e0!3m2!1sfr!2ssn!4v1767449206885!5m2!1sfr!2ssn"
                    className="w-full h-full"
                  />
                </div>
              </div>

             
              <div className="p-10 flex flex-col justify-center lg:min-h-[500px]">
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Prêt à démarrer votre projet ?
                </motion.h3>
                
                <motion.p 
                  className="text-lg font-normal mb-10 text-white/90"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Remplissez le formulaire pour un premier échange gratuit
                </motion.p>

                <form className="flex flex-col gap-5" onSubmit={handleFormSubmit} data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <MdOutlineBusinessCenter className="text-white/80 w-5 h-5 flex-shrink-0" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Entreprise *"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 font-medium"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <AiOutlineUser className="text-white/80 w-5 h-5 flex-shrink-0" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom *"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 font-medium"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <FiPhone className="text-white/80 w-5 h-5 flex-shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone *"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 font-medium"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <AiOutlineMail className="text-white/80 w-5 h-5 flex-shrink-0" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 font-medium"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <FiMail className="text-white/80 w-5 h-5 flex-shrink-0" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Sujet *"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 font-medium"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <FiDollarSign className="text-white/80 w-5 h-5 flex-shrink-0" />
                    <input
                      type="text"
                      name="budget"
                      placeholder="Budget prévisionnel"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <label className="text-white/80 text-sm">Comment avez-vous entendu parler de nous ?</label>
                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="source" value="google" className="accent-azure-500" />
                        <span className="text-white text-sm">Google</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="source" value="reseaux-sociaux" className="accent-azure-500" />
                        <span className="text-white text-sm">Réseaux sociaux</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="source" value="bouche-a-oreille" className="accent-azure-500" />
                        <span className="text-white text-sm">Bouche à oreille</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="source" value="autre" className="accent-azure-500" />
                        <span className="text-white text-sm">Autre</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20 hover:border-white/40 transition-all">
                    <AiOutlineMessage className="text-white/80 w-5 h-5 flex-shrink-0 mt-1" />
                    <textarea
                      name="message"
                      placeholder="Décrivez votre projet... *"
                      className="w-full bg-transparent outline-none text-white placeholder-white/70 resize-none"
                      rows={4}
                      required
                    />
                  </div>

                 
                  {sending ? (
                    <motion.button
                      type="button"
                      className="bg-white/20 border border-white/30 text-white font-semibold py-4 px-6 rounded-2xl backdrop-blur-sm cursor-not-allowed flex items-center justify-center gap-2"
                      disabled
                      whileHover={{ scale: 1 }}
                    >
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      className="bg-white text-azure-950 font-bold py-4 px-6 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
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
                      className="text-white text-center bg-green-500/20 border-2 border-green-500/50 backdrop-blur-sm p-4 rounded-2xl font-medium"
                    >
                      ✅ Message envoyé avec succès ! Nous vous répondons sous 24h.
                    </motion.div>
                  )}
                  
                  {error && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-center bg-red-500/20 border-2 border-red-500/50 backdrop-blur-sm p-4 rounded-2xl font-medium"
                    >
                      ❌ Erreur d&apos;envoi. Merci de réessayer.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
};

export default Contact;
