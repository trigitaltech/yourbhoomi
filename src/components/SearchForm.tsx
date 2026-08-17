import { locations, types } from "@/lib/properties";

export type SearchQuery = {
  q?: string;
  loc?: string;
  type?: string;
  price?: string;
  beds?: string;
};

export function SearchForm({
  values = {},
  compact = false,
}: {
  values?: SearchQuery;
  compact?: boolean;
}) {
  return (
    <form
      action="/properties"
      method="get"
      role="search"
      className={`grid gap-3 ${compact ? "sm:grid-cols-2 lg:grid-cols-6" : "rounded-2xl border border-rule bg-paper p-4 shadow-card sm:grid-cols-2 lg:grid-cols-4"}`}
    >
      <input
        name="q"
        defaultValue={values.q}
        className={`field ${compact ? "" : "sm:col-span-2 lg:col-span-4"}`}
        placeholder="Village, city, or property name"
        aria-label="Search"
      />
      <select name="loc" defaultValue={values.loc ?? ""} className="field" aria-label="Location">
        <option value="">Location</option>
        {locations.map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>
      <select name="type" defaultValue={values.type ?? ""} className="field" aria-label="Property type">
        <option value="">Type</option>
        {types.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <select name="price" defaultValue={values.price ?? ""} className="field" aria-label="Budget">
        <option value="">Budget</option>
        <option value="under50">Under ₹50 L</option>
        <option value="50to100">₹50 L – ₹1 Cr</option>
        <option value="over100">Above ₹1 Cr</option>
      </select>
      {compact && (
        <select name="beds" defaultValue={values.beds ?? ""} className="field" aria-label="Bedrooms">
          <option value="">Bedrooms</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      )}
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
