"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { specialitiesData } from "@/data/specialities";
import { therapiesData } from "@/data/therapies";
import { 
  Calendar, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  User, 
  Mail, 
  MessageSquare,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";

function FormContent() {
  const searchParams = useSearchParams();
  const treatmentParam = searchParams.get("treatment") || "";

  // Combine Specialities & Therapies for selector options
  const treatmentOptions = [
    { category: "Specialities", items: specialitiesData.map((s) => ({ value: s.slug, label: s.title })) },
    { category: "Therapies", items: therapiesData.map((t) => ({ value: t.slug, label: t.title })) },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set initial pre-selected treatment from query params
  useEffect(() => {
    if (treatmentParam) {
      setFormData((prev) => ({ ...prev, treatment: treatmentParam }));
    }
  }, [treatmentParam]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Provide a valid 10-digit phone number";
    }
    
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Provide a valid email address";
    }
    
    if (!formData.treatment) newErrors.treatment = "Please select a department or therapy";
    if (!formData.date) newErrors.date = "Please select a preferred date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // 1. Direct submit to FormSubmit.co for aayurhealthclinic@gmail.com
      await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[New Appointment] ${formData.name}`,
          _template: "table",
          _captcha: "false",
          "Patient Name": formData.name,
          "Contact Phone": formData.phone,
          "Patient Email": formData.email || "Not Provided",
          "Requested Care / Therapy": formData.treatment,
          "Preferred Date": formData.date,
          "Health Concerns": formData.message || "None",
        }),
      });

      // 2. Also submit to internal API route
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Failed to submit appointment:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        treatment: "",
        date: "",
        message: "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="w-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-brown-muted flex items-center space-x-1">
                  <User className="h-3.5 w-3.5 text-ayur-green" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full bg-cream-light border px-4 py-3.5 rounded-xl text-sm outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-brown-dark/10 focus:border-ayur-green focus:ring-2 focus:ring-ayur-green/10"
                  }`}
                  suppressHydrationWarning={true}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-brown-muted flex items-center space-x-1">
                  <Phone className="h-3.5 w-3.5 text-ayur-green" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full bg-cream-light border px-4 py-3.5 rounded-xl text-sm outline-none transition-colors ${
                    errors.phone ? "border-red-500" : "border-brown-dark/10 focus:border-ayur-green focus:ring-2 focus:ring-ayur-green/10"
                  }`}
                  suppressHydrationWarning={true}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-brown-muted flex items-center space-x-1">
                  <Mail className="h-3.5 w-3.5 text-ayur-green" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rajesh@gmail.com"
                  className={`w-full bg-cream-light border px-4 py-3.5 rounded-xl text-sm outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-brown-dark/10 focus:border-ayur-green focus:ring-2 focus:ring-ayur-green/10"
                  }`}
                  suppressHydrationWarning={true}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Treatment Interested In */}
              <div className="space-y-1.5">
                <label htmlFor="treatment" className="text-xs uppercase tracking-wider font-semibold text-brown-muted flex items-center space-x-1">
                  <Calendar className="h-3.5 w-3.5 text-ayur-green" />
                  <span>Service / Therapy *</span>
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className={`w-full bg-cream-light border px-4 py-3.5 rounded-xl text-sm outline-none transition-colors ${
                    errors.treatment ? "border-red-500" : "border-brown-dark/10 focus:border-ayur-green focus:ring-2 focus:ring-ayur-green/10"
                  }`}
                  suppressHydrationWarning={true}
                >
                  <option value="">Select Treatment</option>
                  {treatmentOptions.map((group) => (
                    <optgroup key={group.category} label={group.category}>
                      {group.items.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {errors.treatment && (
                  <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.treatment}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Preferred Date */}
            <div className="space-y-1.5">
              <label htmlFor="date" className="text-xs uppercase tracking-wider font-semibold text-brown-muted flex items-center space-x-1">
                <Calendar className="h-3.5 w-3.5 text-ayur-green" />
                <span>Preferred Date *</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full bg-cream-light border px-4 py-3.5 rounded-xl text-sm outline-none transition-colors ${
                  errors.date ? "border-red-500" : "border-brown-dark/10 focus:border-ayur-green focus:ring-2 focus:ring-ayur-green/10"
                }`}
                suppressHydrationWarning={true}
              />
              {errors.date && (
                <p className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.date}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-brown-muted flex items-center space-x-1">
                <MessageSquare className="h-3.5 w-3.5 text-ayur-green" />
                <span>Additional Health Concerns (Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe your symptoms or wellness requirements..."
                className="w-full bg-cream-light border border-brown-dark/10 focus:border-ayur-green focus:ring-2 focus:ring-ayur-green/10 px-4 py-3.5 rounded-xl text-sm outline-none transition-colors resize-none"
              />
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-brown-dark/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 cursor-pointer"
                suppressHydrationWarning={true}
              >
                <span>{isSubmitting ? "Registering..." : "Book Appointment"}</span>
              </button>

              <div className="flex items-center space-x-4 w-full sm:w-auto justify-center">
                <a
                  href="tel:+919150112757"
                  className="flex items-center space-x-1 text-sm font-semibold text-brown-muted hover:text-ayur-green transition-colors"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>Call Hospital</span>
                </a>
                <span className="text-brown-dark/15">|</span>
                <a
                  href="https://wa.me/919150112757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-sm font-semibold text-[#25D366] hover:text-[#20ba5a] transition-colors"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-10 space-y-6 flex flex-col items-center max-w-lg mx-auto"
          >
            <div className="h-16 w-16 bg-ayur-green/10 text-ayur-green rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle className="h-10 w-10" />
            </div>
            
            <div className="space-y-3">
              <h3 className="font-serif text-2.5xl font-bold text-brown-dark">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-sm font-light text-brown-muted leading-relaxed">
                Thank you for contacting Aayur Kendra. Your appointment details have been sent directly to <strong className="text-ayur-green font-semibold">{siteConfig.email}</strong>.
              </p>
              <p className="text-xs text-brown-muted/80 pt-1">
                Our clinical desk will call you shortly to confirm your consultation timing and physician availability.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="btn-primary text-xs py-3 px-6 cursor-pointer mt-4"
            >
              Book Another Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppointmentForm() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading Form...</div>}>
      <FormContent />
    </Suspense>
  );
}
