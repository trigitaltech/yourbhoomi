import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const LEGAL_EMAIL = "hello@yourbhoomi.com";
const LEGAL_PHONE = "+91 70138 70575";
const LEGAL_PHONE_HREF = "tel:+917013870575";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms for using the Your Bhoomi website, agent mobile app, property services, listings, integrations, and account features.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Terms and Conditions</h1>
      <p className="mt-4 text-sm text-ink-2">Last updated: 30 October 2026</p>

      <div className="mt-8 space-y-8 text-ink-2">
        <section>
          <h2 className="text-xl text-stamp">1. Agreement</h2>
          <p className="mt-3">
            These Terms and Conditions apply to your use of yourbhoomi.com, the
            Your Bhoomi mobile application and related services.
          </p>
          <p className="mt-3">
            By accepting these terms when creating an account, submitting an
            enquiry or using our services, you agree to follow them. If you do not
            agree, do not use the relevant services.
          </p>
          <p className="mt-3">
            Our{" "}
            <Link href="/privacy" className="text-stamp underline">
              Privacy Policy
            </Link>{" "}
            explains how we handle personal information. Our{" "}
            <Link href="/cookies" className="text-stamp underline">
              Cookie Policy
            </Link>
            {" "}applies to cookies and similar technologies used on the website.
            Acceptance of these terms does not replace any separate consent
            required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">2. Who We Are</h2>
          <p className="mt-3">
            Your Bhoomi is based in Banjara Hills, Hyderabad, India.
          </p>
          <p className="mt-3">
            We provide property-related assistance for NRIs and families with land
            or houses in India, and digital tools that help real estate agents
            organise property inventory, buyer enquiries and related work.
          </p>
          <p className="mt-3">
            Email:{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>
            <br />
            Telephone:{" "}
            <a href={LEGAL_PHONE_HREF} className="text-stamp underline">
              {LEGAL_PHONE}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">3. Our Services</h2>
          <h3 className="mt-4 text-lg text-ink">Website and property services</h3>
          <p className="mt-3">
            Our property services may include visits, inspections, maintenance
            coordination, document coordination, filings and assistance with
            property transfers.
          </p>
          <p className="mt-3">
            Paid work begins only after we confirm the scope and fees in writing. A
            website enquiry does not, by itself, appoint us or create a paid
            engagement.
          </p>
          <p className="mt-3">
            The written agreement for a particular job governs its scope,
            deliverables, charges and payment conditions. If it conflicts with
            these general terms on matters specific to that job, the written
            agreement takes priority. Changes to scope or charges will be
            communicated for agreement before additional work proceeds.
          </p>
          <h3 className="mt-5 text-lg text-ink">Agent mobile application</h3>
          <p className="mt-3">
            The Your Bhoomi mobile application is intended for real estate agents
            operating in India. It provides tools for property inventory, buyer
            leads, requirements, follow-up notes, commission split details,
            professional profiles and service-area selection.
          </p>
          <p className="mt-3">
            Optional features, including matching, communication, AI captions and
            Instagram publishing, are available only where enabled for your account
            and app version.
          </p>
          <p className="mt-3">
            Using the application does not, by itself, appoint Your Bhoomi as your
            broker, property manager, legal representative or payment collection
            agent.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            4. Eligibility and Account Responsibilities
          </h2>
          <p className="mt-3">
            You must be at least 18 years old and legally able to enter into an
            agreement to create an agent account.
          </p>
          <p className="mt-3">
            If you act for an agency, property owner or another person, you must
            have the authority to do so.
          </p>
          <p className="mt-3">You agree to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Provide accurate registration and profile information.</li>
            <li>Keep your contact and professional details current.</li>
            <li>Protect your password and other account credentials.</li>
            <li>
              Use only accounts and third-party integrations you are authorised to
              access.
            </li>
            <li>Notify us promptly if you suspect unauthorised access.</li>
          </ul>
          <p className="mt-3">
            You are responsible for activity you authorise through your account.
            You must not impersonate another person or misrepresent your agency,
            experience, registration or authority.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            5. Property Listings and Inventory
          </h2>
          <p className="mt-3">
            You must own a property or have appropriate authority to list,
            advertise or share information about it.
          </p>
          <p className="mt-3">
            Property descriptions, prices, measurements, locations, photographs
            and availability must be accurate to the best of your knowledge and
            kept up to date. Do not submit misleading, fraudulent or unauthorised
            listings.
          </p>
          <p className="mt-3">
            Saving a property in inventory does not necessarily publish it
            publicly. Where publication or sharing is available, review the
            destination and information before proceeding.
          </p>
          <p className="mt-3">
            A listing, map marker, property status or recommendation does not
            certify ownership, legal title, boundaries, approvals, valuation or
            availability. Relevant information must be independently verified
            before a transaction.
          </p>
          <p className="mt-3">
            If you use the property-owner posting option, any additional listing
            terms presented before publication also apply. Selecting &quot;Listed
            via agent&quot; does not, by itself, appoint an agent or create a
            commission entitlement.
          </p>
          <p className="mt-3">
            You are responsible for compliance with applicable real estate laws,
            including RERA registration, advertising and other obligations where
            applicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            6. Buyer Information and Follow-Ups
          </h2>
          <p className="mt-3">
            Only enter or share customer names, contact details, property
            requirements and other personal information when you have the necessary
            authority and lawful basis.
          </p>
          <p className="mt-3">
            You are responsible for providing required notices and obtaining any
            necessary permissions from the people whose information you submit.
          </p>
          <p className="mt-3">
            Do not use buyer information for unauthorised disclosure, harassment,
            unsolicited bulk messaging or unrelated purposes. Avoid including
            unnecessary sensitive information in notes or uploads.
          </p>
          <p className="mt-3">
            Follow-up notes are records for your use. Saving a note does not
            necessarily schedule a reminder, send a message or contact a customer.
          </p>
          <p className="mt-3">
            Where lead sharing or assignment is available, you must ensure it is
            consistent with the permissions and notices applicable to that
            customer&apos;s information.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            7. Recommendations and Commission Arrangements
          </h2>
          <p className="mt-3">
            Where enabled, matching and recommendation features assist users based
            on available information. They do not guarantee a suitable agent,
            property, customer, appointment, transaction or financial return.
          </p>
          <p className="mt-3">
            Commission percentages and split details entered in the app are records
            of proposed or agreed arrangements, as applicable. An entry alone does
            not establish another party&apos;s acceptance or guarantee payment.
          </p>
          <p className="mt-3">
            The parties involved remain responsible for agreeing and documenting
            brokerage terms, payment obligations, applicable taxes and dispute
            arrangements.
          </p>
          <p className="mt-3">
            Your Bhoomi does not collect, hold or settle brokerage merely because
            commission information is recorded in the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">8. Content You Upload</h2>
          <p className="mt-3">
            You retain your rights in the content you submit, including property
            descriptions, photographs, videos, profile images and notes.
          </p>
          <p className="mt-3">
            You confirm that you have the rights and permissions needed to upload
            the content and authorise its intended use.
          </p>
          <p className="mt-3">
            You grant Your Bhoomi a non-exclusive permission to store, process,
            display and transmit that content as necessary to operate the service,
            carry out your sharing or publishing instructions and comply with legal
            obligations. This does not permit unrelated advertising use of private
            customer records.
          </p>
          <p className="mt-3">
            You must not upload unlawful, fraudulent, abusive, threatening,
            hateful, sexually exploitative or infringing content. Child sexual
            abuse material, impersonation, privacy violations and malicious
            software are prohibited.
          </p>
          <p className="mt-3">
            We may review reported content and restrict or remove content where
            reasonably necessary to address a breach, prevent harm or comply with
            law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">9. AI Features</h2>
          <p className="mt-3">
            Where AI-caption or other AI-text features are enabled, generated
            content is provided as a suggestion. It may contain errors, omissions
            or unsuitable statements.
          </p>
          <p className="mt-3">
            You must review and correct generated content before using or
            publishing it, particularly property prices, measurements, availability,
            amenities and legal claims.
          </p>
          <p className="mt-3">
            Do not submit another person&apos;s personal information to an AI
            feature without an appropriate lawful basis and any required notice or
            permission.
          </p>
          <p className="mt-3">
            Where you connect your own provider account or API key, you must be
            authorised to use it. Provider terms, usage limits and charges may
            apply separately.
          </p>
          <p className="mt-3">
            AI output is not legal, tax, valuation or investment advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            10. Third-Party Services and Social Publishing
          </h2>
          <p className="mt-3">
            The application may use or connect with services such as Google
            sign-in, maps, AI providers and Instagram. Their applicable terms and
            privacy practices also govern your use of those services.
          </p>
          <p className="mt-3">
            Connect only accounts you are authorised to control. Where publishing
            is enabled, review the content and destination before authorising
            publication.
          </p>
          <p className="mt-3">
            You are responsible for obtaining rights to photographs, videos, music,
            captions and other material you publish.
          </p>
          <p className="mt-3">
            Third-party outages, account restrictions or permission changes may
            affect availability. Disconnecting an integration does not delete your
            Google or Instagram account or automatically remove content already
            published on an external platform.
          </p>
          <p className="mt-3">
            Your Bhoomi remains responsible for its own obligations under
            applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">11. Account Deletion</h2>
          <p className="mt-3">
            You can submit an account-deletion request in the mobile application
            through:
          </p>
          <p className="mt-3 font-medium text-ink">
            Profile{" → "}Account{" → "}Delete account
          </p>
          <p className="mt-3">
            Review your account details and confirm the request. Additional written
            feedback is optional.
          </p>
          <p className="mt-3">
            You may also request account deletion without using or reinstalling the
            app by emailing{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>{" "}
            with the subject &quot;Your Bhoomi Account Deletion Request.&quot; Use
            your registered email address where possible. We may reasonably verify
            account ownership before acting on a request.
          </p>
          <p className="mt-3">
            Submitting a request does not mean deletion has already been completed.
            We will process verified requests within a reasonable period, subject
            to applicable legal requirements, and communicate any necessary
            verification or delay.
          </p>
          <p className="mt-3">
            Deletion covers your account and associated personal data, subject to
            specific lawful retention requirements. Information retained for
            legitimate legal, security or fraud-prevention purposes will be handled
            according to our Privacy Policy and applicable law.
          </p>
          <p className="mt-3">
            Associated records may include profile details, avatar, property
            information, lead records, follow-up notes and stored integration
            credentials. Shared records and information involving other people will
            be handled consistently with their rights and applicable law.
          </p>
          <p className="mt-3">
            Once deletion is completed, you will lose access to the account. Keep
            copies of information you are entitled to retain before requesting
            deletion.
          </p>
          <p className="mt-3">
            Logging out or uninstalling the app does not delete your account.
            Deleting your Your Bhoomi account does not delete external Google or
            Instagram accounts or automatically remove posts already published
            there.
          </p>
        </section>

        <section id="disclaimer">
          <h2 className="text-xl text-stamp">
            12. Property Inspections and Professional Advice
          </h2>
          <p className="mt-3">
            Guides, FAQs, checklists, pricing examples, chat responses and other
            general information do not replace advice from a qualified lawyer,
            chartered accountant, surveyor or other relevant professional.
          </p>
          <p className="mt-3">
            Property laws, stamp duty, tax and repatriation requirements may differ
            by location and change over time. Obtain appropriate professional
            advice before acting.
          </p>
          <p className="mt-3">
            Field inspections record what our representative could reasonably
            observe at the time of the visit. Security reports, the Land Security
            Score, the Transfer Readiness Check and document reviews are
            informational indicators based on the information available.
          </p>
          <p className="mt-3">
            They are not legal title certifications, boundary surveys or legal
            opinions. Where an advocate, surveyor or chartered accountant is
            engaged for your work, we will explain their role.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">13. Power of Attorney</h2>
          <p className="mt-3">
            Where a Power of Attorney is used, its authority is limited to the acts
            and properties described in the deed.
          </p>
          <p className="mt-3">
            We do not take a General Power of Attorney over your estate. You remain
            the owner and must inform us promptly if the Power of Attorney is
            revoked, amended or otherwise ceases to be valid.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">14. Website Property Pages</h2>
          <p className="mt-3">
            Pages describing properties under our care are not offers to sell
            unless expressly stated.
          </p>
          <p className="mt-3">
            Website pages marked &quot;coming soon&quot; do not represent an
            available service. These labels apply to the relevant website pages and
            do not determine which inventory or other features are available in the
            agent application.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            15. Acceptable Use and Intellectual Property
          </h2>
          <p className="mt-3">
            Do not misuse the website or app, submit false enquiries, scrape
            personal information, interfere with service operation, bypass access
            controls or attempt unauthorised access.
          </p>
          <p className="mt-3">
            Your Bhoomi&apos;s software, branding, website design and original
            materials belong to us or our licensors unless stated otherwise.
          </p>
          <p className="mt-3">
            You may share links to our website. You may not reproduce our guides,
            software or other protected materials for a commercial product without
            permission or another lawful right.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            16. Fees and Service Availability
          </h2>
          <p className="mt-3">
            Charges for paid services or features will be disclosed before you
            agree to pay. These terms alone do not authorise a charge.
          </p>
          <p className="mt-3">Third-party service charges may apply separately.</p>
          <p className="mt-3">
            We may update or maintain the website and application, and availability
            may be affected by maintenance or circumstances outside our reasonable
            control. We will provide reasonable notice of material changes where
            practicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">
            17. Suspension and Complaints
          </h2>
          <p className="mt-3">
            We may restrict or suspend access where reasonably necessary to address
            misuse, security concerns, a material breach of these terms or legal
            requirements.
          </p>
          <p className="mt-3">
            Where lawful and appropriate, we will explain the action and provide a
            way to raise a concern or request review. Suspension does not remove
            rights you have under applicable law.
          </p>
          <p className="mt-3">
            To report inaccurate listings, unauthorised content, privacy concerns
            or other problems, use the relevant in-app reporting option where
            available or email{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>
            .
          </p>
          <p className="mt-3">
            Include enough information to identify the issue, but do not send
            unnecessary personal documents. We will handle complaints within
            applicable legal timelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">18. Liability</h2>
          <p className="mt-3">
            We will exercise reasonable care in providing our services. We do not
            guarantee uninterrupted access, the accuracy of information supplied by
            other users or a successful property transaction.
          </p>
          <p className="mt-3">
            We are not responsible for loss caused solely by circumstances outside
            our reasonable control, such as government-office delays, undisclosed
            title defects or independent third-party conduct. This does not exclude
            responsibility for our own acts or omissions where the law makes us
            responsible.
          </p>
          <p className="mt-3">
            For separately commissioned paid property work, our liability is
            limited to the fee paid for the relevant job to the extent permitted by
            law and subject to the written agreement for that work. That limit does
            not automatically apply to use of the agent application.
          </p>
          <p className="mt-3">
            Nothing in these terms excludes liability that cannot lawfully be
            excluded or restricts mandatory consumer or other statutory rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">19. Governing Law</h2>
          <p className="mt-3">
            These terms are governed by the laws of India.
          </p>
          <p className="mt-3">
            Courts with competent jurisdiction in Hyderabad, Telangana will hear
            disputes, subject to any mandatory right you have to approach another
            competent court, regulator or statutory forum.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">20. Changes to These Terms</h2>
          <p className="mt-3">
            We may update these terms to reflect changes in our services or legal
            requirements. The date at the top identifies the latest version.
          </p>
          <p className="mt-3">
            We will notify users of material changes through an appropriate channel
            and obtain renewed acceptance where required. Changes will not
            retrospectively remove rights that have already accrued.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">21. Contact Us</h2>
          <p className="mt-3">
            For questions about these terms, support, complaints or account-deletion
            requests:
          </p>
          <address className="mt-3 not-italic">
            Your Bhoomi
            <br />
            Banjara Hills, Hyderabad, India
            <br />
            Email:{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-stamp underline">
              {LEGAL_EMAIL}
            </a>
            <br />
            Telephone:{" "}
            <a href={LEGAL_PHONE_HREF} className="text-stamp underline">
              {LEGAL_PHONE}
            </a>
          </address>
        </section>
      </div>
    </div>
  );
}
