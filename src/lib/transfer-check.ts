import type { Question } from "@/lib/risk-check";
import { site } from "@/lib/site";

const YNS = ["Yes", "No", "Not sure"];

export const transferQuestions: Question[] = [
  { id: "state", label: "Which state is the property in?", options: [...site.coverage, "Other"] },
  { id: "district", label: "District", placeholder: "e.g. Guntur" },
  { id: "type", label: "Type of transfer", options: ["Sale", "Gift", "Inheritance", "Partition", "Succession"] },
  { id: "owner", label: "Is the current registered owner available to sign?", options: ["Yes", "No — deceased", "Not sure"] },
  { id: "deed", label: "Do you have the registered deed (sale / gift / partition deed)?", options: YNS },
  { id: "mutation", label: "Is mutation updated in the current owner's name?", options: YNS },
  { id: "ec", label: "Do you have a recent Encumbrance Certificate?", options: YNS },
  { id: "tax", label: "Do you have property tax receipts?", options: YNS },
  { id: "heirs", label: "Are all legal heirs identified and in agreement?", options: ["Yes", "No", "Not applicable"] },
  { id: "dispute", label: "Is there any dispute or court case on the property?", options: ["No", "Yes", "Not sure"] },
  { id: "nri", label: "Is an NRI involved in the transfer?", options: ["Yes", "No"] },
  { id: "poa", label: "Will a Power of Attorney be required?", options: YNS },
];

type Item = { id: string; label: string; points: number; next: string };

const ITEMS: Item[] = [
  { id: "deed", label: "Registered deed", points: 25, next: "Obtain a certified copy of the registered deed from the Sub-Registrar office before anything else." },
  { id: "mutation", label: "Mutation in current owner's name", points: 15, next: "Get mutation updated in the current owner's name so the revenue record matches the deed." },
  { id: "ec", label: "Encumbrance Certificate", points: 15, next: "Pull a fresh Encumbrance Certificate (ideally 30 years) to confirm there are no unknown charges." },
  { id: "tax", label: "Property tax receipts", points: 10, next: "Collect the latest property tax receipts or clear pending dues first." },
  { id: "heirs", label: "Legal heirs identified", points: 15, next: "Identify all legal heirs and obtain a legal heir / family member certificate; the succession route depends on it." },
  { id: "dispute", label: "No dispute or litigation", points: 15, next: "A dispute must be understood and resolved or settled in writing before registration can proceed." },
];

export type ReadinessResult = { percent: number; available: string[]; needsAttention: string[]; nextSteps: string[] };

export function scoreReadiness(a: Record<string, string>): ReadinessResult {
  const available: string[] = [];
  const needsAttention: string[] = [];
  const nextSteps: string[] = [];
  let earned = 0;

  const heirsNA = a.heirs === "Not applicable" && (a.type === "Sale" || a.type === "Gift") && a.owner === "Yes";
  for (const item of ITEMS) {
    const ok = item.id === "dispute" ? a.dispute === "No" : item.id === "heirs" ? a.heirs === "Yes" || heirsNA : a[item.id] === "Yes";
    if (ok) {
      earned += item.points;
      available.push(item.label);
    } else {
      needsAttention.push(item.label);
      nextSteps.push(item.next);
    }
  }

  const nriPoa = a.nri === "Yes";
  if (nriPoa && a.poa === "Yes") {
    earned += 5;
    available.push("POA planned for NRI signatory");
  } else if (nriPoa) {
    needsAttention.push("POA plan for NRI signatory");
    nextSteps.push("Decide who will sign in India: a registered Power of Attorney attested at the consulate is usually needed when the NRI cannot travel.");
  }
  const total = 95 + (nriPoa ? 5 : 0);

  if (a.owner === "No — deceased") {
    needsAttention.push("Legal heir certificate / succession route");
    nextSteps.push("Because the owner has passed away, the transfer will run through succession: legal heir certificate first, then partition or release deeds among heirs.");
  } else if (a.owner === "Not sure") {
    needsAttention.push("Confirm who the registered owner is");
    nextSteps.push("Confirm the registered owner from the deed and EC before planning the transfer.");
  }

  const percent = Math.round((earned / total) * 100);
  // ponytail: nextSteps capped at 4; if everything is ready, one closing sentence
  const steps = nextSteps.length ? nextSteps.slice(0, 4) : ["Documents look in order — the next step is drafting the deed and booking a Sub-Registrar slot.", "Keep certified copies of every document together for registration day."];
  return { percent, available, needsAttention, nextSteps: steps };
}

export function selfCheck() {
  const ready = scoreReadiness({ type: "Sale", owner: "Yes", deed: "Yes", mutation: "Yes", ec: "Yes", tax: "Yes", heirs: "Not applicable", dispute: "No", nri: "Yes", poa: "Yes" });
  console.assert(ready.percent === 100 && ready.needsAttention.length === 0, "all-ready should be 100", ready);
  console.assert(ready.nextSteps.length === 2, "ready has 2 closing steps", ready.nextSteps);
  const empty = scoreReadiness({ type: "Inheritance", owner: "No — deceased", deed: "No", mutation: "No", ec: "Not sure", tax: "No", heirs: "No", dispute: "Yes", nri: "No", poa: "No" });
  console.assert(empty.percent === 0 && empty.available.length === 0, "nothing-ready should be 0", empty);
  console.assert(empty.needsAttention.includes("Legal heir certificate / succession route"), "deceased owner flags succession", empty.needsAttention);
  console.assert(empty.nextSteps.length === 4, "steps capped at 4", empty.nextSteps);
  const half = scoreReadiness({ type: "Gift", owner: "Yes", deed: "Yes", mutation: "Yes", ec: "No", tax: "Yes", heirs: "Not applicable", dispute: "No", nri: "No", poa: "No" });
  console.assert(half.percent === Math.round((80 / 95) * 100), "gift with heirs N/A auto-full", half);
  return "transfer-check ok";
}
