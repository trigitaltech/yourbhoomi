/** Districts we currently serve, per state. Anything else is “expanding”. */
export const coverageDistricts: Record<string, string[]> = {
  Telangana: [
    "Hyderabad",
    "Rangareddy",
    "Medchal-Malkajgiri",
    "Sangareddy",
    "Vikarabad",
    "Nalgonda",
    "Suryapet",
    "Yadadri Bhuvanagiri",
    "Siddipet",
    "Medak",
    "Warangal",
    "Hanamkonda",
    "Karimnagar",
    "Khammam",
    "Nizamabad",
    "Mahabubnagar",
  ],
  "Andhra Pradesh": [
    "Guntur",
    "Krishna",
    "NTR",
    "Vijayawada",
    "Visakhapatnam",
    "West Godavari",
    "East Godavari",
    "Nellore",
    "Tirupati",
    "Kurnool",
    "Prakasam",
  ],
  Karnataka: ["Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Mandya", "Tumakuru", "Hassan", "Ramanagara"],
  "Tamil Nadu": [
    "Chennai",
    "Kancheepuram",
    "Chengalpattu",
    "Tiruvallur",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Vellore",
  ],
};

export function districtsFor(state: string): string[] | undefined {
  return coverageDistricts[state];
}
