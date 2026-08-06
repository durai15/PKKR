import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY.fullName} — How we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold mb-3 pb-1 border-b border-[var(--steel-light)]"
        style={{ color: "var(--maroon)" }}>
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
        {children}
      </div>
    </section>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 lg:py-24">
      <div className="max-w-[820px] mx-auto px-6 lg:px-8">

        {/* Back link */}
        <Link href="/"
          className="inline-flex items-center gap-1.5 text-sm mb-8 hover:underline"
          style={{ color: "var(--maroon)" }}>
          ← Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-black mb-2"
          style={{ color: "var(--maroon)", fontFamily: "Georgia, serif" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--ink-soft)" }}>
          Last updated: January 2025 &nbsp;·&nbsp; {COMPANY.fullName}
        </p>

        <div className="space-y-8">

          <Section title="1. Information We Collect">
            <p>When you contact {COMPANY.fullName} via phone, WhatsApp, or email, we may collect:</p>
            <Ul items={[
              "Your name and business name",
              "Phone number and email address",
              "Project requirements and equipment specifications",
              "Location and delivery address (if applicable)",
            ]} />
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information only to:</p>
            <Ul items={[
              "Respond to your inquiries about dairy equipment and services",
              "Provide quotations and technical specifications",
              "Arrange site visits and equipment installations",
              "Send updates about your orders or projects",
            ]} />
            <p className="font-semibold" style={{ color: "var(--ink)" }}>
              We do NOT sell your data, send spam, or share your information with third parties for marketing purposes.
            </p>
          </Section>

          <Section title="3. Data Storage & Security">
            <p>
              Your contact information is stored securely and accessed only by authorized personnel.
              We retain your data only as long as necessary to fulfill business purposes or as required by law.
            </p>
          </Section>

          <Section title="4. Cookies & Analytics">
            <p>
              Our website does not use cookies or tracking analytics. No personal data is collected through website browsing.
            </p>
          </Section>

          <Section title="5. Your Rights">
            <p>You have the right to:</p>
            <Ul items={[
              "Request a copy of the information we hold about you",
              "Request correction or deletion of your data",
              "Opt out of future communications",
            ]} />
          </Section>

          <Section title="6. Contact Us">
            <p>For any privacy-related questions:</p>
            <div className="bg-[#f9f7f5] rounded-lg p-4 text-[15px] space-y-1"
              style={{ color: "var(--ink)" }}>
              <p className="font-semibold">{COMPANY.fullName}</p>
              <p>{COMPANY.addressFull}</p>
              <p>
                Phone:{" "}
                <a href={`tel:${COMPANY.phone}`} className="underline" style={{ color: "var(--maroon)" }}>
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${COMPANY.email}`} className="underline" style={{ color: "var(--maroon)" }}>
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </Section>

        </div>

        {/* Footer note */}
        <p className="mt-12 pt-6 border-t border-[var(--steel-light)] text-sm"
          style={{ color: "var(--ink-soft)" }}>
          © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.{" "}
          <Link href="/terms" className="underline hover:text-[var(--maroon)]">Terms & Conditions</Link>
        </p>
      </div>
    </main>
  );
}
