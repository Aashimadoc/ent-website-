import { Link } from "@tanstack/react-router";
import { ChevronRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { site, whatsappHref } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="surface-navy">
      <div className="shell py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-navy-foreground/60">
          <Link to="/" className="hover:text-teal">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="size-3" />
              {c.to ? (
                <Link to={c.to} className="hover:text-teal">
                  {c.label}
                </Link>
              ) : (
                <span className="text-navy-foreground/85">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-navy-foreground/75 md:text-base">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold text-navy md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{intro}</p> : null}
    </div>
  );
}

export function CtaBand({
  title = "Ready to see an ENT specialist?",
  body = "Book a consultation with Dr. Aashima Chopra, or send a message on WhatsApp and the clinic will get back to you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section">
      <div className="shell">
        <div className="surface-navy overflow-hidden rounded-3xl px-6 py-12 text-center md:px-14">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-navy-foreground/75 md:text-base">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/appointment"
              className="w-full rounded-full bg-teal px-7 py-3 text-center sm:w-auto text-xs font-semibold tracking-[0.1em] text-navy uppercase shadow-card transition-transform hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy-foreground/30 px-7 py-3 sm:w-auto text-xs font-semibold tracking-[0.1em] uppercase transition-colors hover:border-teal hover:text-teal"
            >
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy-foreground/30 px-7 py-3 sm:w-auto text-xs font-semibold tracking-[0.1em] uppercase transition-colors hover:border-teal hover:text-teal"
            >
              <MessageCircle className="size-4" /> +91 99992 02000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-border/70 bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card">
      {items.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-navy marker:content-none">
            {f.q}
            <ChevronRight className="size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
