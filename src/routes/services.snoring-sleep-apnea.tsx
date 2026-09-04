import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Moon } from "lucide-react";
import { Card, CtaBand, FaqList, PageHero, SectionHeading } from "@/components/site/blocks";
import { site } from "@/lib/site";

const title = "Snoring & Sleep Apnea Treatment in Delhi | Dr. Aashima Chopra";
const description =
  "ENT assessment and treatment for snoring and obstructive sleep apnoea by Dr. Aashima Chopra — nasal, palate, tonsil and tongue-base airway evaluation for adults and children in Delhi.";

const faqs = [
  {
    q: "Is snoring always sleep apnoea?",
    a: "No. Many people snore without sleep apnoea. However, loud habitual snoring with witnessed breathing pauses, gasping or daytime sleepiness should be assessed so that obstructive sleep apnoea is not missed.",
  },
  {
    q: "What does an ENT assessment involve?",
    a: "A detailed sleep and symptom history, examination of the nose, palate, tonsils and tongue base, endoscopic airway assessment, and a referral for a sleep study where indicated.",
  },
  {
    q: "Do I need a sleep study?",
    a: "A PSG (polysomnography) sleep study is advised when the history suggests obstructive sleep apnoea. It can be arranged for suitable patients and measures breathing, oxygen levels and sleep patterns to guide treatment.",
  },
  {
    q: "Is surgery always needed?",
    a: "No. Treatment is stepwise — weight and lifestyle measures, treating nasal blockage and allergy, positional advice, and CPAP where appropriate. Surgery is considered only for selected anatomical causes.",
  },
  {
    q: "My child snores loudly — is that normal?",
    a: "Loud, persistent snoring with mouth breathing or restless sleep in a child is not typical and is often related to enlarged adenoids or tonsils. It deserves an ENT assessment.",
  },
];

export const Route = createFileRoute("/services/snoring-sleep-apnea")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/services/snoring-sleep-apnea` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services/snoring-sleep-apnea` }],
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
  component: SnoringSleepApnea,
});

const warningSigns = [
  "Loud snoring most nights",
  "Witnessed pauses in breathing or gasping",
  "Waking unrefreshed or with morning headaches",
  "Excessive daytime sleepiness",
  "Difficulty concentrating or irritability",
  "Children: mouth breathing, restless sleep, bedwetting",
];

const airwayLevels = [
  { title: "Nose", body: "Septal deviation, turbinate enlargement, allergy or polyps limiting airflow at night." },
  { title: "Palate", body: "A long or bulky soft palate that vibrates and narrows the airway during sleep." },
  { title: "Tonsils", body: "Enlarged tonsils or adenoids narrowing the throat — a common cause in children." },
  { title: "Tongue base", body: "Tongue-base or lower airway collapse identified on endoscopic assessment." },
];

const journey = [
  { step: "Sleep history", body: "Symptoms, sleep pattern, partner observations and daytime sleepiness scoring." },
  { step: "Airway examination", body: "Nasal endoscopy and throat examination to locate the level of narrowing." },
  { step: "PSG sleep study", body: "Polysomnography can be arranged for suitable patients when obstructive sleep apnoea is suspected, followed by a thorough clinical interpretation." },
  { step: "Stepwise treatment", body: "Lifestyle and positional advice, nasal and allergy treatment, CPAP where indicated." },
  { step: "Surgery if suitable", body: "Targeted procedures considered only for selected anatomical causes." },
];

function SnoringSleepApnea() {
  return (
    <>
      <PageHero
        eyebrow="Focus Area"
        title="Snoring & Sleep Apnea"
        intro="Habitual snoring and obstructive sleep apnoea are airway problems, not just noisy sleep. The first step is finding exactly where the airway narrows — then treating that level."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Snoring & Sleep Apnea" }]}
      />

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="Why snoring deserves a proper assessment" />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Snoring is the sound of turbulent airflow through a narrowed upper airway. In some people the narrowing
                is mild and the main problem is noise. In others the airway repeatedly collapses during sleep, causing
                obstructive sleep apnoea — brief pauses in breathing with drops in oxygen.
              </p>
              <p>
                An ENT assessment identifies the level of obstruction, and a sleep study measures whether apnoea is
                present and how severe it is. Treatment is then matched to those findings rather than applied blindly.
              </p>
            </div>
            <h3 className="mt-8 font-display text-base font-semibold text-navy">Signs worth getting checked</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {warningSigns.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-navy p-8 text-navy-foreground">
            <Moon className="size-6 text-teal" />
            <h2 className="mt-4 font-display text-xl font-semibold">Where the airway narrows</h2>
            <p className="mt-3 text-sm text-navy-foreground/75">
              Obstruction can occur at more than one level, which is why examination matters before treatment.
            </p>
            <div className="mt-6 space-y-5">
              {airwayLevels.map((l) => (
                <div key={l.title}>
                  <p className="font-display text-sm font-semibold text-teal">{l.title}</p>
                  <p className="mt-1 text-sm text-navy-foreground/75">{l.body}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Patient Journey" title="A stepwise plan" />
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
              to="/blogs/snoring-when-to-see-an-ent-specialist"
              className="mt-6 inline-flex text-xs font-semibold tracking-[0.1em] text-primary uppercase hover:underline"
            >
              Read: Snoring — when to see an ENT specialist
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Concerned about snoring or disturbed sleep?" />
    </>
  );
}
