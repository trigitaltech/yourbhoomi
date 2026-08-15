export type Property = {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: "Plot" | "Farmland" | "House" | "Ancestral";
  price: string;
  lakhs: number;
  acres: string;
  beds: number;
  image: string;
  tag: string;
  summary: string;
};

export const properties: Property[] = [
  {
    id: "p1",
    slug: "nalgonda-mango-grove",
    title: "Ancestral mango grove",
    summary:
      "Family grove under Bhoomi Watch. Fence line surveyed; harvest rights documented for transfer.",
    location: "Nalgonda, Telangana",
    type: "Farmland",
    price: "₹48 L",
    lakhs: 48,
    acres: "4.2 acres",
    beds: 0,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tag: "Watch listed",
  },
  {
    id: "p2",
    slug: "coimbatore-hill-plot",
    title: "Hill-view residential plot",
    summary:
      "Title verified residential plot. Patta and survey sketch on file; ready for a site walk.",
    location: "Coimbatore, Tamil Nadu",
    type: "Plot",
    price: "₹32 L",
    lakhs: 32,
    acres: "2,400 sq.ft",
    beds: 0,
    image:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80",
    tag: "Title verified",
  },
  {
    id: "p3",
    slug: "mysuru-family-house",
    title: "Family house & courtyard",
    summary:
      "Occupied family house under Bhoomi Manage. Roof and courtyard repairs logged this quarter.",
    location: "Mysuru, Karnataka",
    type: "House",
    price: "₹1.15 Cr",
    lakhs: 115,
    acres: "3 BHK",
    beds: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tag: "Managed",
  },
  {
    id: "p4",
    slug: "warangal-riverfront-land",
    title: "Riverfront ancestral land",
    summary:
      "Transfer-ready ancestral parcel. Mutation draft prepared; siblings aligned on partition notes.",
    location: "Warangal, Telangana",
    type: "Ancestral",
    price: "₹72 L",
    lakhs: 72,
    acres: "6.8 acres",
    beds: 0,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    tag: "Transfer ready",
  },
  {
    id: "p5",
    slug: "guntur-temple-house",
    title: "Temple-road village house",
    summary:
      "Village house with recent plumbing and roof work. Caretaker visits twice a month.",
    location: "Guntur, Andhra Pradesh",
    type: "House",
    price: "₹58 L",
    lakhs: 58,
    acres: "2 BHK",
    beds: 2,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    tag: "Repairs logged",
  },
  {
    id: "p6",
    slug: "vijayawada-highway-plot",
    title: "Dryland plot near highway",
    summary:
      "Surveyed dryland near the highway corridor. Boundary stones photographed in the last visit.",
    location: "Vijayawada, Andhra Pradesh",
    type: "Plot",
    price: "₹21 L",
    lakhs: 21,
    acres: "1,800 sq.ft",
    beds: 0,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
    tag: "Surveyed",
  },
];

export const locations = [...new Set(properties.map((p) => p.location))];
export const types = [...new Set(properties.map((p) => p.type))];

export function propertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function filterProperties(
  list: Property[],
  q: { location: string; type: string; beds: string; query: string; price: string },
) {
  return list.filter((p) => {
    if (q.location && p.location !== q.location) return false;
    if (q.type && p.type !== q.type) return false;
    if (q.price === "under50" && p.lakhs >= 50) return false;
    if (q.price === "50to100" && (p.lakhs < 50 || p.lakhs > 100)) return false;
    if (q.price === "over100" && p.lakhs <= 100) return false;
    if (q.beds && p.beds < Number(q.beds)) return false;
    if (q.query) {
      const s = `${p.title} ${p.location} ${p.type}`.toLowerCase();
      if (!s.includes(q.query.toLowerCase())) return false;
    }
    return true;
  });
}
