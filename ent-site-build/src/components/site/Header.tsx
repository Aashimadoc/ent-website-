import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { nav, site, whatsappHref } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-xl bg-navy text-navy-foreground">
            <span className="font-display text-sm font-semibold text-teal">EC</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-[0.14em] text-navy uppercase">
              ENT Care Clinic
            </span>
            <span className="block text-[11px] text-muted-foreground">{site.doctor}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            aria-label={`WhatsApp ${site.phone}`}
            className="hidden size-10 place-items-center rounded-full border border-border text-navy transition-colors hover:border-primary hover:text-primary sm:grid"
          >
            <MessageCircle className="size-4" />
          </a>
          <Link
            to="/appointment"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-[0.08em] text-primary-foreground uppercase shadow-card transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl bg-navy text-navy-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 rounded-full bg-primary py-3 text-center text-xs font-semibold tracking-[0.08em] text-primary-foreground uppercase"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
