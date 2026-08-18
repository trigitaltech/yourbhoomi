import { clean, isValidEmail, isValidPhone, storeLead } from "@/lib/leads";
import { comingSoonFeatures, type FeatureKey } from "@/lib/site";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 20);
  const email = clean(body.email, 120);
  const feature = clean(body.feature, 20) as FeatureKey;

  if (name.length < 2 || !isValidPhone(phone)) {
    return Response.json({ error: "Please give your name and a valid WhatsApp number." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "That email address does not look right." }, { status: 400 });
  }
  if (!(feature in comingSoonFeatures)) {
    return Response.json({ error: "Unknown feature." }, { status: 400 });
  }

  const label = comingSoonFeatures[feature].label;
  const ok = await storeLead(
    "interest.jsonl",
    { kind: `${label} interest`, name, phone, email: email || undefined, fields: { feature } },
    `Notify when ${label} launches`,
  );
  if (!ok) {
    return Response.json(
      { error: "We could not save your details just now. Please message us on WhatsApp instead." },
      { status: 503 },
    );
  }
  return Response.json({ ok: true });
}
