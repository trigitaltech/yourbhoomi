import type { TimelineStep } from "@/components/Timeline";

export const landTransferHero = {
  eyebrow: "Land Transfer",
  h1: "Transfer property without repeated travel",
  sub: "Get coordinated support for property transfers, inheritance, gift deeds, mutation, POA, registration and related documentation.",
};

export const landTransferServices: { name: string; blurb: string }[] = [
  { name: "Ancestral property transfer", blurb: "Coordinate the paperwork to move family land into the names of the people who now own it." },
  { name: "Gift deed coordination", blurb: "Arrange drafting, stamping and registration when property passes between blood relatives as a gift." },
  { name: "Sale transfer support", blurb: "Line up documents, buyer-side checks and the registration slot when you sell from abroad." },
  { name: "Partition support", blurb: "Coordinate a partition deed or memorandum so each share of joint family land stands on its own record." },
  { name: "Succession support", blurb: "Coordinate legal-heir and family-member certificates and the route by which heirs come on record." },
  { name: "Mutation coordination", blurb: "File and follow up mutation on Bhu Bharati or the municipal record until the new name appears." },
  { name: "Power of Attorney coordination", blurb: "Guide POA drafting, consulate attestation and adjudication in India so someone can sign for you." },
  { name: "Registration support", blurb: "Book the sub-registrar slot, arrange witnesses and stand in on the day so nothing stalls." },
  { name: "NRI documentation coordination", blurb: "Collect, attest and courier the documents an NRI must supply, in the order the office expects them." },
  { name: "Post-registration record update support", blurb: "Track pahani, passbook, property tax and utility name changes after the deed is registered." },
];

export const landTransferSteps: TimelineStep[] = [
  { title: "Document Review", body: "We review the property and ownership documents you have and list what is missing." },
  { title: "Ownership Verification", body: "We confirm current ownership, legal heirs and whether the property is eligible to transfer." },
  {
    title: "Transfer Route",
    body: "We work out which route the transfer requires:",
    list: ["Sale", "Gift", "Partition", "Succession", "Inheritance"],
  },
  { title: "Documents & POA", body: "We prepare or coordinate the required documentation, including a Power of Attorney if you cannot be present." },
  { title: "Registration Coordination", body: "We book the sub-registrar slot, arrange witnesses and represent you on the day." },
  { title: "Mutation & Final Records", body: "We track post-registration mutation and send you the updated records." },
];

export const landTransferWhoDoesWhat = [
  "Your Bhoomi coordinates the process end to end and stands in for you where physical presence is needed.",
  "Deed drafting and legal opinions are done by empanelled advocates; who is engaged and what they charge is disclosed per case.",
  "We do not give legal opinions or certify title. Advocate, CA and government fees are separate and shown at actuals.",
];

export const landTransferPricingNote =
  "Transfer support starts from an indicative ₹15,000 per transfer; stamp duty, registration, CA and advocate fees are separate and shown at actuals.";

export const landTransferFaqs = [
  {
    q: "Gift deed or sale deed for a transfer within the family?",
    a: "For transfers between blood relatives, a gift deed is usually simpler and attracts concessional stamp duty in Telangana, while a sale deed needs a real, paid consideration and full duty. The right choice depends on who the parties are and whether money changes hands. We map your case and an empanelled advocate confirms the instrument.",
  },
  {
    q: "How is property transferred after a parent's death?",
    a: "If there is a registered will, the heirs apply for mutation with the will and death certificate. Without a will, heirs obtain a legal-heir or family-member certificate, agree on shares, and file for mutation or execute a partition or release deed. We coordinate the certificates, the deed if needed and the mutation follow-up.",
  },
  {
    q: "Does an NRI need to fly to India for the transfer?",
    a: "Usually not. A registered Power of Attorney lets a trusted person sign the deed and appear at the sub-registrar office for you. Some cases, such as a sale where the buyer's bank insists, may still need one visit. We tell you upfront whether your route can be completed entirely through a POA.",
  },
  {
    q: "How do I give a Power of Attorney from the USA or UAE?",
    a: "Sign the POA before the Indian consulate or a notary, get it apostilled or attested as your country requires, and courier it to India. Here it is adjudicated and stamped within the statutory window before it can be used. We send you the draft, the consulate checklist and track it until it is ready.",
  },
  {
    q: "How long does mutation take in Telangana?",
    a: "On Bhu Bharati, a clean mutation after a registered deed typically shows within a few weeks; cases needing legal-heir certificates, field verification or objections take longer, sometimes a few months. Municipal property-tax mutation runs separately. We track both and message you at each status change.",
  },
  {
    q: "What documents should I start with?",
    a: "Send whatever you hold: the last registered deed, pahani or passbook, an encumbrance certificate, property tax receipt, and identity documents of the owners and heirs. Missing pieces are normal. Our first document review is free and tells you exactly what is missing and what the transfer will need.",
  },
];
