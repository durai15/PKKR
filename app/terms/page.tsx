import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${COMPANY.fullName} — Policies for equipment supply, installation, warranties, and business transactions.`,
  alternates: { canonical: "/terms" },
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

export default function TermsPage() {
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
          Terms & Conditions
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--ink-soft)" }}>
          Last updated: January 2025 &nbsp;·&nbsp; {COMPANY.fullName}
        </p>

        <div className="space-y-8">

          <Section title="1. Services Offered">
            <p>{COMPANY.fullName} provides:</p>
            <Ul items={[
              "Dairy equipment supply (new and used machinery)",
              "Dairy plant erection and commissioning",
              "Laboratory materials and consumables",
              "SMP (Skim Milk Powder) and dairy cultures",
              "Technical consultation and after-sales support",
            ]} />
          </Section>

          <Section title="2. Quotations & Pricing">
            <Ul items={[
              "All quotations are valid for 30 days from the date of issue",
              "Prices are subject to change based on market conditions",
              "Final pricing will be confirmed before order placement",
              "Custom equipment specifications may require additional costs",
            ]} />
          </Section>

          <Section title="3. Orders & Payment">
            <Ul items={[
              "Advance payment (typically 30–50%) required to confirm orders",
              "Balance payment due before delivery or installation completion",
              "Payment modes: Bank transfer, cheque, or cash (as agreed)",
              "GST applicable as per government regulations",
            ]} />
          </Section>

          <Section title="4. Delivery & Installation">
            <Ul items={[
              "Delivery timelines depend on equipment availability and customization",
              "Installation services are quoted separately for plant erection projects",
              "Client must provide site access, power, and water connections",
              "Delays due to client-side issues may incur additional charges",
            ]} />
          </Section>

          <Section title="5. Warranty & Returns">
            <div className="space-y-2">
              <p><span className="font-semibold" style={{ color: "var(--ink)" }}>New Equipment:</span> Manufacturer's warranty applies (typically 6–12 months)</p>
              <p><span className="font-semibold" style={{ color: "var(--ink)" }}>Used Equipment:</span> Sold as-is, with no warranty unless explicitly stated in writing</p>
              <p><span className="font-semibold" style={{ color: "var(--ink)" }}>Returns:</span> Equipment cannot be returned once delivered, except in cases of manufacturing defects</p>
              <p><span className="font-semibold" style={{ color: "var(--ink)" }}>After-Sales:</span> Post-installation support available for troubleshooting and maintenance</p>
            </div>
          </Section>

          <Section title="6. Liability">
            <Ul items={[
              "We are not liable for production losses or business interruptions",
              "Liability is limited to the value of the equipment supplied",
              "Proper operation guidelines must be followed by the client",
            ]} />
          </Section>

          <Section title="7. Dispute Resolution">
            <p>
              Any disputes will be resolved through mutual discussion first.
              If unresolved, the matter will be subject to the jurisdiction of courts in{" "}
              <strong style={{ color: "var(--ink)" }}>Pudukkottai, Tamil Nadu</strong>.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p>For any terms-related queries:</p>
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
          <Link href="/privacy" className="underline hover:text-[var(--maroon)]">Privacy Policy</Link>
        </p>
      </div>
    </main>
  );
}
