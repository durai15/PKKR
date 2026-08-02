"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-200"
      style={{
        borderColor: isOpen ? "var(--maroon)" : "rgba(34,27,24,0.12)",
        background: isOpen ? "#fff" : "#f5f5f5",
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-[15px] leading-snug"
          style={{ color: isOpen ? "var(--maroon)" : "var(--ink)" }}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          style={{ background: isOpen ? "var(--maroon)" : "var(--steel-light)" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={isOpen ? "white" : "var(--ink)"}
          >
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        </span>
      </button>

      <div
        className="faq-answer"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-28" style={{ background: "#f8f8f8" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-24">
            <div className="eyebrow mb-4">FAQ</div>
            <h2
              className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Have questions about our dairy equipment, services, or erection projects? Here are the
              most common questions we receive from clients.
            </p>
            <p className="mt-4 text-base" style={{ color: "var(--ink-soft)" }}>
              Can&apos;t find your answer?{" "}
              <a
                href="https://wa.me/916382644316"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:no-underline"
                style={{ color: "var(--maroon)" }}
              >
                WhatsApp us directly
              </a>
              .
            </p>

            {/* Quick contact */}
            <div
              className="mt-8 p-5 rounded-xl border"
              style={{ borderColor: "rgba(34,27,24,0.1)", background: "white" }}
            >
              <div className="font-semibold text-sm mb-1" style={{ color: "var(--ink)" }}>
                Need immediate help?
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--ink-soft)" }}>
                Call or WhatsApp our team directly for quick answers.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+916382644316" className="btn-base btn-primary text-sm py-2.5">
                  📞 Call +91 63826 44316
                </a>
                <a
                  href="https://wa.me/916382644316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-gold text-sm py-2.5"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
