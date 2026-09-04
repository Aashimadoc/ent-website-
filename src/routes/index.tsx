import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Baby, ClipboardCheck, Ear, ExternalLink, HeartPulse, Microscope, ShieldCheck, Star, Stethoscope, Wind } from "lucide-react";
import clinicAllergyTesting from "@/assets/clinic-allergy-testing.webp";
import earSurgery from "@/assets/ear-surgery.webp";
import sinusSurgery from "@/assets/sinus-surgery.webp";
import { Card, CtaBand, SectionHeading } from "@/components/site/blocks";
import { whyChoose } from "@/lib/services";
import { doctorProfileImage, patientReviews, site, whatsappHref } from "@/lib/site";

const title = "ENT Specialist in Greater Kailash 1, Delhi | Dr. Aashima Chopra";
const description =
  "Consult Dr. Aashima Chopra, MBBS, DNB (ENT) Gold Medallist, MNAMS, for adult and pediatric ENT care, endoscopic ear surgery and sinus surgery in Greater Kailash-1, New Delhi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: site.url },
      { property: "og:image", content: doctorProfileImage },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: site.url }],
  }),
  component: Home,
});

const credentials = [
  "MBBS",
  "DNB ENT",
  "Gold Medallist",
  "MNAMS",
  "Advanced Endoscopic ENT Surgery",
];

const specialities = [
  {
    number: "01",
    icon: Ear,
    title: "Endoscopic Scarless Ear Surgery",
    body: "Advanced endoscopic techniques for selected ear conditions, using a minimally invasive approach through the ear canal.",
    cta: "Learn More",
    to: "/services/endoscopic-ear-surgery" as const,
    image: earSurgery,
    alt: "Endoscopic ear surgery instruments prepared in an ENT clinic",
  },
  {
    number: "02",
    icon: Wind,
    title: "Endoscopic Sinus Surgery",
    body: "Endoscopic management of chronic sinusitis, nasal blockage, polyps and related sinus conditions.",
    cta: "Learn More",
    to: "/services/endoscopic-sinus-surgery" as const,
    image: sinusSurgery,
    alt: "Endoscopic sinus surgery monitor in a modern operating theatre",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Comprehensive ENT Care",
    body: "Diagnosis and treatment of common and complex ear, nose and throat conditions for adults and children.",
    cta: "View All Services",
    to: "/services/ent-care" as const,
    image: null,
    alt: "",
  },
];

const whyIcons = [Award, Microscope, HeartPulse, ClipboardCheck, Baby, ShieldCheck];

function Home() {
  return (
    <>
      <section className="surface-navy relative overflow-hidden">
        <div className="shell grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <p className="eyebrow">Welcome to ENT Care Clinic</p>
            <h1 className="mt-4 font-display text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl">
              {site.doctor}
              <span className="mt-3 block text-base font-medium text-teal sm:text-lg">{site.credentials}</span>
            </h1>
            <p className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                <Award className="size-3.5" /> National Gold Medallist in ENT
              </span>
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-navy-foreground/75 md:text-base">
              Providing advanced and compassionate care for ear, nose and throat conditions, with a special focus on
              endoscopic ear surgery, endoscopic sinus surgery and minimally invasive ENT procedures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="w-full rounded-full bg-teal px-6 py-3.5 text-center sm:w-auto text-xs font-semibold tracking-[0.1em] text-navy uppercase shadow-card transition-transform hover:-translate-y-0.5"
              >
                Book an Appointment
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full rounded-full border border-teal/60 px-6 py-3.5 text-center sm:w-auto text-xs font-semibold tracking-[0.1em] text-teal uppercase transition-colors hover:bg-teal hover:text-navy"
              >
                WhatsApp +91 99992 02000
              </a>
              <Link
                to="/services"
                className="w-full rounded-full border border-navy-foreground/30 px-6 py-3.5 text-center sm:w-auto text-xs font-semibold tracking-[0.1em] uppercase transition-colors hover:border-teal hover:text-teal"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute inset-x-6 top-6 bottom-0 rounded-[2.5rem] bg-teal/15 blur-2xl" aria-hidden />
            <img
              src={doctorProfileImage}
              alt="Dr. Aashima Chopra, ENT specialist and DNB ENT Gold Medallist, at her Delhi clinic"
              width={480}
              height={480}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative aspect-square w-full rounded-[2rem] object-cover shadow-float"
            />
          </div>
        </div>

        <div className="border-t border-navy-foreground/10">
          <div className="shell flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[11px] font-semibold tracking-[0.14em] text-navy-foreground/70 uppercase sm:text-xs">
            {credentials.map((c, i) => (
              <span key={c} className="flex items-center gap-6">
                {c}
                {i < credentials.length - 1 ? <span className="hidden text-teal sm:inline">|</span> : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Specialities"
            title="Advanced ENT Surgical Care"
            intro="Focused surgical expertise, supported by careful diagnosis and honest advice about whether a procedure is right for you."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {specialities.map((s) => (
              <Card key={s.number} className="flex flex-col">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1280}
                    height={860}
                    className="mb-6 aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="mb-6 grid aspect-[3/2] w-full place-items-center rounded-2xl bg-navy">
                    <s.icon className="size-12 text-teal" />
                  </div>
                )}
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-primary">{s.number}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to={s.to}
                  className="mt-5 inline-flex text-xs font-semibold tracking-[0.1em] text-primary uppercase hover:underline"
                >
                  {s.cta}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={doctorProfileImage}
              alt="ENT specialist profile photograph"
              loading="lazy"
              decoding="async"
              width={480}
              height={480}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
            />
            <img
              src={clinicAllergyTesting}
              alt="Clinical allergy assessment at ENT Care Clinic"
              loading="lazy"
              decoding="async"
              width={640}
              height={640}
              className="mt-8 aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About"
              title="Meet Dr. Aashima Chopra"
              intro="MBBS, DNB (ENT) – Gold Medallist, MNAMS. An ENT surgeon with a particular interest in endoscopic ear and sinus surgery, and in explaining every option clearly before treatment begins."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Dr. Aashima Chopra's practice combines careful diagnosis, empathy and compassionate communication with minimally invasive surgical technique. Each
              consultation starts with a thorough examination — endoscopic where needed — so that the plan you leave
              with is based on what is actually causing your symptoms.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Medical management is offered first wherever it is appropriate. When surgery is the right step, the
              approach, expected recovery and alternatives are discussed in plain language.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex rounded-full bg-navy px-6 py-3 text-xs font-semibold tracking-[0.1em] text-navy-foreground uppercase"
            >
              Read Full Profile
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title="Credentials you can check, care you can feel"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <Card key={item.title}>
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="patient-reviews-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What patients say about their care"
            intro="Selected five-star feedback from patients. Spelling and punctuation have been lightly edited for readability without changing the meaning."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {patientReviews.map((review) => (
              <Card key={review.name} className="flex flex-col">
                <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="size-4" fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">“{review.text}”</blockquote>
                <p className="mt-5 font-display text-sm font-semibold text-navy">{review.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">Google review</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={site.reviewsLink} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold tracking-[0.1em] text-navy-foreground uppercase">
              View all Google reviews <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
