import { site } from "@/lib/site";

export type Question = { id: string; label: string; options?: string[]; placeholder?: string };

const YNS = ["Yes", "No", "Not sure"];

export const riskQuestions: Question[] = [
  { id: "state", label: "Which state is the land in?", options: [...site.coverage, "Other"] },
  { id: "district", label: "District", placeholder: "e.g. Rangareddy" },
  { id: "type", label: "Property type", options: ["Vacant plot", "Farmland", "House", "Ancestral land", "Other"] },
  { id: "inspected", label: "When was it last physically inspected?", options: ["< 3 months", "3–12 months", "1–3 years", "> 3 years", "Never"] },
  { id: "boundary", label: "Is the boundary clearly marked (stones / survey)?", options: YNS },
  { id: "fence", label: "Is it fenced?", options: ["Yes", "Partly", "No"] },
  { id: "mutation", label: "Is the mutation record (Pahani / 1B / passbook) updated in your name?", options: YNS },
  { id: "ec", label: "Do you hold a recent Encumbrance Certificate?", options: YNS },
  { id: "tax", label: "Are property taxes paid up to date?", options: YNS },
  { id: "monitoring", label: "Is someone locally monitoring the land?", options: ["Yes, regularly", "Occasionally", "No"] },
  { id: "multiOwner", label: "Are multiple family members in the ownership?", options: ["No", "Yes"] },
  { id: "abroad", label: "Do you currently live outside India?", options: ["Yes", "No"] },
];

// key = `${questionId}:${answer}` → points deducted + recommendation
const DEDUCTIONS: Record<string, { points: number; rec: string }> = {
  "inspected:Never": { points: 25, rec: "No inspection has ever been done — a first physical check with photos is the priority" },
  "inspected:> 3 years": { points: 18, rec: "No regular inspection schedule exists — more than three years since the last visit" },
  "inspected:1–3 years": { points: 10, rec: "No regular inspection schedule exists — a periodic visit would close the gap" },
  "inspected:3–12 months": { points: 4, rec: "Keep inspections on a fixed schedule so changes are caught early" },
  "boundary:No": { points: 12, rec: "Boundary needs physical verification and marking with stones" },
  "boundary:Not sure": { points: 6, rec: "Boundary needs physical verification against the survey record" },
  "fence:No": { points: 8, rec: "Fence and signage would deter casual encroachment" },
  "fence:Partly": { points: 4, rec: "Complete the fence and add a name-board" },
  "mutation:No": { points: 12, rec: "Mutation record needs updating in the owner's name" },
  "mutation:Not sure": { points: 6, rec: "Mutation record may require review" },
  "ec:No": { points: 8, rec: "Pull a fresh Encumbrance Certificate before any transaction" },
  "ec:Not sure": { points: 4, rec: "Check the Encumbrance Certificate for any unknown entries" },
  "tax:No": { points: 8, rec: "Clear pending property tax and file the receipts" },
  "tax:Not sure": { points: 4, rec: "Confirm property tax status with the local body" },
  "monitoring:No": { points: 15, rec: "Nobody is watching the land locally — appoint a monitoring arrangement" },
  "monitoring:Occasionally": { points: 7, rec: "Occasional monitoring leaves long gaps — set a regular schedule" },
  "multiOwner:Yes": { points: 5, rec: "Ownership documents should be consolidated across heirs" },
  "abroad:Yes": { points: 5, rec: "Being abroad, keep a local representative and a POA plan ready" },
};

export type RiskStatus = "Low Risk" | "Moderate Risk" | "High Risk" | "Critical Attention";
export type RiskResult = { score: number; status: RiskStatus; recommendations: string[] };

const GOOD_RECS = ["Keep the current inspection schedule and record photos each visit", "Store deed, EC and tax receipts together in one digital vault", "Re-verify boundary stones after every monsoon"];

export function scoreRisk(answers: Record<string, string>): RiskResult {
  const hits = Object.entries(DEDUCTIONS)
    .filter(([key]) => {
      const i = key.indexOf(":");
      return answers[key.slice(0, i)] === key.slice(i + 1);
    })
    .map(([, v]) => v)
    .sort((a, b) => b.points - a.points);
  const score = Math.max(0, Math.min(100, 100 - hits.reduce((s, h) => s + h.points, 0)));
  const status: RiskStatus = score >= 80 ? "Low Risk" : score >= 60 ? "Moderate Risk" : score >= 40 ? "High Risk" : "Critical Attention";
  const recommendations = [...hits.map((h) => h.rec), ...GOOD_RECS].slice(0, Math.max(3, Math.min(5, hits.length)));
  return { score, status, recommendations };
}

export function selfCheck() {
  const good = scoreRisk({ inspected: "< 3 months", boundary: "Yes", fence: "Yes", mutation: "Yes", ec: "Yes", tax: "Yes", monitoring: "Yes, regularly", multiOwner: "No", abroad: "No" });
  console.assert(good.score === 100 && good.status === "Low Risk", "all-good should be 100 Low", good);
  const worst = scoreRisk({ inspected: "Never", boundary: "No", fence: "No", mutation: "No", ec: "No", tax: "No", monitoring: "No", multiOwner: "Yes", abroad: "Yes" });
  console.assert(worst.score === 2 && worst.status === "Critical Attention", "worst should be 2 Critical", worst);
  console.assert(worst.recommendations.length >= 3 && worst.recommendations.length <= 5, "recs 3–5", worst.recommendations);
  console.assert(good.recommendations.length === 3, "good gets 3 generic recs", good.recommendations);
  const mid = scoreRisk({ inspected: "1–3 years", boundary: "Not sure", monitoring: "Occasionally", abroad: "Yes" });
  console.assert(mid.score === 72 && mid.status === "Moderate Risk", "mid should be 72 Moderate", mid);
  console.assert(mid.recommendations[0].startsWith("No regular inspection"), "recs ordered by deduction", mid.recommendations);
  return "risk-check ok";
}
