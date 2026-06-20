import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { siteConfig } from "@/lib/site";

export default function LocationMap() {
  return (
    <section id="location" className="section-padding bg-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Visit Us"
          title="Find Aayur Kendra Hospital"
          description="Conveniently located on Thally Road, Hosur — easily accessible from Bangalore and Krishnagiri."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="premium-card p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ayur-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brown-dark">Address</p>
                  <p className="text-sm text-brown-muted font-light leading-relaxed mt-1">
                    {siteConfig.address.line1}, {siteConfig.address.line2},<br />
                    {siteConfig.address.city} – {siteConfig.address.postalCode},<br />
                    {siteConfig.address.district}, {siteConfig.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-ayur-green shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-brown-dark">Phone</p>
                  <a href={siteConfig.phoneHref} className="text-sm text-brown-muted hover:text-ayur-green transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ayur-green shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-brown-dark">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-brown-muted hover:text-ayur-green transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-ayur-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brown-dark">Hours</p>
                  <p className="text-sm text-brown-muted font-light mt-1">{siteConfig.hours.weekdays}</p>
                  <p className="text-xs text-brown-light mt-0.5">{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-sm"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          <div className="lg:col-span-3 premium-card overflow-hidden p-1 min-h-[320px]">
            <iframe
              src={siteConfig.mapEmbed}
              title="Aayur Kendra Hospital Location"
              className="w-full h-full min-h-[300px] rounded-[1.25rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
