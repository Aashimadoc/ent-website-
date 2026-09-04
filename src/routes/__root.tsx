import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";
import { doctorProfileImage, site, youtubeVideos } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please refresh the page or return to the home page.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "ENT Care Clinic — Dr. Aashima Chopra",
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#clinic` },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${site.url}/#clinic`,
      name: site.name,
      description:
        "ENT clinic in Greater Kailash-1, New Delhi offering adult and paediatric ENT care, FESS, endoscopic ear surgery, allergy testing, SLIT immunotherapy, snoring and sleep apnoea assessment, and PSG sleep studies.",
      url: site.url,
      image: doctorProfileImage,
      telephone: site.phone,
      email: site.email,
      areaServed: ["Greater Kailash", "South Delhi", "Delhi NCR"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "145, W Block",
        addressLocality: "Greater Kailash I",
        postalCode: "110048",
        addressRegion: "New Delhi",
        addressCountry: "IN",
      },
      hasMap: site.mapsLink,
      medicalSpecialty: "Otolaryngologic",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "18:00",
          closes: "20:00",
        },
      ],
      availableService: [
        "General ENT consultation",
        "Paediatric ENT care",
        "Functional endoscopic sinus surgery (FESS)",
        "Endoscopic ear surgery",
        "Ossiculoplasty",
        "Mastoidectomy",
        "Skin prick allergy testing",
        "SLIT immunotherapy",
        "Micro-laryngoscopic surgery (MLS)",
        "Snoring and sleep apnoea assessment",
        "Polysomnography (PSG) sleep study",
      ].map((name) => ({ "@type": "MedicalProcedure", name })),
      employee: { "@id": `${site.url}/#doctor` },
      sameAs: [site.reviewsLink, ...youtubeVideos.map((video) => video.href)],
    },
    {
      "@type": "Physician",
      "@id": `${site.url}/#doctor`,
      name: site.doctor,
      image: doctorProfileImage,
      url: `${site.url}/about`,
      medicalSpecialty: "Otolaryngologic",
      honorificSuffix: "MBBS, DNB (ENT), MNAMS",
      worksFor: { "@id": `${site.url}/#clinic` },
      knowsAbout: [
        "Ear, nose and throat conditions",
        "Functional endoscopic sinus surgery",
        "Endoscopic ear surgery",
        "Ossiculoplasty",
        "Mastoidectomy",
        "Allergy testing and immunotherapy",
        "Voice and hoarseness evaluation",
        "Snoring and obstructive sleep apnoea",
        "Polysomnography sleep study",
        "Paediatric ENT",
      ],
      sameAs: youtubeVideos.map((video) => video.href),
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "ENT Care Clinic — Dr. Aashima Chopra, ENT Specialist in Delhi" },
      {
        name: "description",
        content:
          "Dr. Aashima Chopra, MBBS, DNB (ENT) Gold Medallist, MNAMS — comprehensive ENT care, FESS, endoscopic ear surgery, allergy testing and sleep-apnoea assessment in Greater Kailash-1, Delhi.",
      },
      { name: "author", content: site.doctor },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "ENT Care Clinic — Dr. Aashima Chopra" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: doctorProfileImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#12263f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "dns-prefetch", href: "https://cdn.hexahealth.com" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
