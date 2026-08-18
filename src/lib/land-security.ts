// Copy for /land-security. No prices here — plans link to /pricing.

export const landSecurityHero = {
  eyebrow: "Land Security",
  h1: "Protect your land from anywhere",
  body:
    "Your man in the city, for the land you left behind. A trained field representative visits your plot, checks boundaries, fences, and neighbours, and sends you geo-tagged photo and video evidence — so you know what is happening on your land without flying in.",
};

export const landSecurityServices = [
  { name: "Physical land inspection", blurb: "A field representative walks your plot, corner to corner, and records what is actually there on the day." },
  { name: "Boundary monitoring", blurb: "Boundary stones and fence lines are located, photographed, and compared with the previous visit." },
  { name: "Encroachment detection", blurb: "Any structure, material, cultivation, or path crossing your boundary is flagged in the report the same day." },
  { name: "Geo-tagged photos", blurb: "Every photo carries GPS coordinates and a timestamp, so evidence stands on its own if you ever need it." },
  { name: "Video walkthrough", blurb: "A short boundary-to-boundary video shows you the whole plot, not just the good corners." },
  { name: "Property condition monitoring", blurb: "Vegetation, waterlogging, access road, name-board, and existing structures are checked on every visit." },
  { name: "Caretaker verification", blurb: "If you have a local caretaker or tenant farmer, we meet them on site and confirm what they report." },
  { name: "Tax and record monitoring", blurb: "Property tax due dates and Pahani/1B, EC pulls are tracked so records stay in your name." },
  { name: "Emergency property inspection", blurb: "Heard something from a neighbour or relative? We send someone to see and photograph it quickly." },
  { name: "Scheduled recurring visits", blurb: "Quarterly, bi-monthly, or monthly visits with side-by-side before/after evidence in each report." },
];

export const landSecuritySteps = [
  { title: "Tell us where the land is", body: "Share the district, village, and survey number (or a maps pin) on WhatsApp or the form below." },
  { title: "We confirm coverage and schedule", body: "Our desk checks the district is served, agrees the plan and date, and assigns a field representative." },
  { title: "Field visit and evidence", body: "The representative inspects the plot, records geo-tagged photos and video, and completes the 12-point checklist." },
  { title: "You receive the report", body: "The Land Security Report reaches you privately on WhatsApp, email, or secure link, with recommendations and next steps." },
];

export const landSecurityPlans = [
  {
    name: "One-Time Security Check",
    for: "A single visit when you need to know now",
    includes: ["One physical inspection", "12-point checklist and status", "Geo-tagged photos and video walkthrough", "Recommendations with follow-up date"],
  },
  {
    name: "Bhoomi Watch",
    for: "Quarterly recurring visits",
    includes: ["Four scheduled inspections a year", "Before/after comparison every visit", "Same-day encroachment alert", "Tax due-date and annual record reminders"],
  },
  {
    name: "Bhoomi Protect+",
    for: "Higher-risk or high-value land",
    includes: ["More frequent scheduled visits", "Emergency inspections on request", "Caretaker verification each visit", "Records pull and name-board / signage upkeep coordinated"],
  },
];

export const landSecurityDisclaimer =
  "Not a legal guarantee. A field inspection records what is visible on the ground on the day of the visit. This is an informational indicator based on the answers/observations provided. It is not a legal title certification or legal opinion, and it does not replace a survey, an encumbrance search, or advice from a lawyer.";

export const landSecurityFaqs = [
  {
    q: "How often should vacant land be inspected?",
    a: "Quarterly is the sensible default for most vacant plots and farmland; monthly if the land is near a growing town, beside active construction, or has had a dispute before. Encroachment usually starts small — material stacked, a path, a shed — and is far easier to stop when it is caught within weeks rather than years.",
  },
  {
    q: "What happens if you find encroachment?",
    a: "You hear about it the same day with geo-tagged photos, and the report marks the status Amber or Red. We then help you act: a written notice delivered in person, a boundary re-marking with a licensed surveyor, or a hand-off to a lawyer you choose. We do not confront anyone on your behalf.",
  },
  {
    q: "Is this a legal title check?",
    a: "No. A Land Security inspection tells you what is physically on your land, not who legally owns it. Title, encumbrance, and mutation questions need records work and, where required, a lawyer. We can pull EC and Pahani/1B as part of record monitoring, but that is not a legal opinion.",
  },
  {
    q: "Which districts do you cover?",
    a: "Telangana and Andhra Pradesh districts today, with Tamil Nadu and Karnataka expanding. Use the coverage checker to confirm your district before booking; if it is not yet served we will tell you plainly and add you to the waitlist for that district rather than promise a visit we cannot make.",
  },
  {
    q: "How fast can the first visit happen?",
    a: "In covered districts, the first inspection is usually scheduled within one to two weeks of confirming the plot details. Emergency inspections — for example after a call from a relative about activity on the land — are prioritised and we will give you a realistic date on WhatsApp before you commit.",
  },
  {
    q: "How do I get the report?",
    a: "Privately, on WhatsApp, by email, or through a secure link — your choice, and you can name family members or your lawyer to receive it too. Reports are never indexed or made public. On recurring plans, each report shows the same corners next to the previous visit so changes are obvious.",
  },
];
