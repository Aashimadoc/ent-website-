import { createFileRoute, Link } from "@tanstack/react-router";
import { Baby, Ear, Stethoscope, Wind } from "lucide-react";
import { Card, CtaBand, FaqList, PageHero, SectionHeading } from "@/components/site/blocks";
import { site } from "@/lib/site";
import { serviceGroups } from "@/lib/services";

const title = "ENT Care in Delhi — Ear, Nose & Throat Treatment | Dr. Aashima Chopra";
const description =
  "Routine and advanced ENT care for adults and children: ear infections, hearing problems, vertigo, sinusitis, allergy, tonsils, adenoids, voice problems, snoring and sleep apnoea.";

const faqs = [
  {
    q: "What happens at a first ENT consultation?",
    a: "A detailed history, examination of the ears, nose and throat, and where needed an endoscopic assessment. You will leave with a clear explanation of the diagnosis and the options.",
  },
  {
    q: "Do children need a separate appointment type?",
    a: "No. Children are seen in the same clinic, with the examination adapted to their age and comfort, and findings explained to parents.",
  },
  {
    q: "Will I need surgery?",
    a: "Most ENT problems are managed medically. Surgery is discussed only when it is the appropriate next step, with the reasons explained.",
  },
  {
    q: "Should I bring previous reports?",
    a: "Yes — previous prescriptions, hearing tests, scans and discharge summaries help avoid repeating investigations.",
  },
];

export const Route = createFileRoute("/services/ent-care")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/services/ent-care` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services/ent-care` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: EntCare,
});

const icons: Record<string, typeof Ear> = {
  ear: Ear,
  nose: Wind,
  throat: Stethoscope,
  sleep: Stethoscope,
  pediatric: Baby,
};

function EntCare() {
  return (
    <>
      <PageHero
        eyebrow="Everyday ENT"
        title="Comprehensive ENT Care"
        intro="One clinic for the everyday ear, nose and throat problems that affect adults and children — assessed properly, explained clearly and treated with the least invasive option that works."
        crumbs={[{ label: "Services", to: "/services" }, { label: "ENT Care" }]}
      />

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Scope of Care"
            title="What we look after"
            intro="From a blocked nose or a painful ear to hearing loss, vertigo, recurrent tonsillitis and disturbed sleep."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceGroups.map((group) => {
              const Icon = icons[group.id] ?? Stethoscope;
              return (
                <Card key={group.id} className="p-6">
                  <Icon className="size-6 text-primary" />
                  <h2 className="mt-4 font-display text-lg font-semibold text-navy">{group.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.intro}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-full border border-border bg-mist px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Your Visit" title="What to expect" />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Consultations are unhurried. Your symptoms are taken in detail, the ears, nose and throat are examined,
                and endoscopy is used where it adds information.
              </p>
              <p>
                You will be told what the diagnosis is, what the treatment options are, and what happens if you choose
                to wait. Prescriptions and investigations are kept to what is genuinely needed.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="rounded-full bg-navy px-6 py-3 text-xs font-semibold tracking-[0.1em] text-navy-foreground uppercase"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-border px-6 py-3 text-xs font-semibold tracking-[0.1em] text-navy uppercase"
              >
                All Services
              </Link>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <div className="mt-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
