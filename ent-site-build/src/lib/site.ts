export const site = {
  name: "ENT Care Clinic",
  doctor: "Dr. Aashima Chopra",
  credentials: "MBBS, DNB (ENT) – Gold Medallist, MNAMS",
  tagline: "National Gold Medallist in ENT",
  phone: "+91-9999202000",
  phoneDial: "+919999202000",
  whatsapp: "919999202000",
  whatsappMessage:
    "Hello Dr. Aashima Chopra's ENT Care Clinic. I would like to book an ENT consultation.",
  email: "dr.aashimachopra@gmail.com",
  url: "https://nachopraent.com",
  address: "145, W Block, Greater Kailash I, New Delhi 110048",
  reviewsLink:
    "https://www.google.com/search?q=ent+care+clinic&oq=ent+care+clinic&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhivARjHARiABDIHCAIQABiABDIHCAMQABiABDINCAQQLhivARjHARiABDIHCAUQABiABDIHCAYQABiABDINCAcQLhivARjHARiABDIHCAgQABiABNIBCDE4MzlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dEt2SmJZbnByUVg2cDd6TFNNVGs2TmJjdWtPOXlVTlo5S096WEtOTTlNOFdLc1NTMFIyTzhWeFp3YWV3UXp0SFFQTjQ1UHBWemk5WWttZVIzNi1rMG11UU1qZUFqbFlnTGhaZlRvcHkxdFdfeFM0VmZNEhdNVmlhYXFlcE5fMk80LUVQcllXSGtRdxoiQURzcjlmUVpncnRBdHJtTWpCQ1Y2QWEzbjNiZWdGTU5BZxIEODA1MRoBMyoAMAA4AUAAGAAggofygA5KAhAC",
  mapsLink: "https://maps.app.goo.gl/TyLvvJjYVXNo5q6f6",
  mapsEmbed:
    "https://maps.google.com/maps?q=ENT%20Care%20Clinic%20Dr%20Aashima%20Chopra%20Greater%20Kailash%201%20New%20Delhi&z=15&output=embed",
  locality: "Greater Kailash-1, New Delhi",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Monday – Saturday", time: "6:00 PM – 8:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

/** Lightweight public profile headshot used in the recovered build because the Work export contained only an internal asset pointer. */
export const doctorProfileImage =
  "https://cdn.hexahealth.com/Image/webp/480x480/1711708020094-799647467.webp";

export const youtubeVideos = [
  { id: "wvouDTyADUM", href: "https://www.youtube.com/watch?v=wvouDTyADUM", label: "ENT education video by Dr. Aashima Chopra" },
  { id: "Ji1-IFxJua0", href: "https://www.youtube.com/watch?v=Ji1-IFxJua0", label: "ENT patient education video by Dr. Aashima Chopra" },
] as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blogs" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

/** Clinic sessions: Mon–Sat, 15-minute slots. Sunday closed. */
export const sessions = [
  { label: "Morning", start: "10:00", end: "14:00" },
  { label: "Evening", start: "18:00", end: "20:00" },
] as const;

export const patientReviews = [
  {
    name: "Aditi Rewariya",
    text: "I would definitely recommend Dr. Aashima Chopra to anyone looking for an experienced and caring ENT specialist. Thank you, doctor, for making my treatment experience comfortable, smooth and reassuring.",
  },
  {
    name: "Nirbhay Rana",
    text: "Dr. Aashima Chopra is an exceptional ENT specialist. She diagnosed the issue accurately and explained everything very clearly. Her clinic is clean and well maintained, and the staff is very polite. Highly recommended.",
  },
  {
    name: "Bhawna Manral",
    text: "The doctor was very kind and explained everything to me in detail. Very good service.",
  },
] as const;

function toMinutes(value: string) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function toLabel(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export type Slot = { value: string; label: string; session: string };

export function slotsForSession(session: (typeof sessions)[number]): Slot[] {
  const out: Slot[] = [];
  for (let t = toMinutes(session.start); t < toMinutes(session.end); t += 15) {
    const h = String(Math.floor(t / 60)).padStart(2, "0");
    const m = String(t % 60).padStart(2, "0");
    out.push({ value: `${h}:${m}:00`, label: toLabel(t), session: session.label });
  }
  return out;
}

export function isClinicOpen(date: Date) {
  return date.getDay() !== 0;
}
