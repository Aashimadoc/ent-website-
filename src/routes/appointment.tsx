import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/blocks";
import { isClinicOpen, sessions, site, slotsForSession, whatsappHref, whatsappLink } from "@/lib/site";

const title = "Book ENT Appointment in Greater Kailash 1 | Dr. Aashima Chopra";
const description =
  "Request an ENT consultation with Dr. Aashima Chopra at ENT Care Clinic, Greater Kailash-1, New Delhi. Send your preferred date and time directly to the clinic on WhatsApp.";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/appointment` }],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [concern, setConcern] = useState("");
  const slots = sessions.flatMap(slotsForSession);
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [
      "Hello Dr. Aashima Chopra's ENT Care Clinic. I would like to request an appointment.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred date: ${date || "Not specified"}`,
      `Preferred time: ${time || "Not specified"}`,
      `ENT concern: ${concern || "Not specified"}`,
      "",
      "Please confirm an available appointment slot. Thank you.",
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book an ENT Consultation"
        intro="Share your preferred date, time and concern. Your request will open securely in WhatsApp so the clinic can confirm an available slot with you."
        crumbs={[{ label: "Book Appointment" }]}
      />

      <section className="section bg-mist">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <h2 className="text-2xl font-semibold text-navy">Appointment request</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This form does not confirm a slot automatically. The clinic will confirm availability with you on WhatsApp.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-navy">
                Name <span className="text-primary">*</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Patient name"
                />
              </label>
              <label className="text-sm font-medium text-navy">
                Phone number <span className="text-primary">*</span>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your contact number"
                />
              </label>
              <label className="text-sm font-medium text-navy">
                Preferred date
                <input
                  type="date"
                  min={minDate}
                  required
                  value={date}
                  onChange={(e) => {
                    const next = e.target.value;
                    if (next && !isClinicOpen(new Date(`${next}T12:00:00`))) {
                      e.target.setCustomValidity("The clinic is closed on Sundays. Please choose Monday to Saturday.");
                    } else e.target.setCustomValidity("");
                    setDate(next);
                  }}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label className="text-sm font-medium text-navy">
                Preferred time
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Choose a 15-minute slot</option>
                  {sessions.map((session) => (
                    <optgroup key={session.label} label={`${session.label} session`}>
                      {slots.filter((slot) => slot.session === session.label).map((slot) => (
                        <option key={slot.value} value={slot.label}>{slot.label}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-navy">
              Main ENT concern
              <textarea
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                rows={4}
                className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="For example: ear pain, blocked nose, sinus symptoms, snoring, throat problem..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <MessageCircle className="size-4" /> Continue on WhatsApp
            </button>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Please do not send urgent or emergency medical information through this form. For an emergency, seek immediate medical care.
            </p>
          </form>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-navy p-6 text-navy-foreground shadow-card">
              <CalendarDays className="size-7 text-teal" />
              <h2 className="mt-4 text-xl font-semibold">Clinic timings</h2>
              <div className="mt-4 space-y-3 text-sm text-navy-foreground/75">
                {site.hours.map((h) => (
                  <p key={`${h.days}-${h.time}`}>
                    <strong className="block text-navy-foreground">{h.days}</strong>
                    {h.time}
                  </p>
                ))}
              </div>
            </div>

            <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary">
              <span className="grid size-11 place-items-center rounded-full bg-accent text-primary"><MessageCircle className="size-5" /></span>
              <span><strong className="block text-sm text-navy">WhatsApp the clinic</strong><span className="text-sm text-muted-foreground">{site.phone}</span></span>
            </a>

            <a href={site.mapsLink} target="_blank" rel="noreferrer noopener" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary">
              <span className="grid size-11 place-items-center rounded-full bg-accent text-primary"><MapPin className="size-5" /></span>
              <span><strong className="block text-sm text-navy">Get directions</strong><span className="text-sm text-muted-foreground">{site.locality}</span></span>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
