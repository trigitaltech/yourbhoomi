export const faqs = [
  {
    q: "Who exactly visits my property?",
    a: "A named local partner from your district — Aadhaar-verified, background-checked, and on our payroll or retainer. You get their name, photo, and ID before the first visit, and the same person stays on your file.",
  },
  {
    q: "How is this different from NoBroker or a listing portal?",
    a: "Portals help you list and search. We physically stand in for you: walking boundaries, collecting quotes, sitting at the registrar or MRO office, paying tax, and reporting back. Think of us as your broker who works for you, not for a deal.",
  },
  {
    q: "Do I need a Power of Attorney?",
    a: "Not for watching or repairs. For registrations, mutation applications, and some tax matters, yes — a limited Special POA. We give you a state-specific draft and the consulate checklist. See the POA guide.",
  },
  {
    q: "What does it cost?",
    a: "Bhoomi Watch starts with a fixed per-visit fee; Manage, Transact, and Comply are quoted per job with the government fees shown separately. Invoices are in INR with your currency alongside; pay from NRE/NRO or by card.",
  },
  {
    q: "How will I get updates?",
    a: "On WhatsApp, in plain language, with dated photos and receipts. Email summaries and a monthly PDF are available if you prefer.",
  },
  {
    q: "What if you find encroachment?",
    a: "You get a same-day alert with photos, our recommended next step (notice, MRO demarcation, or legal), and an estimate. Nothing is filed without your go-ahead.",
  },
  {
    q: "How long does an ancestral transfer take?",
    a: "Where the family agrees and records are clean, gift deed to mutation typically takes 6–10 weeks. Missing mutation, disputed shares, or lost documents add time; we tell you where the file is every week.",
  },
  {
    q: "Which areas do you cover?",
    a: "Live belts today: Hyderabad region (Nalgonda, Siddipet, Warangal), coastal Andhra (Guntur–Vijayawada), Coimbatore & Nilgiris, and Mysuru. Message us for other districts — we onboard partners city by city.",
  },
];

export function Faq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <section id="faq" className="border-t border-rule bg-paper-2" aria-labelledby="faq-heading">
      <div className="container section max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-2xl">
          Questions NRIs ask us first
        </h2>
        <div className="mt-8 divide-y divide-rule border-y border-rule">
          {items.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:hidden">
                {f.q}
                <span className="text-xl leading-none text-ink-2 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
