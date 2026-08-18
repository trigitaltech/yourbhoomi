import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ManageCookiesButton } from "@/components/CookieBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies on yourbhoomi.com — essential site cookies and optional analytics after you accept.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Cookies", path: "/cookies" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Cookie Policy</h1>
      <p className="mt-4 text-sm text-ink-2">Last updated: 18 August 2026</p>

      <div className="mt-8 space-y-8 text-ink-2">
        <section>
          <h2 className="text-xl text-stamp">What a cookie is</h2>
          <p className="mt-3">
            A cookie is a small text file stored on your device. We also use
            similar storage (such as localStorage) to remember that you have
            accepted or declined cookies. This policy covers both.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Your choice</h2>
          <p className="mt-3">
            The first time you visit, a banner asks you to accept cookies or
            keep essential cookies only. You can change that later:{" "}
            <ManageCookiesButton />.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Essential cookies</h2>
          <p className="mt-3">
            These are needed to run the website. They do not require extra
            consent under this policy.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">yb_consent</strong> — stores whether
              you accepted all cookies or essential only. Kept for 12 months.
            </li>
            <li>
              Service-worker cache for the installable app (pages and icons on
              this device). This is not used to advertise to you.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Optional analytics</h2>
          <p className="mt-3">
            If you tap <strong className="text-ink">Accept cookies</strong>, we
            may measure visits (pages viewed, country, device type) so we can
            improve the NRI desk. We do not run advertising pixels today. If we
            add an analytics tool, it will load only after that acceptance and
            this page will name the vendor.
          </p>
          <p className="mt-3">
            If you choose <strong className="text-ink">Essential only</strong>,
            analytics stay off.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Third parties</h2>
          <p className="mt-3">
            Links to WhatsApp open Meta&apos;s service under their terms and
            cookie rules. We do not control cookies set on wa.me.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">How to clear cookies</h2>
          <p className="mt-3">
            Use <ManageCookiesButton /> on this page, or delete cookies for{" "}
            {site.url.replace("https://", "")} in your browser settings.
          </p>
        </section>
      </div>
    </div>
  );
}
