"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  MessageSquare,
  CheckCircle,
  ShieldAlert,
  Award,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  ExternalLink,
  User,
  MessageCircle
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import SocialLinks from "@/components/ui/SocialLinks";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Provide a valid phone number";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Provide a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Failed to submit contact enquiry:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Google Maps Search link for Hosur location
  const mapLink = siteConfig.social.googleMaps;
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Aayur Kendra, I would like to inquire about treatments.")}`;

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <nav className="flex items-center justify-center space-x-2 text-xs uppercase tracking-wider text-brown-muted mb-2">
              <Link href="/" className="hover:text-ayur-green transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brown-dark">Contact</span>
            </nav>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Reach Out
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Contact Hospital
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Have questions about treatments, recovery stays, or consulting Dr. Geetha Jayapal? Get in touch with our help desk.
            </p>
          </div>
        </section>

        {/* Contact Info & Forms */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Hospital Contact Details */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" className="space-y-4">
                  <h2 className="font-serif text-2.5xl font-bold text-brown-dark">
                    Hospital Information
                  </h2>
                  <p className="text-sm font-light text-brown-dark/75 leading-relaxed">
                    Our speciality care wing is located centrally in Hosur, Krishnagiri district, Tamil Nadu. Easy accessibility for patients from Bangalore, Salem, and Krishnagiri.
                  </p>
                </FadeIn>

                <StaggerContainer className="space-y-4">
                  {/* Address */}
                  <StaggerItem className="flex items-start space-x-3.5 bg-white border border-brown-dark/8 rounded-2xl p-5 shadow-sm">
                    <MapPin className="h-6 w-6 text-ayur-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brown-dark">Clinic Address</h4>
                      <p className="text-xs sm:text-sm font-light text-brown-dark/75 mt-1 leading-relaxed">
                        {siteConfig.address.line1},<br />
                        {siteConfig.address.line2},<br />
                        {siteConfig.address.city} – {siteConfig.address.postalCode},<br />
                        {siteConfig.address.district}, {siteConfig.address.state}
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Telephones */}
                  <StaggerItem className="flex items-start space-x-3.5 bg-white border border-brown-dark/8 rounded-2xl p-5 shadow-sm">
                    <Phone className="h-6 w-6 text-ayur-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brown-dark">Call Center</h4>
                      <p className="text-xs sm:text-sm font-light text-brown-muted mt-1 leading-relaxed">
                        General Inquiries: <a href={siteConfig.phoneHref} className="hover:text-ayur-green transition-colors font-semibold">{siteConfig.phone}</a>
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Emergency Contact */}
                  <StaggerItem className="flex items-start space-x-3.5 bg-red-50 border border-red-200 rounded-2xl p-5 shadow-sm ring-1 ring-red-100">
                    <ShieldAlert className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-red-800">Emergency Desk</h4>
                      <p className="text-xs sm:text-sm font-semibold text-red-700 mt-1 leading-relaxed">
                        Nursing Hotline: <a href="tel:+919150112757" className="hover:underline">{siteConfig.phone}</a>
                      </p>
                      <p className="text-[10px] text-red-500 font-light mt-0.5">
                        Available 24/7 for inpatient emergencies.
                      </p>
                    </div>
                  </StaggerItem>

                  {/* GST Number */}
                  <StaggerItem className="flex items-start space-x-3.5 bg-white border border-brown-dark/8 rounded-2xl p-5 shadow-sm">
                    <Award className="h-6 w-6 text-ayur-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brown-dark">Tax Registration</h4>
                      <p className="text-xs sm:text-sm font-light text-brown-muted mt-1">
                        GSTIN: <span className="font-semibold text-brown-dark">{siteConfig.gstin}</span>
                      </p>
                      <p className="text-[10px] text-brown-muted font-light mt-0.5">
                        Government Registered Speciality Hospital
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Email */}
                  <StaggerItem className="flex items-start space-x-3.5 bg-white border border-brown-dark/8 rounded-2xl p-5 shadow-sm">
                    <Mail className="h-6 w-6 text-ayur-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brown-dark">Email</h4>
                      <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm font-light text-brown-dark/75 mt-1 hover:text-brown-accent transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </StaggerItem>

                  {/* Working Hours */}
                  <StaggerItem className="flex items-start space-x-3.5 bg-white border border-brown-dark/8 rounded-2xl p-5 shadow-sm">
                    <Calendar className="h-6 w-6 text-ayur-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brown-dark">Working Hours</h4>
                      <p className="text-xs sm:text-sm font-light text-brown-dark/75 mt-1 leading-relaxed">
                        {siteConfig.hours.weekdays}<br />
                        {siteConfig.hours.sunday}
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Social & WhatsApp */}
                  <StaggerItem className="bg-white border border-brown-dark/8 rounded-2xl p-5 shadow-sm space-y-4">
                    <h4 className="font-serif text-base font-bold text-brown-dark">Connect With Us</h4>
                    <SocialLinks variant="contact" />
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp Now</span>
                    </a>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Right Column: Inquiry Form & Map Link */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                  <h3 className="font-serif text-xl font-bold mb-6 text-brown-dark">
                    Send Inquiry Message
                  </h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4 flex flex-col items-center">
                      <div className="h-14 w-14 bg-ayur-green/10 text-ayur-green rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-brown-dark">Message Sent Successfully!</h4>
                      <p className="text-xs text-brown-dark/75 max-w-sm leading-relaxed font-light">
                        Thank you for reaching out. Your enquiry has been sent directly to <strong className="text-ayur-green font-semibold">{siteConfig.email}</strong>. Our hospital relations desk will contact you shortly.
                      </p>
                      <button onClick={() => setIsSubmitted(false)} className="text-xs font-bold text-ayur-green hover:underline mt-2 cursor-pointer">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="name" className="text-xs font-bold text-brown-dark/80">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-cream-bg border px-4 py-3 rounded-xl text-sm outline-none ${
                              errors.name ? "border-red-500" : "border-brown-dark/8 focus:border-brown-accent"
                            }`}
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="phone" className="text-xs font-bold text-brown-dark/80">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-cream-bg border px-4 py-3 rounded-xl text-sm outline-none ${
                              errors.phone ? "border-red-500" : "border-brown-dark/8 focus:border-brown-accent"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-bold text-brown-dark/80">Email Address (Optional)</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-cream-bg border border-brown-dark/8 focus:border-brown-accent px-4 py-3 rounded-xl text-sm outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="message" className="text-xs font-bold text-brown-dark/80">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full bg-cream-bg border px-4 py-3 rounded-xl text-sm outline-none resize-none ${
                            errors.message ? "border-red-500" : "border-brown-dark/8 focus:border-brown-accent"
                          }`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-ayur-green text-white font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? "Sending..." : "Submit Message"}
                      </button>
                    </form>
                  )}
                </div>

                {/* Google Maps Embed */}
                <div className="bg-white border border-brown-dark/8 rounded-3xl overflow-hidden shadow-sm">
                  <div className="p-5 border-b border-brown-dark/8">
                    <h4 className="font-serif text-lg font-bold text-brown-dark flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-ayur-green" />
                      <span>Find Us on Google Maps</span>
                    </h4>
                    <p className="text-xs font-light text-brown-dark/75 mt-1">
                      Opposite Chenny&apos;s Mahal, on Thally Road, Hosur.
                    </p>
                  </div>
                  <div className="relative w-full h-64 sm:h-80">
                    <iframe
                      src={siteConfig.mapEmbed}
                      title="Aayur Kendra Hospital Location"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 flex justify-end">
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brown-dark hover:underline uppercase tracking-wider"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
