import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import sinusSurgery from "@/assets/fess-sinus-endoscopy-optimized.webp";
import { Card, CtaBand, FaqList, PageHero, SectionHeading } from "@/components/site/blocks";
import { site } from "@/lib/site";

const title = "FESS — Functional Endoscopic Sinus Surgery in Delhi | Dr. Aashima Chopra";
const description =
  "Endoscopic sinus surgery (FESS) by Dr. Aashima Chopra for chronic sinusitis and nasal polyps — minimally invasive, no external cuts, with clear pre- and post-operative care.";

const faqs = [
  {
    q: "What is endoscopic sinus surgery?",
    a: "It is surgery performed entirely through the nostrils using a nasal endoscope, to open blocked sinus drainage pathways and remove disease such as polyps. There are no external cuts on the face.",
  },
  {
    q: "When is it recommended?",
    a: "Usually when chronic sinus symptoms or nasal polyps persist despite an adequate trial of medical treatment, and endoscopy or a CT scan confirms blocked sinus drainage.",
  },
  {
    q: "Will my sense of smell return?",
    a: "Smell can improve when blockage or polyps are the main cause, but this varies between individuals and cannot be guaranteed. Expectations are discussed before surgery.",
  },
  {
    q: "How long is the recovery?",
    a: "Most patients need a short period of rest, saline rinses and follow-up nasal cleaning. Your exact recovery plan depends on the extent of the surgery performed.",
  },
  {
    q: "Do I still need medicines afterwards?",
    a: "In many cases yes — surgery improves ventilation and drainage so that nasal sprays and allergy treatment can work more effectively.",
  },
];

export const Route = createFileRoute("/services/endoscopic-sinus-surgery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/services/endoscopic-sinus-surgery` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services/endoscopic-sinus-surgery` }],
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
  component: SinusSurgery,
});

const conditions = [
  "Chronic sinusitis not settling with medicines",
  "Nasal polyps",
  "Recurrent sinus infections",
  "Blocked sinus drainage on CT",
  "Fungal sinus disease in selected cases",
  "Persistent loss of smell from nasal blockage",
];

const benefits = [
  { title: "No external incision", body: "The entire procedure is carried out through the nostrils using an endoscope." },
  { title: "Targeted approach", body: "Only the blocked drainage pathways and diseased tissue are addressed." },
  { title: "Better medicine delivery", body: "Once sinuses drain freely, sprays and rinses reach the areas that need them." },
  { title: "Structured aftercare", body: "Planned reviews with nasal cleaning to support healing." },
];

const journey = [
  { step: "Consultation", body: "Detailed history, nasal examination and diagnostic nasal endoscopy." },
  { step: "Investigations", body: "CT scan of the sinuses and allergy assessment where indicated." },
  { step: "Medical trial", body: "Optimised medical treatment first — surgery is not the automatic first step." },
  { step: "Surgery", body: "Endoscopic clearance of blocked drainage pathways under appropriate anaesthesia." },
  { step: "Follow-up", body: "Saline rinses, review endoscopy and long-term maintenance plan." },
];

function SinusSurgery() {
  return (
    <>
      <PageHero
        eyebrow="Surgical Speciality"
        title="Functional Endoscopic Sinus Surgery (FESS)"
        intro="Minimally invasive surgery performed through the nostrils to restore sinus ventilation and drainage in chronic sinusitis and nasal polyp disease."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Endoscopic Sinus Surgery" }]}
      />

      <section className="section">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <img
            src={sinusSurgery}
            alt="Functional endoscopic sinus surgery (FESS) through the nostril in a clean operating theatre"
            loading="eager"
            width={1200}
            height={675}
            className="w-full rounded-[2rem] object-cover shadow-card"
          />
          <div>
            <SectionHeading eyebrow="Overview" title="What the procedure involves" />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Functional endoscopic sinus surgery uses a slim endoscope passed through the nostril to view the sinus
                openings directly. Blocked drainage pathways are opened and diseased tissue such as polyps is removed,
                while healthy structures are preserved.
              </p>
              <p>
                Surgery is considered only after appropriate medical treatment has been tried. Whether it is right for
                you depends on your symptoms, endoscopy findings and CT scan.
              </p>
            </div>
            <h3 className="mt-8 font-display text-base font-semibold text-navy">Conditions commonly assessed</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading eyebrow="Why Endoscopic" title="Potential advantages in suitable cases" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <Card key={b.title} className="p-5">
                <h3 className="font-display text-base font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
            Outcomes vary between individuals. Nothing on this page should be taken as a guarantee of a particular
            result.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Patient Journey" title="From first visit to follow-up" />
            <ol className="mt-8 space-y-5">
              {journey.map((j, i) => (
                <li key={j.step} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-semibold text-teal">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="font-display text-sm font-semibold text-navy">{j.step}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{j.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <div className="mt-8">
              <FaqList items={faqs} />
            </div>
            <Link
              to="/services/snoring-sleep-apnea"
              className="mt-6 inline-flex text-xs font-semibold tracking-[0.1em] text-primary uppercase hover:underline"
            >
              See also: Snoring &amp; Sleep Apnea
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Discuss whether sinus surgery is right for you" />
    </>
  );
}
