import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Ear, Wind } from "lucide-react";
import { Card, CtaBand, PageHero } from "@/components/site/blocks";
import { site } from "@/lib/site";

const title = "ENT Health Blog | Dr. Aashima Chopra, ENT Specialist Delhi";
const description = "Patient-friendly ENT information from Dr. Aashima Chopra about ear, nose, sinus, throat, snoring and pediatric ENT concerns.";

export const Route = createFileRoute("/blogs")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }], links: [{ rel: "canonical", href: `${site.url}/blogs` }] }),
  component: BlogsPage,
});

const topics = [
  { icon: Ear, title: "Ear problems", body: "Practical information on ear infections, hearing concerns, wax, tinnitus and common ear symptoms.", to: "/services/ent-care" as const },
  { icon: Wind, title: "Nose & sinus health", body: "Understand nasal blockage, allergy, chronic sinus symptoms and when an ENT assessment may help.", to: "/services/endoscopic-sinus-surgery" as const },
  { icon: BookOpen, title: "Snoring & sleep", body: "Patient education on habitual snoring, sleep-disordered breathing and ENT evaluation of the airway.", to: "/services/snoring-sleep-apnea" as const },
];

function BlogsPage() {
  return <>
    <PageHero eyebrow="Patient Education" title="ENT Health & Patient Guides" intro="Clear, evidence-informed information to help you understand common ENT symptoms and treatment options. This content is educational and cannot replace an individual medical consultation." crumbs={[{ label: "Blogs" }]} />
    <section className="section bg-mist"><div className="shell grid gap-6 md:grid-cols-3">{topics.map((t)=><Card key={t.title}><t.icon className="size-8 text-primary"/><h2 className="mt-5 text-xl font-semibold text-navy">{t.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p><Link to={t.to} className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">Read related information</Link></Card>)}</div></section>
    <CtaBand />
  </>;
}
