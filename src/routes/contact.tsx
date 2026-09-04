import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { site, whatsappHref } from "@/lib/site";

const title = "Contact ENT Care Clinic Greater Kailash 1 | Dr. Aashima Chopra";
const description =
  "Contact ENT Care Clinic of Dr. Aashima Chopra in Greater Kailash-1, New Delhi. Call, WhatsApp, get directions or request an ENT appointment.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="ENT Care Clinic, Greater Kailash-1" intro="Call, WhatsApp or use Google Maps for directions to the clinic. Appointment requests can be sent directly to the clinic on WhatsApp." crumbs={[{ label: "Contact" }]} />
      <section className="section bg-mist">
        <div className="shell grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className="rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary">
            <MessageCircle className="size-7 text-primary" /><h2 className="mt-4 text-lg font-semibold text-navy">WhatsApp</h2><p className="mt-2 text-sm text-muted-foreground">{site.phone}</p>
          </a>
          <a href="/appointment" className="rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary">
            <MessageCircle className="size-7 text-primary" /><h2 className="mt-4 text-lg font-semibold text-navy">Appointment</h2><p className="mt-2 text-sm text-muted-foreground">Choose a 15-minute preferred slot and send the request on WhatsApp.</p>
          </a>
          <a href={`mailto:${site.email}`} className="rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary">
            <Mail className="size-7 text-primary" /><h2 className="mt-4 text-lg font-semibold text-navy">Email</h2><p className="mt-2 break-all text-sm text-muted-foreground">{site.email}</p>
          </a>
          <a href={site.mapsLink} target="_blank" rel="noreferrer noopener" className="rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary">
            <MapPin className="size-7 text-primary" /><h2 className="mt-4 text-lg font-semibold text-navy">Directions</h2><p className="mt-2 text-sm text-muted-foreground">{site.locality}</p>
          </a>
        </div>
        <div className="shell mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <iframe title="ENT Care Clinic map" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[420px] w-full border-0" />
          </div>
          <div className="rounded-3xl bg-navy p-7 text-navy-foreground shadow-card">
            <Clock className="size-7 text-teal" /><h2 className="mt-4 text-xl font-semibold">Opening hours</h2>
            <div className="mt-5 space-y-4 text-sm text-navy-foreground/75">{site.hours.map((h) => <p key={`${h.days}-${h.time}`}><strong className="block text-navy-foreground">{h.days}</strong>{h.time}</p>)}</div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
