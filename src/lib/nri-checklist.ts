// "25 Checks Every NRI Landowner Should Perform" — the lead-magnet checklist, grouped.
export const nriChecklist: { group: string; items: string[] }[] = [
  {
    group: "Physical security",
    items: [
      "Someone you trust has physically stood on the land in the last 12 months",
      "All boundary stones or markers are present and match the survey sketch",
      "Fence, wall or hedge is intact on every side",
      "No new structure, shed, crop or vehicle track has appeared inside the boundary",
      "A name board with your name and survey number is standing and legible",
      "Access road is open and not blocked or diverted by neighbours",
      "You have dated, geo-tagged photos of every corner from the last visit",
    ],
  },
  {
    group: "Documents",
    items: [
      "You hold the original registered deed (or know exactly who does)",
      "Mutation / Record of Rights (Pahani, 1B, patta) shows the current owner",
      "You have an Encumbrance Certificate pulled in the last 12 months",
      "Survey sketch or FMB copy is on file and matches the ground",
      "Every document is scanned and stored in two places (cloud + family)",
      "Legal-heir or family-member certificate exists if the land was inherited",
      "Any Power of Attorney is registered, current and its scope is understood",
    ],
  },
  {
    group: "Compliance",
    items: [
      "Property or land tax paid for the current year, receipt filed",
      "No pending land-record notice, demarcation request or objection",
      "Your PAN and Aadhaar (or OCI) details are linked where the state portal asks",
      "You know the local office (MRO / Tahsildar / SRO) that governs the survey number",
      "You have checked the state land-records portal in the last 6 months",
    ],
  },
  {
    group: "Family and monitoring",
    items: [
      "All co-owners and heirs are known, listed and reachable",
      "One person in the family owns the property file and everyone knows who",
      "A local, ID-verified person is checking the plot on a schedule — not 'when they pass by'",
      "Neighbours know whom to call if they see activity on your land",
      "You have a plan for what happens to the land if the current owner passes away",
      "You have decided whether the land is to be held, transferred or sold in the next 3 years",
    ],
  },
];

export const checklistCount = nriChecklist.reduce((n, g) => n + g.items.length, 0);
