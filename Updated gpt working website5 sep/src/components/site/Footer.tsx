import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Star } from "lucide-react";
import { nav, site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="surface-navy mt-20">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            ENT Care Clinic
          </p>
          <p className="mt-3 font-display text-xl">{site.doctor}</p>
          <p className="mt-1 text-sm text-navy-foreground/70">{site.credentials}</p>
          <div className="gold-rule mt-5 h-px w-24" />
          <p className="mt-4 text-sm text-navy-foreground/70">
            Advanced endoscopic ear and sinus surgery with comprehensive ENT care for adults and children.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.14em] uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {[...nav, { label: "Book Appointment", to: "/appointment" as const }].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.14em] uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 hover:text-teal">
                <MessageCircle className="size-4 text-teal" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-teal">
                <Mail className="size-4 shrink-0 text-teal" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-teal"
              >
                <MapPin className="size-4 text-teal" /> {site.locality}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.14em] uppercase">Opening Hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {site.hours.map((h) => (
              <li key={`${h.days}-${h.time}`} className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-teal" />
                <span>
                  {h.days}
                  <span className="block text-navy-foreground/60">{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              to="/appointment"
              className="rounded-full bg-teal px-4 py-2 text-xs font-semibold tracking-[0.06em] text-navy uppercase"
            >
              Book
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy-foreground/25 px-4 py-2 text-xs font-semibold tracking-[0.06em] uppercase"
            >
              <MessageCircle className="size-3.5" /> WhatsApp
            </a>
            <a
              href={site.reviewsLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy-foreground/25 px-4 py-2 text-xs font-semibold tracking-[0.06em] uppercase"
            >
              <Star className="size-3.5 text-gold" /> Reviews
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} ENT Care Clinic — {site.doctor}. All rights reserved.
          </p>
          <p>Information on this website is for general guidance and is not a substitute for a consultation.</p>
        </div>
      </div>
    </footer>
  );
}
