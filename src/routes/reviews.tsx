import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Star } from "lucide-react";
import { Card, CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { patientReviews, site } from "@/lib/site";

const title = "Patient Reviews | Dr. Aashima Chopra ENT Specialist Delhi";
const description =
  "Read selected five-star patient feedback for Dr. Aashima Chopra and ENT Care Clinic in Greater Kailash-1, New Delhi, and open the clinic's Google reviews.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/reviews` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/reviews` }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Feedback"
        title="Google Reviews"
        intro="Selected five-star feedback from patients, with light spelling and punctuation edits for readability while preserving the original meaning."
        crumbs={[{ label: "Reviews" }]}
      />

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Five-star patient feedback"
            title="What patients say about their care"
            intro="For the latest reviews and the full review history, use the link to the clinic's Google listing below."
            align="center"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {patientReviews.map((review) => (
              <Card key={review.name} className="flex flex-col">
                <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="size-4" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{review.text}”
                </blockquote>
                <p className="mt-5 font-display text-sm font-semibold text-navy">{review.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">Google review</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={site.reviewsLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              View all Google Reviews <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
