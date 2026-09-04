export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  published: string;
  readingTime: string;
  draft: boolean;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  related: { label: string; to: string }[];
};

export const blogCategories = [
  "Ear Health",
  "Sinus & Allergy",
  "Pediatric ENT",
  "ENT Surgery",
  "Hearing & Balance",
  "General ENT",
];

const author = "Dr. Aashima Chopra";
export const blogAuthor = author;

export const blogPosts: BlogPost[] = [
  {
    slug: "when-is-endoscopic-sinus-surgery-recommended",
    title: "When Is Endoscopic Sinus Surgery Recommended?",
    category: "ENT Surgery",
    description:
      "Endoscopic sinus surgery is usually considered when sinus symptoms persist despite medical treatment. Here is how that decision is normally made.",
    published: "2026-02-10",
    readingTime: "5 min read",
    draft: true,
    intro:
      "Most sinus problems settle with medical treatment. Surgery is considered only for a smaller group of patients whose symptoms continue despite appropriate therapy, or whose scans show disease that medicines are unlikely to clear.",
    sections: [
      {
        heading: "Medical treatment comes first",
        body: [
          "Chronic sinusitis is usually managed initially with nasal steroid sprays, saline rinses, allergy treatment and, where indicated, a course of antibiotics.",
          "A reasonable trial of medical treatment, taken correctly and for long enough, is an important step before any surgical discussion.",
        ],
      },
      {
        heading: "Signs surgery may be discussed",
        body: [
          "Persistent nasal blockage, facial pressure, reduced sense of smell or repeated sinus infections that return soon after treatment.",
          "Nasal polyps that continue to obstruct the nose, or CT findings showing blocked sinus drainage pathways.",
          "Whether surgery is suitable depends on the individual condition, scan findings and overall health.",
        ],
      },
      {
        heading: "What the decision involves",
        body: [
          "A nasal endoscopy in clinic and, where needed, a CT scan of the sinuses help clarify the anatomy and extent of disease.",
          "The aim of surgery is to restore sinus ventilation and drainage, and to allow medical treatment to work better afterwards.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is endoscopic sinus surgery done through the nose?",
        a: "Yes. The procedure is performed with an endoscope passed through the nostrils, so there are no external facial cuts.",
      },
      {
        q: "Will surgery cure my sinus problem permanently?",
        a: "Surgery aims to improve drainage and symptoms. Ongoing medical treatment is often still needed, particularly where allergy or polyps are involved.",
      },
    ],
    related: [
      { label: "Endoscopic Sinus Surgery", to: "/services/endoscopic-sinus-surgery" },
      { label: "All ENT Services", to: "/services" },
    ],
  },
  {
    slug: "what-is-endoscopic-ear-surgery",
    title: "What Is Endoscopic Ear Surgery?",
    category: "ENT Surgery",
    description:
      "Endoscopic ear surgery uses a fine endoscope through the ear canal, avoiding an external cut in selected patients. Here is what it involves.",
    published: "2026-02-04",
    readingTime: "4 min read",
    draft: true,
    intro:
      "Endoscopic ear surgery is a minimally invasive approach in which surgery is performed through the natural ear canal using a high-definition endoscope, rather than through a cut behind the ear.",
    sections: [
      {
        heading: "How the approach works",
        body: [
          "A narrow endoscope is passed along the ear canal, giving a wide, magnified view of the eardrum and middle ear.",
          "Because the endoscope can see around structures, some procedures can be completed without an external incision in suitable cases.",
        ],
      },
      {
        heading: "Conditions that may be treated",
        body: [
          "Eardrum perforations, selected chronic middle ear disease and certain hearing-bone problems may be managed endoscopically, depending on the findings.",
          "Suitability is decided after examination and, where required, a hearing test and imaging.",
        ],
      },
      {
        heading: "Possible advantages in selected patients",
        body: [
          "Avoiding an external scar, a smaller area of surgery and a clear view of areas that are difficult to see with a microscope alone.",
          "Advantages vary between individuals and are not guaranteed for every condition.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is endoscopic ear surgery suitable for everyone?",
        a: "No. It is used in selected patients, depending on the condition, the anatomy of the ear and surgical suitability.",
      },
      {
        q: "Will there be a visible scar?",
        a: "In a fully endoscopic approach the surgery is performed through the ear canal, so there is no external cut behind the ear.",
      },
    ],
    related: [
      { label: "Endoscopic Ear Surgery", to: "/services/endoscopic-ear-surgery" },
      { label: "Book an Appointment", to: "/appointment" },
    ],
  },
  {
    slug: "causes-of-chronic-sinusitis",
    title: "Causes of Chronic Sinusitis",
    category: "Sinus & Allergy",
    description:
      "Chronic sinusitis rarely has a single cause. Allergy, structural narrowing, polyps and infection often overlap.",
    published: "2026-01-28",
    readingTime: "4 min read",
    draft: true,
    intro:
      "Sinusitis is called chronic when symptoms such as blockage, discharge, facial pressure or reduced smell continue for around twelve weeks or more.",
    sections: [
      {
        heading: "Common contributing factors",
        body: [
          "Allergic rhinitis, which keeps the nasal lining swollen and the sinus openings narrowed.",
          "Structural factors such as a deviated nasal septum or narrow drainage pathways.",
          "Nasal polyps, repeated infections, and irritants such as smoke and pollution.",
        ],
      },
      {
        heading: "Why identifying the cause matters",
        body: [
          "Treatment is more effective when the underlying driver is addressed, rather than treating each infection in isolation.",
          "Nasal endoscopy, allergy assessment and imaging help build an accurate picture.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can chronic sinusitis be treated without surgery?",
        a: "Often yes. Many patients improve with nasal sprays, saline rinses and allergy management used consistently.",
      },
    ],
    related: [
      { label: "Endoscopic Sinus Surgery", to: "/services/endoscopic-sinus-surgery" },
      { label: "Nose & Sinus Services", to: "/services" },
    ],
  },
  {
    slug: "when-should-you-see-an-ent-specialist",
    title: "When Should You See an ENT Specialist?",
    category: "General ENT",
    description:
      "Symptoms that keep coming back, or that last longer than expected, are worth an ENT opinion. Here are common reasons to book.",
    published: "2026-01-20",
    readingTime: "3 min read",
    draft: true,
    intro:
      "Many ear, nose and throat symptoms settle on their own. An ENT opinion helps when symptoms persist, recur, or affect sleep, hearing or daily life.",
    sections: [
      {
        heading: "Reasons to book an assessment",
        body: [
          "Hearing loss, ear discharge or ear pain that does not settle.",
          "Nasal blockage, repeated sinus infections or loss of smell.",
          "Hoarseness lasting more than three weeks, difficulty swallowing, or loud habitual snoring.",
          "Any lump in the neck, or one-sided symptoms in the ear or nose, should be assessed promptly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a referral?",
        a: "You can book a consultation directly through this website, by phone or on WhatsApp.",
      },
    ],
    related: [
      { label: "Our Services", to: "/services" },
      { label: "Contact the Clinic", to: "/contact" },
    ],
  },
  {
    slug: "ear-infections-in-children",
    title: "Ear Infections in Children",
    category: "Pediatric ENT",
    description:
      "Repeated ear infections in children can affect hearing and speech. Here is what parents should watch for.",
    published: "2026-01-12",
    readingTime: "4 min read",
    draft: true,
    intro:
      "Ear infections are common in early childhood. Most resolve, but repeated episodes or persistent fluid behind the eardrum deserve assessment.",
    sections: [
      {
        heading: "What parents may notice",
        body: [
          "Ear pain, disturbed sleep, fever, tugging at the ear, or a discharge from the ear.",
          "Turning up the volume, not responding when called, or delayed speech may point to reduced hearing.",
        ],
      },
      {
        heading: "How it is assessed",
        body: [
          "Examination of the eardrum, and where needed a hearing test, helps decide between observation, medication or a procedure.",
          "Enlarged adenoids are often part of the picture in children with recurrent ear problems.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do all ear infections need antibiotics?",
        a: "No. Many settle with observation and pain relief. Antibiotics are used selectively, based on the child's age and findings.",
      },
    ],
    related: [
      { label: "Pediatric ENT Services", to: "/services" },
      { label: "Book an Appointment", to: "/appointment" },
    ],
  },
  {
    slug: "deviated-nasal-septum-symptoms-treatment",
    title: "Deviated Nasal Septum: Symptoms & Treatment",
    category: "Sinus & Allergy",
    description:
      "A deviated septum can block one or both sides of the nose. Treatment depends on how much it affects breathing.",
    published: "2026-01-05",
    readingTime: "3 min read",
    draft: true,
    intro:
      "The septum divides the two sides of the nose. A deviation is common and often harmless, but a significant deviation can obstruct airflow.",
    sections: [
      {
        heading: "Symptoms to look out for",
        body: [
          "Persistent blockage on one side, mouth breathing, disturbed sleep, recurrent sinus infection or nosebleeds.",
        ],
      },
      {
        heading: "Treatment options",
        body: [
          "Medical treatment for associated allergy or swelling is often the first step.",
          "Where obstruction remains significant, septal surgery may be discussed, depending on symptoms and examination findings.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a deviated septum always need surgery?",
        a: "No. Surgery is considered only when the deviation causes meaningful symptoms that do not improve with medical treatment.",
      },
    ],
    related: [
      { label: "Nose & Sinus Services", to: "/services" },
      { label: "Endoscopic Sinus Surgery", to: "/services/endoscopic-sinus-surgery" },
    ],
  },
  {
    slug: "understanding-nasal-polyps",
    title: "Understanding Nasal Polyps",
    category: "Sinus & Allergy",
    description:
      "Nasal polyps are soft, non-cancerous swellings of the nasal lining that can block the nose and reduce smell.",
    published: "2025-12-22",
    readingTime: "4 min read",
    draft: true,
    intro:
      "Polyps develop from long-standing inflammation of the nasal and sinus lining. They are usually managed medically first, with surgery reserved for selected cases.",
    sections: [
      {
        heading: "Typical symptoms",
        body: [
          "Blocked nose that does not clear, reduced or absent sense of smell, post-nasal drip and repeated sinus infections.",
        ],
      },
      {
        heading: "Management",
        body: [
          "Nasal steroid sprays or drops, saline rinses and treatment of associated allergy or asthma.",
          "Endoscopic surgery may be considered when polyps remain obstructive despite medical treatment. Polyps can recur, so follow-up treatment matters.",
        ],
      },
    ],
    faqs: [
      { q: "Are nasal polyps cancerous?", a: "Typical nasal polyps are benign, but any one-sided polyp should always be assessed." },
    ],
    related: [
      { label: "Endoscopic Sinus Surgery", to: "/services/endoscopic-sinus-surgery" },
      { label: "Book an Appointment", to: "/appointment" },
    ],
  },
  {
    slug: "snoring-when-to-see-an-ent-specialist",
    title: "Snoring: When Should You See an ENT Specialist?",
    category: "General ENT",
    description:
      "Occasional snoring is common. Loud, habitual snoring with daytime tiredness deserves an ENT assessment.",
    published: "2025-12-15",
    readingTime: "3 min read",
    draft: true,
    intro:
      "Snoring happens when airflow causes vibration in a narrowed upper airway. The site of narrowing can be in the nose, palate, tonsils or tongue base.",
    sections: [
      {
        heading: "Warning signs",
        body: [
          "Witnessed pauses in breathing, gasping during sleep, morning headaches, or excessive daytime sleepiness.",
          "In children, loud snoring with mouth breathing often relates to adenoids or tonsils.",
        ],
      },
      {
        heading: "What an assessment involves",
        body: [
          "Nasal and throat examination, endoscopic airway assessment, and where indicated a referral for a sleep study.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is snoring always sleep apnoea?",
        a: "No, but persistent loud snoring with daytime sleepiness should be evaluated so that sleep apnoea is not missed.",
      },
    ],
    related: [
      { label: "Throat Services", to: "/services" },
      { label: "Contact the Clinic", to: "/contact" },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
