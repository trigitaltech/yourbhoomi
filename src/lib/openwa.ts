// ponytail: HTTP to a running OpenWA Easy API — do not embed @open-wa/wa-automate in Next (Chrome session).
// Start: npx @open-wa/wa-automate -p 8080 -k YOUR_KEY
// Then set OPENWA_API_URL=http://localhost:8080 and OPENWA_API_KEY=YOUR_KEY

const TO = (process.env.OPENWA_TO ?? "917013870575").replace(/\D/g, "");

export type Lead = {
  name: string;
  phone: string;
  question?: string;
  email?: string;
  source?: string;
};

export async function sendLeadToWhatsApp(lead: Lead) {
  const base = process.env.OPENWA_API_URL;
  if (!base) throw new Error("OPENWA_API_URL is not set");

  const content = [
    `New Your Bhoomi ${lead.source ?? "chat"} lead`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : null,
    lead.question ? `Question: ${lead.question}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const key = process.env.OPENWA_API_KEY;
  const res = await fetch(`${base.replace(/\/$/, "")}/sendText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(key ? { api_key: key, "X-API-Key": key } : {}),
    },
    body: JSON.stringify({ args: [`${TO}@c.us`, content] }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`OpenWA ${res.status}${text ? `: ${text.slice(0, 180)}` : ""}`);
  }
}
