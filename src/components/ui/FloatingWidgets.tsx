"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingWidgets() {
  const whatsappUrl =
    "https://wa.me/919150112757?text=Hello%20Aayur%20Kendra%20Hospital,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.";
  const phoneUrl = "tel:+919150112757";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
        <span className="absolute right-14 bg-white text-brown-dark text-xs font-medium px-3 py-1.5 rounded-lg shadow-md border border-brown-dark/8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.a>

      <motion.a
        href={phoneUrl}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-ayur-green hover:bg-dark-green text-white p-3.5 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Call Hospital"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-14 bg-white text-brown-dark text-xs font-medium px-3 py-1.5 rounded-lg shadow-md border border-brown-dark/8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
