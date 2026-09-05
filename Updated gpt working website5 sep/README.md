# ENT Care Clinic — Dr. Aashima Chopra

Production-oriented website source for ENT Care Clinic, Greater Kailash I, New Delhi.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The site uses TanStack Start + React + Vite + Tailwind CSS. Public pages are configured for prerendering so search engines receive rendered HTML and patients get fast first loads.

## Main editable files

- Clinic/contact details, WhatsApp number, review link, reviews, YouTube links: `src/lib/site.ts`
- Services and treatment descriptions: `src/lib/services.ts`
- Home page: `src/routes/index.tsx`
- About: `src/routes/about.tsx`
- Appointment form and 15-minute slots: `src/routes/appointment.tsx` and `src/lib/site.ts`
- Gallery/videos: `src/routes/gallery.tsx`
- Reviews: `src/routes/reviews.tsx`
- SEO/structured data: `src/routes/__root.tsx`
- AI/crawler summary: `public/llms.txt`
- Crawler rules: `public/robots.txt`
- Sitemap: `public/sitemap.xml`

## Appointment flow

The appointment form does not store patient data on a server. It collects the patient's preferred date/time and opens a pre-filled WhatsApp message to `+91 99992 02000`. Slots are generated in 15-minute intervals for the configured clinic sessions; Sundays are blocked.

## Images and performance

Local procedure/gallery images are WebP and compressed. YouTube videos are lightweight outbound cards rather than embedded players, so YouTube scripts do not load on the gallery page. External Google fonts were removed in favor of system fonts.

The recovered Work export contained pointers, rather than image bytes, for several original clinic images. The source therefore uses locally recovered/cropped clinic images where available and a lightweight 480×480 WebP profile-photo URL for the doctor portrait. Replace `doctorProfileImage` in `src/lib/site.ts` with a local imported image after adding the original raw headshot to `src/assets/` if you want the site to have zero external image dependency.

## SEO and AI discoverability

The site includes:

- server-rendered/prerendered public pages
- unique titles and meta descriptions
- canonical URLs
- MedicalClinic, Physician and WebSite JSON-LD
- explicit service/entity descriptions
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- crawlable text rather than text embedded in images

These steps improve crawlability and entity clarity but cannot guarantee placement in Google rankings or AI-generated answers.

## Deployment

Keep the code in GitHub and connect the repository to a TanStack Start compatible host such as Vercel or Netlify. Point your custom domain to the host after deployment. No Supabase/database environment variables are required for the public site in this build.
