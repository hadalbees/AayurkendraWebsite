"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import Image from "next/image";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/therapies" },
  { name: "Doctors", href: "/doctors" },
  { name: "Packages", href: "/#packages" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled
    ? "bg-white/95 shadow-sm border-brown-dark/5"
    : "bg-cream-light/80 border-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link href="/" className="flex flex-col">
            {/* <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-brown-dark">
              Aayur <span className="text-ayur-green">Kendra</span>
            </span> */}
            <Image
              src="/images/logohms.png"
              alt="Logo"
              width={215}
              height={60}
            />
            {/* <span className="text-[9px] uppercase tracking-[0.2em] text-brown-muted font-medium -mt-0.5">
              Ayurveda Speciality Hospital
            </span> */}
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-ayur-green font-semibold"
                      : "text-brown-muted hover:text-brown-dark"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919150112757"
              className="flex items-center gap-1.5 text-sm text-brown-muted hover:text-ayur-green transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+91 91501 12757</span>
            </a>
            <Link href="/appointment" className="btn-primary text-sm py-2.5 px-5">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-cream-bg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-brown-dark" /> : <Menu className="h-6 w-6 text-brown-dark" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brown-dark/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-brown-dark hover:bg-cream-bg hover:text-ayur-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Link href="/appointment" onClick={() => setIsOpen(false)} className="btn-primary w-full text-sm">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
