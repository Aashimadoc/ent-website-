import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import earSurgery from "@/assets/ear-surgery.webp";
import { Card, CtaBand, FaqList, PageHero, SectionHeading } from "@/components/site/blocks";
import { site } from "@/lib/site";

const title = "Endoscopic Ear Surgery in Delhi | Dr. Aashima Chopra";
const description =
  "Endoscopic (scarless) ear surgery by Dr. Aashima Chopra — a minimally invasive approach through the ear canal for selected ear conditions, with clear pre- and post-operative guidance.";

const faqs = [
  {
    q: "What is endoscopic ear surgery?",
    a: "It is ear surgery performed using a thin endoscope passed through the ear canal, which gives a wide, magnified view of the middle ear without an external cut behind the ear in suitable cases.",
  },
  {
    q: "Is it really scarless?",
    a: "Because the approach is through the natural ear canal, an external incision is often avoided. Whether this is possible depends on the individual condition and anatomy, and is confirmed after examination.",
  },
  {
    q: "Am I a candidate for endoscopic ear surgery?",
    a: "Suitability is decided after an examination, ear endoscopy, hearing tests and, in some cases, imaging. Not every ear condition can be treated endoscopically.",
  },
  {
    q: "What does recovery usually involve?",
    a: "Recovery varies with the procedure performed. You will be given specific instructions about keeping the ear dry, activity, medicines and follow-up before you go home.",
  },
  {
    q: "Will my hearing improve?",
    a: "The goal depends on the diagnosis — some procedures aim to control disease, others to improve hearing. Realistic expectations are discussed before surgery.",
  },
];

export const Route = createFileRoute("/services/endoscopic-ear-surgery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/services/endoscopic-ear-surgery` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services/endoscopic-ear-surgery` }],
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
  component: EarSurgery,
});

const conditions = [
  "Perforated eardrum",
  "Chronic ear discharge",
  "Selected cholesteatoma cases",
  "Conductive hearing loss from middle ear disease",
  "Retracted eardrum",
  "Middle ear reconstruction in suitable patients",
];

const benefits = [
  { title: "Wide-angle view", body: "The endoscope reaches around corners of the middle ear that are hard to see with a microscope alone." },
  { title: "Often no external cut", body: "Access through the ear canal avoids a behind-the-ear incision in suitable cases." },
  { title: "Tissue preservation", body: "A targeted approach can reduce the amount of healthy bone and tissue that needs removing." },
  { title: "Clear counselling", body: "You are told what the procedure can and cannot achieve before you decide." },
];

const journey = [
  { step: "Consultation", body: "History, ear examination and endoscopic assessment of the eardrum and canal." },
  { step: "Investigations", body: "Hearing tests and, where needed, imaging to define the extent of disease." },
  { step: "Planning", body: "Discussion of whether an endoscopic approach is suitable, along with alternatives." },
  { step: "Surgery", body: "The procedure is performed with anaesthesia appropriate to the case." },
  { step: "Follow-up", body: "Planned reviews to monitor healing and hearing outcomes." },
];

function EarSurgery() {
  return (
    <>
      <PageHero
        eyebrow="Surgical Speciality"
        title="Endoscopic Ear Surgery"
        intro="A minimally invasive approach that uses a high-definition endoscope through the natural ear canal to treat selected middle ear and eardrum conditions."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Endoscopic Ear Surgery" }]}
      />

      <section className="section">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <img
            src={earSurgery}
            alt="Endoscopic ear surgery equipment in a modern ENT operating theatre"
            className="w-full rounded-[2rem] object-cover shadow-card"
          />
          <div>
            <SectionHeading eyebrow="Overview" title="What endoscopic ear surgery involves" />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Traditional ear surgery is often performed under a microscope, sometimes through a cut behind the ear.
                Endoscopic ear surgery instead uses a slim endoscope inserted through the ear canal, projecting a
                magnified, wide-angle image of the middle ear onto a screen.
              </p>
              <p>
                For suitable conditions this can mean working directly through the natural opening of the ear, with no
                external incision. The technique is not appropriate for every ear problem — whether it can be used in
                your case is confirmed only after examination and investigations.
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
              to="/services/endoscopic-sinus-surgery"
              className="mt-6 inline-flex text-xs font-semibold tracking-[0.1em] text-primary uppercase hover:underline"
            >
              See also: Endoscopic Sinus Surgery
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Discuss whether endoscopic ear surgery is right for you" />
    </>
  );
}
