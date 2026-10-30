import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const LEGAL_EMAIL = "hello@yourbhoomi.com";
const LEGAL_PHONE = "+91 70138 70575";
const LEGAL_PHONE_HREF = "tel:+917013870575";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Your Bhoomi handles personal information across its website, agent mobile app, property services, and optional integrations.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Your Bhoomi Privacy Policy</h1>
      <p className="mt-2 text-ink-2">Website and Agent Mobile App</p>
      <p className="mt-4 text-sm text-ink-2">Last updated: 30 October 2026</p>

      <div className="mt-8 space-y-8 text-ink-2">
        <section>
          <h2 className="text-xl text-stamp">1. Scope and contact</h2>
          <p className="mt-3">
            This Privacy Policy explains how Your Bhoomi handles personal information
            through yourbhoomi.com, our agent mobile app, related web application,
            and communications about our services. It covers website visitors,
            agents, property owners, people who enquire about our services, and
            people whose details are provided by an authorised user.
          </p>
          <p className="mt-3">
            The mobile app is intended for adult real estate agents and is offered
            through Google Play for India. Our website also serves people, including
            NRIs, who need assistance with property in India. India-only app
            distribution does not mean that all information is stored or processed
            only in India.
          </p>
          <p className="mt-3">
            Your Bhoomi is responsible for the personal information we process to
            operate these services. Contact us at{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>
            {" "}or{" "}
            <a href={LEGAL_PHONE_HREF} className="text-stamp underline">
              {LEGAL_PHONE}
            </a>
            . Our desk is in Banjara Hills, Hyderabad, Telangana, India.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">2. Information you provide</h2>
          <p className="mt-3">
            <strong className="text-ink">Account and profile information:</strong>{" "}
            Your name, email address, account identifiers and sign-in information;
            phone number; agency name; years of experience; professional bio;
            selected service areas; and a profile photo if you add one.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Property information:</strong> Listing
            titles, property type, sale or rental requirements, prices, size, BHK,
            facing, availability status, address, area, notes, photographs, and
            videos you upload. These records may contain personal information about
            owners, occupiers or other people.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Buyer leads and follow-ups:</strong> Buyer
            names, phone numbers, email addresses, preferred areas, property
            requirements, budgets, notes, follow-up records and optional commission
            or lead-generator share details entered by an agent. Where a
            communication or matching feature is available and used, we also
            process the information needed to provide that feature.
          </p>
          <p className="mt-3">
            <strong className="text-ink">
              Website enquiries and service records:
            </strong>{" "}
            Contact details, property location, messages, instructions, documents
            and records needed for a property service you request. Visits may
            produce photographs, location-tagged evidence and reports relating to
            the property.
          </p>
          <p className="mt-3">
            Identity documents are not required for ordinary app registration or a
            website enquiry. If a specific property service requires identity or
            ownership documents, we explain what is needed and how to provide it.
            Please do not put Aadhaar, PAN, passport copies, financial credentials
            or unrelated sensitive information in listing descriptions, lead notes
            or public content.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Support and deletion requests:</strong>{" "}
            Correspondence, the account concerned, a selected deletion reason,
            optional written feedback, information needed to verify the request,
            and a record of how we handled it.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            3. Sign in and optional integrations
          </h2>
          <p className="mt-3">
            <strong className="text-ink">Google sign-in:</strong> If you choose
            Google sign-in, we receive account information made available through
            the sign-in process, such as your name, email address, profile image
            and Google account identifier. Google authenticates you; we do not
            receive your Google password. Google also processes information under
            its own privacy policy.
          </p>
          <p className="mt-3">
            <strong className="text-ink">AI captions:</strong> If you set up and use
            the AI caption feature, relevant property details, instructions and
            other content submitted for caption generation are sent to OpenAI for
            caption generation. The feature may require your own API key, which is
            processed to authenticate requests. Do not include buyer contact
            details, identity documents or confidential information unless
            necessary and authorised. The provider applies its own service terms,
            data handling rules and account settings. We do not promise that every
            AI provider or account has identical retention or training settings.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Instagram:</strong> If you connect
            Instagram, we process the connected account or page identifiers,
            connection status and authorisation credentials needed for the
            integration. When you use publishing, the selected media, caption and
            related publishing information are sent to Meta. Published content is
            governed by your Instagram settings and Meta&apos;s policies.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Maps:</strong> Property areas and selected
            service areas may be used to display maps and location markers. A map
            provider may receive the displayed locations and technical information
            needed to deliver its service. Selecting an area is different from
            granting access to your device&apos;s live location.
          </p>
          <p className="mt-3">
            Optional integrations process information when you connect or use
            them. Disconnecting an integration stops future authorised use through
            that connection, but does not automatically remove content already
            sent or published. You can also manage permissions directly with the
            relevant provider.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            4. Technical information and device permissions
          </h2>
          <p className="mt-3">
            When you access our services, our systems and service providers may
            process IP addresses, browser or device information, operating system
            and app version, request timestamps, session information, and error or
            security logs needed to deliver, protect and troubleshoot the service.
          </p>
          <p className="mt-3">
            When you choose a profile photo or property media, the app accesses the
            items you select through the available device picker or permission
            flow. You can manage permissions in your device settings. Declining
            access may prevent the particular upload or feature from working.
          </p>
          <p className="mt-3">
            An area displayed on a map does not by itself establish that the app is
            tracking your device. If a feature needs an additional device
            permission, we will explain the purpose and request that permission
            when required.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            5. How we use personal information
          </h2>
          <p className="mt-3">
            We use information to create and authenticate accounts; maintain agent
            profiles; store and organise inventory, buyer requirements and
            follow-ups; provide available search and matching functions; record
            commission information; and carry out publishing or integration actions
            you request.
          </p>
          <p className="mt-3">
            We also use information to answer enquiries, arrange agreed property
            services, provide reports and service updates, support users, prevent
            misuse, investigate problems, handle privacy requests and comply with
            applicable obligations.
          </p>
          <p className="mt-3">
            We seek consent where required and otherwise process information only
            on a basis permitted by applicable law. Where consent is requested, the
            notice or permission prompt explains the relevant purpose. Accepting
            general terms does not replace a separate consent that the law
            requires. You can withdraw consent for optional processing by
            contacting us or using the relevant setting; this may affect the
            feature that depends on it.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            6. Information supplied about other people
          </h2>
          <p className="mt-3">
            Agents and other users must have appropriate authority or another
            lawful basis to provide buyer, owner, tenant or colleague information.
            They must give those individuals any required notice and use the
            information only for legitimate purposes. Do not upload unrelated
            documents or contact lists.
          </p>
          <p className="mt-3">
            If an agent entered your details and you do not have a Your Bhoomi
            account, you can still contact us about your information. Please
            provide enough detail to help us identify the relevant record without
            sending unnecessary identity documents. We may coordinate with the
            agent and verify your request before acting.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">7. Sharing and visibility</h2>
          <p className="mt-3">
            We do not sell personal information. We share it only as needed for the
            purposes described here, as you direct, or as permitted or required by
            law.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Operational providers:</strong> Hosting,
            storage, authentication, email, support and other technical providers
            process information needed to run the services. Optional integrations
            receive the information described in Section 3. Their own services may
            also be subject to their privacy policies.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Property service recipients:</strong>{" "}
            Where you request visits, filings, maintenance, transfer assistance or
            related work, relevant details may be shared with assigned
            representatives, professional advisers, contractors or authorities
            needed for that work.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Other users and public channels:</strong>{" "}
            Content you choose to publish or share may be visible to the intended
            audience, including other platform users or the public. An inventory
            entry, an owner listing and an Instagram post can have different
            audiences. Review the relevant sharing or publishing action before
            including contact details, exact addresses or identifiable images.
            Lead contact details should not be included in public listings or
            captions.
          </p>
          <p className="mt-3">
            <strong className="text-ink">
              Legal and protective disclosures:
            </strong>{" "}
            We may disclose relevant information to meet a lawful request, enforce
            agreements, investigate fraud or protect people&apos;s rights and
            safety. If the business is reorganised or transferred, information may
            be transferred subject to applicable safeguards and any notice
            required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            8. Cookies and website analytics
          </h2>
          <p className="mt-3">
            Essential cookies and similar storage help the website operate and
            remember your choices. Our cookie preference record is retained for 12
            months. Optional website analytics operate only after you accept them
            through the cookie controls.
          </p>
          <p className="mt-3">
            You can change your choice using the controls described in our{" "}
            <Link href="/cookies" className="text-stamp underline">
              Cookie Policy
            </Link>
            {" "}or clear website storage through your browser. The Cookie Policy
            describes the website&apos;s current tools. Website cookie choices do
            not by themselves disconnect Google, Instagram or other app
            integrations.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">9. Retention</h2>
          <p className="mt-3">
            Website enquiry information is normally retained for up to 24 months
            after the last communication, unless an active service or a lawful
            recordkeeping need requires longer retention.
          </p>
          <p className="mt-3">
            Account information, profiles, listings, uploaded media, buyer leads
            and follow-ups are retained while needed to provide your account and
            requested services, subject to your deletion requests. Integration
            credentials are retained while needed for an authorised connection and
            removed or invalidated when that connection ends, subject to any
            limited security recordkeeping requirement.
          </p>
          <p className="mt-3">
            Service documents, transaction records, support correspondence,
            security logs and request records are kept only for as long as needed
            for their purpose or a relevant legal requirement. Retention depends on
            the record type, the duration of the service, fraud prevention needs,
            outstanding disputes and statutory obligations.
          </p>
          <p className="mt-3">
            After deletion, limited copies may remain temporarily in backups until
            normal expiry or replacement. Information that must be retained for a
            lawful purpose is restricted to that purpose and removed when the need
            ends. We do not treat backup retention or an unresolved enquiry as
            permission to keep an entire account indefinitely.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            10. Account deletion and other deletion requests
          </h2>
          <p className="mt-3">
            You can submit an account-deletion request in the app through Profile
            {" → "}Account{" → "}Delete account. Select a reason, add optional
            written feedback if you wish, review the request and confirm it.
            Submission starts the deletion process; it is not a statement that
            every copy has already been removed.
          </p>
          <p className="mt-3">
            You can also request deletion without reinstalling the app by emailing{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>{" "}
            with the subject &quot;Your Bhoomi Account Deletion Request&quot;.
            Include the email address associated with your account. If you cannot
            access that address, tell us so we can arrange appropriate verification.
          </p>
          <p className="mt-3">
            After verifying the request where needed, we delete your account and
            associated personal information from our active systems, including
            account profile data, account-associated inventory, leads, follow-ups
            and uploaded media, except records that must be retained for a
            legitimate legal, security, fraud-prevention or dispute-resolution
            purpose. We explain relevant exceptions and any additional time needed
            when responding.
          </p>
          <p className="mt-3">
            We aim to respond to privacy requests within 30 days and comply with
            any shorter applicable legal deadline. The response will explain
            completion or the next steps; this response target is not a guarantee
            that every backup copy is erased within 30 days.
          </p>
          <p className="mt-3">
            Uninstalling the app or logging out does not delete your account.
            Deleting Your Bhoomi does not delete your Google or Instagram account,
            remove posts already published on third-party services, or
            automatically erase records another person independently needs to
            retain lawfully. You can contact us to request deletion of particular
            information without closing your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            11. Security and processing locations
          </h2>
          <p className="mt-3">
            We use reasonable technical and organisational safeguards designed to
            protect personal information, including limiting access to authorised
            people and providers. No internet transmission or storage system can be
            guaranteed completely secure. Keep your sign-in details and integration
            credentials confidential and report suspected misuse promptly.
          </p>
          <p className="mt-3">
            Our providers may process information in India or other countries. We
            apply safeguards and comply with applicable restrictions when
            information is transferred or processed outside India. If a personal
            data breach requires notice, we will inform affected people and
            relevant authorities as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            12. Your choices and privacy requests
          </h2>
          <p className="mt-3">
            You can update available profile fields in the app, manage selected
            service areas, change device permissions, disconnect optional
            integrations, and request account deletion. You can also contact us to
            request information about our processing, access to your personal
            information, correction, erasure or withdrawal of consent.
          </p>
          <p className="mt-3">
            We handle requests in accordance with applicable law, including rights
            under Indian data protection legislation as relevant provisions take
            effect and apply. We may need proportionate verification to protect
            your information. If we cannot fulfil a request, we will explain the
            reason and any available next step.
          </p>
          <p className="mt-3">
            For privacy concerns or grievances, email{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>{" "}
            with the subject &quot;Privacy Request&quot; or &quot;Privacy
            Grievance&quot;. We aim to respond within 30 days, subject to any
            shorter mandatory deadline. You retain any right to escalate a
            complaint to a competent authority under applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">13. Children</h2>
          <p className="mt-3">
            Our services are intended for adults aged 18 and above dealing with
            property or professional real estate work. We do not knowingly collect
            children&apos;s personal information for account registration. Do not
            enter children&apos;s details into leads, notes or listings. If you
            believe a child&apos;s information has been provided, contact us so we
            can investigate and take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">14. Changes to this policy</h2>
          <p className="mt-3">
            We update the date at the top when this policy changes. For material
            changes, we will provide additional notice where appropriate or
            required. If a new use requires consent, we will obtain it before
            starting that use. Continued use alone does not replace consent
            required by law.
          </p>
          <p className="mt-3">
            The current policy is available at{" "}
            <Link href="/privacy" className="text-stamp underline">
              https://www.yourbhoomi.com/privacy
            </Link>
            . For questions, contact Your Bhoomi at{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>
            ,{" "}
            <a href={LEGAL_PHONE_HREF} className="text-stamp underline">
              {LEGAL_PHONE}
            </a>
            , Banjara Hills, Hyderabad, Telangana, India.
          </p>
        </section>
      </div>
    </div>
  );
}
