import { faqs } from "@/lib/faqs";
import { guides } from "@/lib/guides";
import { services } from "@/lib/services";

export type FaqHit = { title: string; answer: string; href?: string };

type Item = FaqHit & { keys: string[] };

const STOP = new Set([
  "the",
  "and",
  "for",
  "you",
  "your",
  "what",
  "how",
  "does",
  "can",
  "need",
  "with",
  "from",
  "this",
  "that",
  "are",
  "our",
  "about",
]);

const EXTRA_KEYS: Record<string, string[]> = {
  "Who exactly visits my property?": ["visit", "visits", "partner", "person", "aadhaar", "local", "who"],
  "How is this different from NoBroker or a listing portal?": [
    "nobroker",
    "portal",
    "listing",
    "different",
    "broker",
  ],
  "Do I need a Power of Attorney?": ["poa", "power", "attorney", "registration"],
  "What does it cost?": ["cost", "price", "fee", "fees", "charge", "charges", "pay", "payment", "invoice"],
  "How will I get updates?": ["update", "updates", "whatsapp", "photos", "report", "email"],
  "What if you find encroachment?": ["encroach", "encroachment", "neighbour", "fence", "boundary", "trespass"],
  "How long does an ancestral transfer take?": [
    "ancestral",
    "transfer",
    "gift",
    "succession",
    "inheritance",
    "weeks",
  ],
  "Which areas do you cover?": [
    "area",
    "areas",
    "cover",
    "city",
    "district",
    "hyderabad",
    "guntur",
    "coimbatore",
    "mysuru",
    "andhra",
    "nalgonda",
  ],
};

const STRONG = new Set([
  "poa",
  "cost",
  "price",
  "fees",
  "mutation",
  "encroachment",
  "ancestral",
  "nobroker",
  "hyderabad",
  "watch",
  "manage",
  "transact",
  "comply",
  "attorney",
  "repatriation",
  "nri",
]);

const kb: Item[] = [
  ...faqs.map((f) => ({
    title: f.q,
    answer: f.a,
    href: "/#faq",
    keys: EXTRA_KEYS[f.q] ?? [],
  })),
  ...services.map((s) => ({
    title: `What is ${s.name}?`,
    answer: `${s.short} ${s.body}`,
    href: `/services/${s.slug}`,
    keys: [s.slug, ...s.name.toLowerCase().split(/\s+/)],
  })),
  ...guides.map((g) => ({
    title: g.title,
    answer: `${g.summary} Full guide: ${g.title}.`,
    href: `/guides/${g.slug}`,
    keys: g.slug.split("-"),
  })),
];

function tokens(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w));
}

export function isGreeting(q: string) {
  return /^(hi|hello|hey|namaste|good\s+(morning|evening|afternoon))[\s!.]*$/i.test(q.trim());
}

export function wantsHuman(q: string) {
  return /\b(advisor|human|call me|talk to|speak to|callback|call back)\b/i.test(q);
}

export function answerFaq(question: string): FaqHit | null {
  const q = tokens(question);
  if (!q.length) return null;
  let best: { score: number; item: Item } | null = null;
  for (const item of kb) {
    const hay = new Set([...tokens(`${item.title} ${item.answer}`), ...item.keys]);
    const score = q.reduce((n, t) => n + (hay.has(t) ? 1 : 0), 0);
    if (!best || score > best.score) best = { score, item };
  }
  if (!best || best.score === 0) return null;
  if (best.score >= 2) return best.item;
  return q.some((t) => STRONG.has(t) || (t.length >= 4 && best.item.keys.includes(t)))
    ? best.item
    : null;
}

