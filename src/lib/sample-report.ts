// Anonymized SAMPLE inspection report shown on /sample-report and /land-security.
// Every value here is illustrative — labelled "SAMPLE" wherever rendered.

export type ChecklistStatus = "ok" | "attention" | "issue";
export type OverallStatus = "green" | "amber" | "red";

export const OVERALL_LABEL: Record<OverallStatus, string> = {
  green: "Green: Secure",
  amber: "Amber: Attention Required",
  red: "Red: Immediate Action Recommended",
};

export const CHECK_LABEL: Record<ChecklistStatus, string> = {
  ok: "OK",
  attention: "Attention",
  issue: "Issue",
};

export const REPORT_DISCLAIMER =
  "This is an informational indicator based on the answers/observations provided. It is not a legal title certification or legal opinion. A field inspection records what is visible on the ground on the day of the visit; it does not verify ownership, title, or survey boundaries.";

export const sampleReport = {
  header: {
    title: "YOURBHOOMI LAND SECURITY REPORT",
    reportId: "YB-SR-SAMPLE-001",
    propertyName: "Sample: family plot",
    location: "Warangal, Telangana",
    district: "Warangal",
    state: "Telangana",
    inspectionDate: "12 Aug 2026",
    inspectionTime: "10:40 AM IST",
    fieldRepresentative: "Ravi K.",
    gpsVerification: "Verified",
    plan: "Bhoomi Watch (quarterly)",
  },
  overall: "amber" as OverallStatus,
  overallSummary:
    "Plot is intact and boundary stones are in place. Two items need attention: the north fence has sagged near the road, and a neighbour has stacked construction material against the east boundary. No unauthorized construction observed.",
  checklist: [
    { item: "Boundary condition", status: "ok", note: "All four boundary stones located and photographed. No visible shift since last visit." },
    { item: "Fence condition", status: "attention", note: "North fence sagging over ~6 m near the road; two posts loose. Repair recommended before monsoon." },
    { item: "Access road", status: "ok", note: "Kutcha road motorable; no obstruction at the gate." },
    { item: "Encroachment observation", status: "attention", note: "Neighbour has stacked bricks and sand against the east boundary. Not on the plot; monitor at next visit." },
    { item: "Unauthorized construction", status: "ok", note: "None observed on the plot." },
    { item: "Existing structures", status: "ok", note: "Name-board present and legible. No sheds or huts." },
    { item: "Vegetation", status: "attention", note: "Knee-high growth across the plot; clearing recommended so boundaries stay visible." },
    { item: "Waterlogging", status: "ok", note: "Dry on inspection day; low south-west corner noted for monsoon check." },
    { item: "Signage", status: "ok", note: "‘Private property — Your Bhoomi monitored’ board in place." },
    { item: "Caretaker status", status: "ok", note: "Local contact met on site; confirmed no visitors or activity since last inspection." },
    { item: "Neighbour activity", status: "attention", note: "Construction underway on the adjacent east plot. Watch for material spill-over." },
    { item: "Tax / document reminders", status: "ok", note: "Property tax paid for FY 2026-27. Next Pahani/1B check due Oct 2026." },
  ] satisfies { item: string; status: ChecklistStatus; note: string }[],
  evidence: {
    photos: 18,
    photosNote: "geo-tagged, timestamped, all four corners plus fence and east boundary",
    videos: 1,
    videosNote: "walkthrough, 2 min 40 s, boundary to boundary",
    timestamps: "Captured 10:40–11:25 AM IST, 12 Aug 2026",
    gps: "GPS coordinates recorded with each photo (rounded and withheld in this sample)",
    beforeAfter: "For recurring customers, each report shows the same corners side by side with the previous visit.",
  },
  recommendations: {
    immediate: [
      "Repair north fence (two posts, re-tension wire). Vendor quote can be arranged for your approval.",
      "Send a polite written notice to the east neighbour about material stacked against the boundary; we can deliver it in person.",
    ],
    optional: [
      "Clear vegetation before monsoon so boundary stones remain visible.",
      "Add one more name-board on the east side facing the neighbour’s construction.",
    ],
    followUpDate: "26 Aug 2026 (fence repair confirmation)",
    nextInspection: "Nov 2026 (quarterly schedule)",
  },
  sharing: {
    channels: ["WhatsApp", "Email", "Secure link"],
    note: "Reports are shared privately with you and anyone you name (family, your lawyer). They are never indexed or made public.",
  },
};

export type SampleReport = typeof sampleReport;
