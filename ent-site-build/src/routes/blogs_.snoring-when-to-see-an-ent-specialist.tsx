import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock3 } from "lucide-react";
import { CtaBand, FaqList, PageHero } from "@/components/site/blocks";
import { getPost } from "@/lib/blog";
import { site } from "@/lib/site";

const post = getPost("snoring-when-to-see-an-ent-specialist")!;
const canonical = `${site.url}/blogs/${post.slug}`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: post.title,
  description: post.description,
  datePublished: post.published,
  dateModified: "2026-09-05",
  mainEntityOfPage: canonical,
  author: {
    "@type": "Physician",
    name: "Dr. Aashima Chopra",
    url: `${site.url}/about`,
    medicalSpecialty: "Otolaryngologic",
  },
  publisher: {
    "@type": "MedicalClinic",
    name: site.name,
    url: site.url,
  },
  about: ["Snoring", "Obstructive sleep apnoea", "ENT assessment", "Polysomnography", "Sleep study"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: post.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export const Route = createFileRoute("/blogs/snoring-when-to-see-an-ent-specialist")({
  head: () => ({
    meta: [
      { title: `${post.title} | Dr. Aashima Chopra` },
      { name: "description", content: post.description },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: post.published },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: SnoringArticlePage,
});

function SnoringArticlePage() {
  const published = new Date(`${post.published}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <PageHero
        eyebrow="Patient Education"
        title={post.title}
        intro={post.description}
        crumbs={[{ label: "Blogs", to: "/blogs" }, { label: "Snoring & sleep" }]}
      />

      <article className="section bg-mist">
        <div className="shell max-w-3xl">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><CalendarDays className="size-4" /> {published}</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="size-4" /> {post.readingTime}</span>
            <span>Reviewed by Dr. Aashima Chopra, ENT Specialist</span>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <p className="text-base leading-8 text-foreground md:text-lg">{post.intro}</p>

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-navy">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-muted-foreground md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-2xl bg-navy p-6 text-navy-foreground">
              <h2 className="text-xl font-semibold">When a sleep study may be useful</h2>
              <p className="mt-3 text-sm leading-7 text-navy-foreground/80 md:text-base">
                If symptoms suggest obstructive sleep apnoea, a polysomnography (PSG) sleep study can measure breathing, oxygen levels and sleep patterns. At ENT Care Clinic, the findings are interpreted together with a detailed ENT and airway assessment to guide the next step.
              </p>
              <Link to="/services/snoring-sleep-apnea" className="mt-5 inline-flex text-sm font-semibold text-teal hover:underline">
                Learn about snoring, sleep apnoea and PSG assessment
              </Link>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Frequently asked questions</h2>
              <div className="mt-5">
                <FaqList items={post.faqs} />
              </div>
            </section>

            <p className="mt-10 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">
              This article provides general patient education and is not a diagnosis or a substitute for an individual medical consultation. Seek urgent medical care for severe breathing difficulty or other emergency symptoms.
            </p>
          </div>
        </div>
      </article>

      <CtaBand title="Concerned about persistent snoring or disturbed sleep?" />
    </>
  );
}
