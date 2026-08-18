import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistForm } from "@/components/ChecklistForm";
import { checklistCount, nriChecklist } from "@/lib/nri-checklist";

const title = `NRI Land Protection Checklist — ${checklistCount} Checks Every NRI Landowner Should Perform`;
const description =
  "Free checklist for NRIs with land in India: physical security, documents, compliance and family monitoring checks you can run from abroad. Sent on WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nri-checklist" },
  openGraph: { title, description, url: "/nri-checklist" },
};

export default function NriChecklistPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "NRI Land Protection Checklist", path: "/nri-checklist" }]} />
      <p className="eyebrow mt-6">Free resource</p>
      <h1 className="mt-3 text-2xl">{checklistCount} checks every NRI landowner should perform</h1>
      <p className="mt-4 text-lg text-ink-2">
        The same list our field representatives and coordinators run through on a new file. Tick what you
        can from abroad; the rest is what a local visit is for.
      </p>

      <div className="card mt-8 p-6 print:hidden">
        <h2 className="text-lg font-semibold text-stamp">Get the checklist on WhatsApp</h2>
        <p className="mt-1 text-sm text-ink-2">Four fields. We use them only to send the checklist and follow up once.</p>
        <div className="mt-4">
          <ChecklistForm />
        </div>
      </div>

      <div className="mt-12 space-y-10">
        {nriChecklist.map((g, gi) => (
          <section key={g.group} aria-labelledby={`grp-${gi}`}>
            <h2 id={`grp-${gi}`} className="text-xl font-semibold text-stamp">
              {g.group}
            </h2>
            <ol className="mt-4 space-y-3">
              {g.items.map((item, i) => {
                const n = nriChecklist.slice(0, gi).reduce((s, x) => s + x.items.length, 0) + i + 1;
                return (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rule text-xs font-semibold text-stamp">
                      {n}
                    </span>
                    <span className="text-ink">{item}</span>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
      <p className="mt-10 text-xs text-ink-2">
        General information, not legal advice. Land rules differ by state; confirm anything you act on with
        the local office or an advocate.
      </p>
    </div>
  );
}
