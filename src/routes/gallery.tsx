import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, PlayCircle } from "lucide-react";
import award from "@/assets/award-original.webp";
import clinicAllergyTesting from "@/assets/clinic-allergy-testing.webp";
import earSurgery from "@/assets/ear-surgery.webp";
import fessImage from "@/assets/fess-sinus-endoscopy-optimized.webp";
import sinusSurgery from "@/assets/sinus-surgery.webp";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { doctorProfileImage, site, youtubeVideos } from "@/lib/site";

const title = "Clinic Gallery | ENT Care Clinic — Dr. Aashima Chopra, Delhi";
const description =
  "Clinic, doctor and ENT procedure images from ENT Care Clinic in Greater Kailash-1, Delhi, plus patient-education videos by Dr. Aashima Chopra.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/gallery` },
      { property: "og:image", content: doctorProfileImage },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/gallery` }],
  }),
  component: Gallery,
});

const clinicImages = [
  {
    src: clinicAllergyTesting,
    alt: "Clinical allergy assessment at ENT Care Clinic",
    width: 640,
    height: 640,
  },
  {
    src: fessImage,
    alt: "Clean illustrative view of functional endoscopic sinus surgery (FESS)",
    width: 1200,
    height: 675,
  },
];

const doctorImages = [
  { src: doctorProfileImage, alt: "ENT specialist profile photograph", width: 480, height: 480 },
  { src: award, alt: "ENT award and professional recognition photograph", width: 640, height: 640 },
];

const procedureImages = [
  { src: earSurgery, alt: "Endoscopic ear surgery instruments in an operating theatre", width: 1280, height: 860 },
  { src: sinusSurgery, alt: "Endoscopic sinus surgery equipment in an operating theatre", width: 1280, height: 860 },
  { src: fessImage, alt: "Functional endoscopic sinus surgery (FESS) illustration", width: 1200, height: 675 },
];

function Grid({ items }: { items: { src: string; alt: string; width: number; height: number }[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((img) => (
        <figure key={`${img.src}-${img.alt}`} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            width={img.width}
            height={img.height}
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
          <figcaption className="px-4 py-3 text-xs text-muted-foreground">{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="ENT Care Clinic Gallery"
        intro="Clinic, doctor and procedure images, together with ENT patient-education videos from Dr. Aashima Chopra."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="01 — Clinic" title="Clinical care & facilities" />
          <Grid items={clinicImages} />
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading eyebrow="02 — The Doctor" title="Profile & professional recognition" />
          <Grid items={doctorImages} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="03 — Procedures"
            title="Endoscopic ENT surgery"
            intro="Images illustrating endoscopic techniques used for selected ear and sinus conditions."
          />
          <Grid items={procedureImages} />
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="04 — Videos"
            title="ENT education by Dr. Aashima Chopra"
            intro="The videos open on YouTube. Keeping them as lightweight links avoids loading heavy video players until you choose to watch."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {youtubeVideos.map((video, index) => (
              <a
                key={video.id}
                href={video.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex min-h-48 flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="grid size-12 place-items-center rounded-full bg-navy text-teal">
                  <PlayCircle className="size-6" />
                </span>
                <span className="mt-8">
                  <span className="block font-display text-lg font-semibold text-navy">ENT patient education video {index + 1}</span>
                  <span className="mt-2 flex items-center gap-2 text-sm text-primary">
                    Watch on YouTube <ExternalLink className="size-4" />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
