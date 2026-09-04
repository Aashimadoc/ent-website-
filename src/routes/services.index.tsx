import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Card, CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { site } from "@/lib/site";
import { serviceGroups } from "@/lib/services";

const title = "ENT Services in Delhi — Ear, Nose, Throat & Pediatric ENT";
const description =
  "Complete ENT services by Dr. Aashima Chopra: endoscopic ear surgery, endoscopic sinus surgery, sinusitis, tonsils, adenoids, vertigo, hearing problems and pediatric ENT care.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/services` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
  }),
  component: Services,
});

const featured = [
  {
    title: "Endoscopic Ear Surgery",
    body: "A minimally invasive, through-the-ear-canal approach used for selected ear conditions.",
    to: "/services/endoscopic-ear-surgery" as const,
  },
  {
    title: "Endoscopic Sinus Surgery",
    body: "Endoscopic treatment for chronic sinusitis, nasal polyps and blocked sinus drainage.",
    to: "/services/endoscopic-sinus-surgery" as const,
  },
  {
    title: "Routine ENT Care",
    body: "Everyday ear, nose and throat problems for adults and children, all in one clinic.",
    to: "/services/ent-care" as const,
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive ENT Services"
        intro="From everyday ear, nose and throat complaints to advanced endoscopic surgery — assessed carefully and treated with the least invasive option that works."
        crumbs={[{ label: "Services" }]}
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((f) => (
              <Card key={f.title} className="flex flex-col bg-navy text-navy-foreground">
                <h2 className="font-display text-lg font-semibold">{f.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-foreground/75">{f.body}</p>
                <Link
                  to={f.to}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-teal uppercase"
                >
                  Learn More <ArrowRight className="size-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {serviceGroups.map((group, i) => (
        <section key={group.id} id={group.id} className={i % 2 === 0 ? "section bg-mist" : "section"}>
          <div className="shell">
            <SectionHeading eyebrow={`0${i + 1} — ${group.title}`} title={`${group.title} Conditions We Treat`} intro={group.intro} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <Card key={item.name} className="p-5">
                  <h3 className="font-display text-base font-semibold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="mt-3 inline-flex text-xs font-semibold tracking-[0.1em] text-primary uppercase hover:underline"
                    >
                      Read More
                    </Link>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
