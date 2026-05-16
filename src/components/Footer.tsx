import { MessageCircle, MapPin, Phone, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  // Strip any non-digits so the link always works
  const waNumber = siteConfig.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hello ${siteConfig.brand}, I'd like to know more about your products.`
  )}`;

  return (
    <footer id="contact" className="bg-brand text-brand-foreground mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Visit our showroom
            </h2>
            <p className="text-brand-foreground/75 mb-8 max-w-md leading-relaxed">
              Experience our curated collection of premium sanitaryware and
              fittings in person.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-brand-foreground/85">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>{siteConfig.fullAddress}</span>
              </div>
              <a
                href={`tel:+${siteConfig.phone}`}
                className="flex items-center gap-3 text-brand-foreground/85 hover:text-brand-foreground transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 rounded-full bg-brand-foreground text-brand px-5 py-3 font-medium transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-brand-foreground/15 shadow-lg bg-brand-foreground/5">
            <iframe
              title={`${siteConfig.brand} location map`}
              src={siteConfig.mapEmbedUrl}
              className="w-full h-72 md:h-80 block"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={siteConfig.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground hover:text-brand transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-brand-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-foreground/70">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
          <p className="font-serif">Timeless elegance, everyday.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
