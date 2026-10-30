import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SUPPORT_EMAIL = "hello@yourbhoomi.com";
const DELETE_ACCOUNT_EMAIL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Your Bhoomi Account Deletion Request",
)}`;

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Request deletion of your Your Bhoomi account and associated personal data without signing in to the mobile app.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Delete Account", path: "/delete-account" },
        ]}
      />
      <p className="eyebrow mt-6">Account support</p>
      <h1 className="mt-3 text-2xl">Delete your Your Bhoomi account</h1>
      <p className="mt-4 text-ink-2">
        You can request account deletion without signing in to or reinstalling
        the Your Bhoomi app.
      </p>

      <div className="mt-8 space-y-8 text-ink-2">
        <section>
          <h2 className="text-xl text-stamp">Send your deletion request</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              Email{" "}
              <a
                href={DELETE_ACCOUNT_EMAIL}
                className="text-stamp underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </li>
            <li>
              Use the subject &quot;Your Bhoomi Account Deletion
              Request&quot;.
            </li>
            <li>
              Send the request from the email address registered to your
              account, where possible.
            </li>
            <li>
              If you cannot access that email address, say so in your message.
              We will arrange appropriate verification.
            </li>
          </ol>
          <a
            href={DELETE_ACCOUNT_EMAIL}
            className="btn btn-primary mt-6 inline-flex"
          >
            Email deletion request
          </a>
        </section>

        <section>
          <h2 className="text-xl text-stamp">What happens next</h2>
          <p className="mt-3">
            We may ask for information reasonably needed to confirm that you own
            the account. Once verified, we will delete your account and
            associated personal information from our active systems.
          </p>
          <p className="mt-3">
            We aim to respond within 30 days and will explain when deletion is
            complete or whether additional time is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            Data deleted and data we may retain
          </h2>
          <p className="mt-3">
            Deletion includes account profile data, account-associated property
            inventory, buyer leads, follow-up notes, uploaded media and stored
            integration credentials.
          </p>
          <p className="mt-3">
            We may retain limited records where required for legal, security,
            fraud-prevention or dispute-resolution purposes. Backup copies may
            remain until their normal expiry or replacement. Retained information
            is restricted to the purpose that requires it and removed when that
            need ends.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Important information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Logging out or uninstalling the app does not delete your account.</li>
            <li>
              Deleting your Your Bhoomi account does not delete your Google or
              Instagram accounts.
            </li>
            <li>
              Posts already published to third-party services are not
              automatically removed.
            </li>
            <li>
              Keep copies of information you are entitled to retain before
              requesting deletion.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Learn more</h2>
          <p className="mt-3">
            For more information about deletion and retention, read our{" "}
            <Link href="/privacy" className="text-stamp underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-stamp underline">
              Terms and Conditions
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
