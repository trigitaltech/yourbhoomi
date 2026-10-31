// Copy for /agents and the homepage teaser. Public, agent-facing framing only.

export const agentsHero = {
  eyebrow: "For Hyderabad real estate agents",
  h1: "Your Leads. Your Properties. More Deals.",
  body:
    "Your Bhoomi helps real estate agents find matching properties, connect with trusted agents, follow up with buyers and close deals faster. All from one simple app.",
  teluguLine: "Mee Leads, Mee Properties, Mee Business. Deals Close Cheyadaniki Your Bhoomi.",
  teluguMeaning: "Your leads, your properties, your business. Your Bhoomi helps you close deals.",
  positioning:
    "An AI-powered personal business assistant for real estate agents, not another property listing app or CRM.",
};

export const agentProblems = [
  { problem: "I have a buyer but no suitable property.", solution: "Find matching listings from consenting partner agents." },
  { problem: "I have properties but no buyers.", solution: "AI identifies matching buyer requirements." },
  { problem: "Other agents may take my customer.", solution: "Private leads and controlled information sharing." },
  { problem: "I forget whom to call.", solution: "Automatic follow-up reminders." },
  { problem: "Customers keep asking for property details.", solution: "Share a property card instantly on WhatsApp." },
  { problem: "I don't have time to market properties.", solution: "Create reels and promotional posters." },
  { problem: "I don't know whether my deals will close.", solution: "Site-visit, negotiation and closure tracking." },
];

export type AgentUsp = {
  n: number;
  title: string;
  body: string;
  benefit: string;
  signature?: boolean;
};

export const agentUsps: AgentUsp[] = [
  {
    n: 1,
    title: "Your leads stay yours",
    body: "Your customers and private property inventory remain under your control. Other agents cannot browse or extract them without permission.",
    benefit: "Builds trust and removes the fear of losing clients.",
    signature: true,
  },
  {
    n: 2,
    title: "AI finds the right property or agent",
    body: "Enter a buyer's budget, preferred area and requirements. AI recommends suitable properties from your inventory and permitted partner listings.",
    benefit: "Less searching, more qualified property visits.",
  },
  {
    n: 3,
    title: "Collaborate and earn commission",
    body: "Connect an agent who has a buyer with an agent who has the property. Agree on the commission split and record it before sharing sensitive details.",
    benefit: "More opportunities without owning every property.",
    signature: true,
  },
  {
    n: 4,
    title: "Share properties on WhatsApp in one tap",
    body: "Send photos, price, area, location, amenities and a branded property brochure directly to buyers.",
    benefit: "A professional response in seconds.",
  },
  {
    n: 5,
    title: "Never miss a follow-up",
    body: "Daily reminders for buyer calls, property visits, negotiations and pending decisions.",
    benefit: "Fewer forgotten leads and missed opportunities.",
  },
  {
    n: 6,
    title: "Market your property with AI",
    body: "Create a short property reel using photos, price and property details. Add your logo and contact information for social media.",
    benefit: "Easier marketing without needing an editor.",
  },
  {
    n: 7,
    title: "Work in Telugu, Hindi or English",
    body: "Search or add a lead using simple text or speech, such as \u201cKondapur lo 2 BHK, 80 lakhs lopu.\u201d",
    benefit: "Less typing and a lower learning barrier.",
  },
];

// The four USPs surfaced on the homepage teaser.
export const agentTeaserUsps = agentUsps.filter((u) => [1, 2, 3, 4].includes(u.n));

// Nine-beat "how it works" story shown after the hero on /agents.
export type AgentStoryPanel = {
  step: number;
  kind: "hero" | "challenge" | "solution" | "feature" | "cta";
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  footer?: string;
};

