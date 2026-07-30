import Link from "next/link";
import { Mail, Phone, MapPin, Calendar, Heart, Shield } from "lucide-react";
import { siteConfig } from "@/lib/site";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-light border-t border-brown-dark/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-brown-dark">
                Aayur <span className="text-ayur-green">Kendra</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brown-muted font-medium mt-1">
                Ayurveda Speciality Hospital
              </span>
            </Link>
            <p className="text-sm text-brown-muted leading-relaxed font-light">
              {siteConfig.tagline}. Authentic Ayurveda, Panchakarma, and integrated wellness under expert medical supervision for 25+ years.
            </p>
            <SocialLinks variant="default" />
            <span className="inline-block text-[10px] uppercase tracking-wider font-medium text-brown-muted bg-white px-3 py-1.5 rounded-lg border border-brown-dark/8">
              GSTIN: {siteConfig.gstin}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-brown-dark mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-brown-muted">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Treatments", href: "/therapies" },
                { name: "Doctors", href: "/doctors" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Book Appointment", href: "/appointment" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-ayur-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-brown-dark mb-4">Treatments</h3>
            <ul className="space-y-2.5 text-sm text-brown-muted">
              {[
                { name: "Panchakarma", href: "/therapies/panchakarma" },
                { name: "Abhyangam", href: "/therapies/abhyangam" },
                { name: "Shirodhara", href: "/therapies/shirodhara" },
                { name: "Kizhi Therapy", href: "/therapies/kizhi" },
                { name: "Women's Wellness", href: "/specialities/womens-wellness" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-ayur-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-brown-dark mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-brown-muted font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-ayur-green shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2},<br />
                  {siteConfig.address.city} – {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-ayur-green shrink-0" />
                <a href={siteConfig.phoneHref} className="hover:text-ayur-green transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-ayur-green shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ayur-green transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 text-ayur-green shrink-0" />
                <span>{siteConfig.hours.weekdays}</span>
              </li>
            </ul>
            <Link href="/appointment" className="btn-primary text-xs py-2.5 px-4">
              <Calendar className="h-3.5 w-3.5" />
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brown-dark/8 flex flex-col sm:flex-row items-center justify-between text-xs text-brown-light">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ayur-green transition-colors flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-ayur-green transition-colors flex items-center gap-1">
              <Heart className="h-3 w-3" />
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
