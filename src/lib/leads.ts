import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { sendLeadToWhatsApp } from "@/lib/openwa";

export function clean(s: unknown, max: number) {
  return String(s ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

export function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export const isValidEmail = (email: string) => !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ponytail: JSONL file so leads survive OpenWA being down. Swap for a DB/CRM when there is one.
async function saveLocally(file: string, record: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, file), JSON.stringify(record) + "\n");
}

export type LeadRecord = {
  kind: string;
  name: string;
  phone: string;
  email?: string;
  fields?: Record<string, string>;
  attribution?: Record<string, string>;
};

/** Persist locally and notify on WhatsApp. Returns false only if both failed. */
export async function storeLead(file: string, lead: LeadRecord, summary: string) {
  const record = { at: new Date().toISOString(), ...lead };
  const [saved, sent] = await Promise.allSettled([
    saveLocally(file, record),
    sendLeadToWhatsApp({ name: lead.name, phone: lead.phone, email: lead.email, source: lead.kind, question: summary }),
  ]);
  if (saved.status === "rejected") console.error(`${lead.kind}: local save failed`, saved.reason);
  if (sent.status === "rejected") console.error(`${lead.kind}: WhatsApp notify failed`, sent.reason);
  return !(saved.status === "rejected" && sent.status === "rejected");
}
