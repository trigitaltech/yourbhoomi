import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { sendLeadToWhatsApp } from "@/lib/openwa";
import { comingSoonFeatures, type FeatureKey } from "@/lib/site";

function clean(s: unknown, max: number) {
  return String(s ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

// ponytail: JSONL file so signups survive OpenWA being down. Swap for a DB/CRM when there is one.
async function saveLocally(record: Record<string, string>) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "interest.jsonl"), JSON.stringify(record) + "\n");
}

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
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2 || digits.length < 10 || digits.length > 15) {
    return Response.json({ error: "Please give your name and a valid WhatsApp number." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email address does not look right." }, { status: 400 });
  }
  if (!(feature in comingSoonFeatures)) {
    return Response.json({ error: "Unknown feature." }, { status: 400 });
  }

  const label = comingSoonFeatures[feature].label;
  const record = { at: new Date().toISOString(), feature, name, phone, email };

  const [saved, sent] = await Promise.allSettled([
    saveLocally(record),
    sendLeadToWhatsApp({ name, phone, email, source: `${label} interest`, question: `Notify when ${label} launches` }),
  ]);
  if (saved.status === "rejected") console.error("interest: local save failed", saved.reason);
  if (sent.status === "rejected") console.error("interest: WhatsApp notify failed", sent.reason);

  if (saved.status === "rejected" && sent.status === "rejected") {
    return Response.json(
      { error: "We could not save your details just now. Please message us on WhatsApp instead." },
      { status: 503 },
    );
  }
  return Response.json({ ok: true });
}
