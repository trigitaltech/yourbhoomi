import { clean, isValidEmail, isValidPhone, storeLead } from "@/lib/leads";

// One endpoint for every lead form. `kind` names the form; `fields` carries form-specific answers.
const KINDS = new Set([
  "contact", "waitlist", "tour", "security", "transfer", "coverage",
  "risk-check", "transfer-check", "checklist",
]);
const MAX_FIELDS = 30;

function cleanMap(v: unknown, keyMax: number, valMax: number) {
  const out: Record<string, string> = {};
  if (!v || typeof v !== "object") return out;
  for (const [k, val] of Object.entries(v as Record<string, unknown>).slice(0, MAX_FIELDS)) {
    const key = clean(k, keyMax);
    const s = clean(val, valMax);
    if (key && s) out[key] = s;
  }
  return out;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill `website`.
  if (clean(body.website, 10)) return Response.json({ ok: true });

  const kind = clean(body.kind, 20);
  const name = clean(body.name, 80);
  const phone = clean(body.phone, 20);
  const email = clean(body.email, 120);

  if (!KINDS.has(kind)) return Response.json({ error: "Unknown form." }, { status: 400 });
  if (name.length < 2 || !isValidPhone(phone)) {
    return Response.json({ error: "Please give your name and a valid WhatsApp number." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "That email address does not look right." }, { status: 400 });
  }

  const fields = cleanMap(body.fields, 40, 500);
  const attribution = cleanMap(body.attribution, 30, 200);
  const summary = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n");

  const ok = await storeLead("leads.jsonl", { kind, name, phone, email: email || undefined, fields, attribution }, summary);
  if (!ok) {
    return Response.json(
      { error: "We could not save your details just now. Please message us on WhatsApp instead." },
      { status: 503 },
    );
  }
  return Response.json({ ok: true });
}
