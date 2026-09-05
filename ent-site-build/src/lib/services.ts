export type ServiceGroup = {
  id: string;
  title: string;
  intro: string;
  items: { name: string; description: string; to?: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ear",
    title: "Ear",
    intro:
      "Assessment and treatment of hearing, balance and ear disease, including advanced endoscopic ear surgery in selected patients.",
    items: [
      {
        name: "Endoscopic Ear Surgery",
        description:
          "Minimally invasive, through-the-ear-canal approach for selected ear conditions.",
        to: "/services/endoscopic-ear-surgery",
      },
      { name: "Ear Infection", description: "Diagnosis and treatment of acute and recurrent ear infections." },
      { name: "Chronic Ear Disease", description: "Long-standing discharge, perforations and related ear disease." },
      { name: "Ossiculoplasty", description: "Reconstruction of the tiny hearing bones in the middle ear to improve sound conduction in suitable patients." },
      { name: "Mastoidectomy", description: "Surgery to clear chronic infection or cholesteatoma from the mastoid, with hearing preservation or reconstruction where possible." },
      { name: "Hearing Problems", description: "Hearing assessment and management planning for reduced hearing." },
      { name: "Eardrum Problems", description: "Perforations, retractions and eardrum-related hearing loss." },
      { name: "Ear Wax", description: "Safe, microscope- or endoscope-assisted ear wax removal." },
      { name: "Tinnitus", description: "Evaluation of ringing or buzzing in the ears and management options." },
      { name: "Vertigo", description: "Assessment of dizziness and balance disturbance of ear origin." },
      { name: "Pediatric Ear Problems", description: "Ear care for children, including recurrent infections and glue ear." },
    ],
  },
  {
    id: "nose",
    title: "Nose & Sinuses",
    intro:
      "Care for blocked noses, sinus disease and allergy, from medical management to endoscopic sinus surgery when indicated.",
    items: [
      {
        name: "Functional Endoscopic Sinus Surgery (FESS)",
        description: "Minimally invasive, through-the-nostril surgery for chronic sinus disease and nasal polyps.",
        to: "/services/endoscopic-sinus-surgery",
      },
      { name: "Chronic Sinusitis", description: "Persistent facial pressure, discharge and recurrent sinus infection." },
      { name: "Nasal Blockage", description: "Evaluation of long-standing nasal obstruction and mouth breathing." },
      { name: "Nasal Polyps", description: "Diagnosis and treatment planning for nasal polyposis." },
      { name: "Deviated Nasal Septum", description: "Assessment of septal deviation and its effect on breathing." },
      { name: "Allergic Rhinitis", description: "Allergy-related sneezing, congestion and post-nasal drip." },
      { name: "Allergy Testing & SLIT Immunotherapy", description: "Skin prick testing at the clinic, with sublingual immunotherapy (SLIT) considered for suitable allergies." },
      { name: "Nosebleeds", description: "Assessment and management of recurrent epistaxis." },
      { name: "Nasal Problems", description: "Loss of smell, crusting and other nasal complaints." },
    ],
  },
  {
    id: "throat",
    title: "Throat",
    intro: "Treatment for sore throats, voice change, tonsil and adenoid disease, snoring and sleep-related ENT concerns.",
    items: [
      { name: "Tonsillitis", description: "Acute and recurrent tonsil infection, in adults and children." },
      { name: "Tonsil Surgery", description: "Surgical treatment when tonsillitis is recurrent or obstructive." },
      { name: "Adenoid Problems", description: "Adenoid enlargement causing blocked nose, snoring or ear problems." },
      { name: "Throat Infections", description: "Persistent throat pain, discomfort and irritation." },
      { name: "Voice Problems", description: "Hoarseness and voice change requiring laryngeal assessment." },
      { name: "Micro-laryngoscopic Surgery (MLS)", description: "Microscope-assisted examination and treatment of selected vocal-cord lesions causing persistent hoarseness." },
      { name: "Snoring", description: "Airway assessment for habitual snoring." },
      { name: "Sleep-related ENT Problems", description: "ENT evaluation for disturbed breathing during sleep." },
    ],
  },
  {
    id: "sleep",
    title: "Snoring & Sleep Apnea",
    intro:
      "Focused ENT assessment of the nose, palate, tonsils and tongue base for habitual snoring and suspected obstructive sleep apnoea, with a stepwise treatment plan.",
    items: [
      {
        name: "Snoring & Sleep Apnea Care",
        description: "Thorough airway assessment and polysomnography (PSG sleep study), which can be arranged for suitable patients, to guide treatment.",
        to: "/services/snoring-sleep-apnea",
      },
      { name: "Habitual Snoring", description: "Identifying where the airway narrows and what can be done about it." },
      { name: "Obstructive Sleep Apnoea (OSA)", description: "Assessment for breathing pauses, gasping and daytime sleepiness." },
      { name: "PSG Sleep Study", description: "Polysomnography to measure breathing, oxygen levels and sleep patterns, followed by clinical interpretation and a personalised plan." },
      { name: "Nasal Obstruction in Sleep", description: "Septal deviation, turbinate enlargement and allergy affecting night-time breathing." },
      { name: "Palate & Tonsil Obstruction", description: "Enlarged tonsils or a bulky palate narrowing the throat during sleep." },
      { name: "Pediatric Sleep-Disordered Breathing", description: "Snoring, mouth breathing and restless sleep in children from adenoids or tonsils." },
      { name: "CPAP Tolerance Problems", description: "ENT review when nasal blockage makes CPAP therapy difficult to use." },
    ],
  },
  {

    id: "pediatric",
    title: "Pediatric ENT",
    intro: "Gentle, child-friendly ENT assessment with treatment plans explained clearly to parents.",
    items: [
      { name: "Recurrent Ear Infections", description: "Repeated ear infection and fluid behind the eardrum." },
      { name: "Adenoids", description: "Blocked nose, snoring and mouth breathing in children." },
      { name: "Tonsils", description: "Recurrent tonsillitis and obstructive tonsil enlargement." },
      { name: "Hearing Assessment", description: "Hearing evaluation in children and follow-up planning." },
      { name: "Pediatric Nasal Problems", description: "Allergy, congestion and nasal obstruction in children." },
      { name: "Pediatric Throat Problems", description: "Throat infections and voice concerns in children." },
    ],
  },
];

export const whyChoose = [
  {
    title: "Gold Medallist in ENT",
    body: "DNB (ENT) Gold Medallist and MNAMS — training recognised at national level.",
  },
  {
    title: "Advanced Endoscopic Surgery",
    body: "Special interest in endoscopic ear surgery and endoscopic sinus surgery.",
  },
  {
    title: "Patient-Centred Care",
    body: "Time to explain your diagnosis, your options and what to expect next.",
  },
  {
    title: "Evidence-Based Treatment",
    body: "Recommendations grounded in current ENT practice, not one-size-fits-all protocols.",
  },
  {
    title: "Adult & Pediatric ENT",
    body: "Care for the whole family, from young children to senior patients.",
  },
  {
    title: "Personalised Treatment Plans",
    body: "Medical management first where appropriate; surgery only when it is the right step.",
  },
];