export const agentStory = {
  eyebrow: "How it works",
  heading: "From scattered leads to closed deals",
  intro:
    "Hyderabad real estate, all in one place. More buyers, more sellers, more opportunities for the agents who connect them.",
  tiles: [
    { label: "Buyers", sub: "Requirements" },
    { label: "Sellers", sub: "Properties" },
    { label: "Matchmaking", sub: "Recommended" },
    { label: "Agent partnership", sub: "Collaborate" },
  ],
  listings: [
    { name: "3 BHK Apartment", area: "Madhapur, Hyderabad", price: "\u20b91 Cr \u2013 1.5 Cr" },
    { name: "2 BHK Flat", area: "Kondapur, Hyderabad", price: "\u20b970 L \u2013 80 L" },
    { name: "Independent House", area: "Manikonda, Hyderabad", price: "\u20b91.5 Cr \u2013 2.5 Cr" },
  ],
  match: {
    buyer: { role: "Buyer", summary: "3 BHK | Madhapur | \u20b91 Cr \u2013 1.5 Cr" },
    seller: { role: "Seller", summary: "3 BHK | Madhapur | \u20b91.2 Cr" },
    label: "Perfect match",
  },
  panels: [
    {
      step: 1,
      kind: "hero",
      eyebrow: "All in one place",
      title: "Hyderabad real estate, all in one place",
      body: "More buyers. More sellers. More opportunities. Your Bhoomi is the smart app for real estate agents in Hyderabad.",
    },
    {
      step: 2,
      kind: "challenge",
      eyebrow: "The challenge",
      title: "Finding the right match isn't easy",
      body: "Most of an agent's day goes into matching the wrong buyers with the wrong properties.",
      points: [
        "Buyers with unclear requirements",
        "Sellers waiting for the right buyer",
        "Time wasted in matching",
        "Missed opportunities",
      ],
    },
    {
      step: 3,
      kind: "solution",
      eyebrow: "Meet the solution",
      title: "An app designed for Hyderabad agents",
      body: "Buyers, sellers, matchmaking and agent partnership in one place.",
      footer: "Connect \u00b7 Match \u00b7 Close",
    },
    {
      step: 4,
      kind: "feature",
      eyebrow: "Organise buyers and sellers",
      title: "Keep requirements and listings in one place",
      body: "Add buyer requirements and seller listings with location, budget and property type.",
      footer: "Structured data. Better visibility. Faster response.",
    },
    {
      step: 5,
      kind: "feature",
      eyebrow: "Smart matching",
      title: "Find the right buyer for the right property, instantly",
      body: "Your Bhoomi recommends matches based on area, budget and property type.",
    },
    {
      step: 6,
      kind: "feature",
      eyebrow: "Grow with agent partnership",
      title: "Join as a partner and get more leads, more deals and more earnings",
      body: "Work with trusted agents across Hyderabad on recorded commission splits.",
      points: [
        "Exclusive buyer and seller network",
        "More deal opportunities",
        "Partner support and tools",
        "Build your reputation",
      ],
      footer: "Together we grow.",
    },
    {
      step: 7,
      kind: "feature",
      eyebrow: "Why choose Your Bhoomi",
      title: "Built for real estate agents",
      body: "Everything an agent needs to respond faster and close more deals.",
      points: [
        "Verified buyers and sellers",
        "Location-wise listings across Hyderabad",
        "Easy communication and tracking",
        "Built for real estate agents",
        "Simple. Fast. Effective.",
      ],
    },
    {
      step: 8,
      kind: "hero",
      eyebrow: "Your Bhoomi",
      title: "Your partner in every property deal",
      body: "One app for your leads, your properties and your follow-ups.",
    },
    {
      step: 9,
      kind: "cta",
      eyebrow: "Agent partnership",
      title: "Join the Hyderabad real estate community",
      body: "Together for a stronger real estate ecosystem in Hyderabad.",
      footer: "More leads \u00b7 More deals \u00b7 More growth",
    },
  ] satisfies AgentStoryPanel[],
};

export const collaborationExample = {
  intro:
    "Many tools manage a broker's own business. Your Bhoomi also helps independent brokers work together without automatically exposing their customer information.",
  buyerAgent: {
    name: "Ravi",
    role: "Buyer agent",
    has: "A customer looking for a 3 BHK in Kondapur within \u20b91.2 crore",
  },
  listingAgent: {
    name: "Suresh",
    role: "Listing agent",
    has: "A matching 3 BHK available for \u20b91.15 crore",
  },
  match: {
    title: "Your Bhoomi AI Match",
    body: "Identifies the potential match based on area, budget, property type and availability.",
    reasons: ["Area", "Budget", "Property type", "Availability"],
  },
  steps: [
    { title: "Request collaboration", body: "Ravi asks Suresh for access to the listing. Suresh sees a limited summary of the requirement, not Ravi's client." },
    { title: "Agree commission split", body: "Both agents agree the split inside the app. It is recorded before any sensitive detail is shared." },
    { title: "Arrange site visit", body: "Schedule the visit, share the location and record the buyer's feedback in one place." },
    { title: "Track deal closure", body: "Negotiation, token, agreement and registration are tracked until the deal closes." },
  ],
  outcomes: [
    "Both agents can earn from the transaction.",
    "Client ownership, property privacy and commission terms remain recorded.",
  ],
  footnote:
    "This is especially valuable for small independent brokers who do not have hundreds of properties in their own inventory.",
  visibility: [
    { level: "Private", body: "Only you can see the lead or property. Nothing is discoverable by other agents." },
    { level: "Partner only", body: "Visible as a limited summary to agents you have connected with. Full details need your approval." },
    { level: "Network discoverable", body: "A limited listing summary is discoverable across the network. Full access is released only when you approve a collaboration request." },
  ],
  visibilityNote: "Every lead and property carries one of three levels. Only a limited listing summary is shown until the owning agent approves further access.",
};

