import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Microscope, Users } from "lucide-react";
import aboutPortrait from "@/assets/dr-aashima-chopra-about.webp";
import award from "@/assets/award-original.webp";
import { Card, CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { doctorProfileImage, site } from "@/lib/site";

const title = "About Dr. Aashima Chopra — ENT Surgeon, DNB Gold Medallist";
const description =
  "Dr. Aashima Chopra is an ENT surgeon (MBBS, DNB ENT – Gold Medallist, MNAMS) with a special interest in endoscopic ear surgery and endoscopic sinus surgery in Delhi.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/about` },
      { property: "og:image", content: doctorProfileImage },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
  component: About,
});

const highlights = [
  {
    icon: GraduationCap,
    title: "MBBS, DNB (ENT)",
    body: "Postgraduate specialist training in otorhinolaryngology.",
  },
  { icon: Award, title: "Gold Medallist", body: "National Gold Medallist in ENT." },
  { icon: Users, title: "MNAMS", body: "Member of the National Academy of Medical Sciences." },
  {
    icon: Microscope,
    title: "Endoscopic Focus",
    body: "Special interest in endoscopic ear and sinus surgery.",
  },
];

const philosophy = [
  "Listen first. A careful history explains most ENT symptoms before any instrument is used.",
  "Examine properly. Endoscopic examination in clinic is used where it adds real diagnostic value.",
  "Treat medically where it works. Surgery is recommended only when it is the right step.",
  "Explain clearly. You should leave understanding your diagnosis, the options and what happens next.",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Doctor"
        title="Dr. Aashima Chopra — ENT Specialist & Endoscopic Surgeon"
        intro={site.credentials}
        crumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="shell grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <img
            src={aboutPortrait}
            alt="Portrait of Dr. Aashima Chopra, ENT specialist in Greater Kailash-1, New Delhi"
            width={720}
            height={809}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-float"
          />
          <div>
            <SectionHeading
              eyebrow="Profile"
              title="Advanced ENT care, explained in plain language"
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Dr. Aashima Chopra is an ear, nose and throat specialist practising in New Delhi.
                Her clinical work covers the full range of routine ENT problems in adults and
                children, alongside a focused surgical practice in endoscopic ear surgery and
                endoscopic sinus surgery. She places particular importance on empathy, compassion
                and making patients feel heard before deciding on treatment.
              </p>
              <p>
                She completed her DNB in ENT as a Gold Medallist and is a Member of the National
                Academy of Medical Sciences. Her approach to endoscopic surgery is driven by the
                same principle that guides her clinic work: use the least invasive approach that
                reliably treats the problem.
              </p>
              <p>
                Patients are seen for consultations at the clinic in {site.locality}, where
                diagnostic ear and nasal endoscopy can be performed during the same visit when
                required.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <Card key={h.title}>
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                    <h.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Philosophy of Care" title="How consultations are approached" />
            <ol className="mt-8 space-y-5">
              {philosophy.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-semibold text-teal">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <img
            src={award}
            alt="Dr. Aashima Chopra receiving recognition for excellence in ENT surgery"
            loading="lazy"
            decoding="async"
            width={640}
            height={640}
            className="w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