export type RoadmapPhase = {
  key: "launch" | "next" | "later";
  label: string;
  intro: string;
  items: { name: string; what: string }[];
};

export const agentRoadmap: RoadmapPhase[] = [
  {
    key: "launch",
    label: "At launch",
    intro: "Built for daily use and agent-to-agent transactions from day one.",
    items: [
      { name: "Easy registration", what: "Mobile OTP login, profile, service areas, verification and admin approval." },
      { name: "Quick lead entry", what: "Add buyer name, mobile, budget, location and requirements in under a minute." },
      { name: "Lead upload", what: "Import leads from Excel/CSV with duplicate detection." },
      { name: "Property entry", what: "Add sale/rent/lease properties with photos, location, price and availability." },
      { name: "AI matching", what: "See matching properties for a buyer, with clear match reasons." },
      { name: "Partner agent search", what: "Find other agents with suitable properties without exposing private client data." },
      { name: "Collaboration request", what: "Request property access and agree commission sharing." },
      { name: "WhatsApp sharing", what: "Send a branded property card with photos, price and contact details." },
      { name: "Follow-up reminders", what: "Daily call reminders, site visits and overdue tasks." },
      { name: "Simple dashboard", what: "Today's calls, active buyers, available properties and deals in progress." },
    ],
  },
  {
    key: "next",
    label: "Soon after launch",
    intro: "The next layer, added once agents are using the app every day.",
    items: [
      { name: "Site visit management", what: "Schedule a visit, share Google Maps location, record customer feedback and set the next follow-up." },
      { name: "Agent-to-agent chat", what: "Discuss property availability and collaboration without immediately revealing personal contact information." },
      { name: "Commission tracker", what: "Record agreed split, deal status, payment due and payment received." },
      { name: "AI reel maker", what: "Generate a ready-to-post video from property photos, including captions and contact details." },
      { name: "Voice-based lead creation", what: "Telugu, Hindi and English, particularly useful for agents working on-site." },
      { name: "Lead source integration", what: "Connect supported Meta lead forms, websites and property portals through authorized APIs or supported import methods." },
    ],
  },
  {
    key: "later",
    label: "Later",
    intro: "Planned as the network grows.",
    items: [
      { name: "AI WhatsApp assistant", what: "Helps qualify buyers before you call." },
      { name: "Owner and document management", what: "Property owner details and documents in one place." },
      { name: "Smart lead scoring", what: "Lead scoring and deal probability." },
      { name: "Team management", what: "For broker offices with multiple agents." },
      { name: "AI price positioning", what: "Recommendations on how to position a property's price." },
      { name: "Automated marketing campaigns", what: "Scheduled posts and campaigns for your listings." },
      { name: "Deal analytics", what: "Performance reports across leads, visits and closures." },
    ],
  },
];

export const agentFaqs = [
  {
    q: "Can other agents see my clients or my private properties?",
    a: "No. Your customers and private property inventory stay under your control. Other agents cannot browse or extract them without your permission. Each lead and property has a visibility level: Private, Partner Only or Network Discoverable. Even when discoverable, only a limited summary is shown until you approve a collaboration request.",
  },
  {
    q: "How is commission sharing handled between two agents?",
    a: "When an agent with a buyer and an agent with a property decide to work together, they agree the commission split inside the app and it is recorded before sensitive details are shared. A commission tracker for deal status, payment due and payment received follows soon after launch.",
  },
  {
    q: "Is Your Bhoomi a property listing portal?",
    a: "No. It is a personal business assistant for agents. Your leads, your properties and your follow-ups live in your own account. Matching and collaboration happen only between consenting agents, not on a public portal.",
  },
  {
    q: "I am an independent broker with few listings. Is this for me?",
    a: "Yes. The agent-to-agent collaboration flow is designed for exactly this: you bring the buyer or the property, a partner agent brings the other side, and both of you earn from the transaction without owning hundreds of properties.",
  },
  {
    q: "Which languages does the app support?",
    a: "Telugu, Hindi and English. You can search or add a lead using simple text or speech, for example \u201cKondapur lo 2 BHK, 80 lakhs lopu.\u201d",
  },
  {
    q: "When does the app launch and how do I get early access?",
    a: "The app is in development for Hyderabad agents. Leave your name and WhatsApp number in the early-access form on this page and we will message you the day it is ready, with priority onboarding for the first agents who sign up.",
  },
];
