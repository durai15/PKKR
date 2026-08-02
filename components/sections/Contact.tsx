"use client";

import { useState, FormEvent } from "react";
import { COMPANY } from "@/lib/constants";

const ENQUIRY_TYPES = [
  "Select Enquiry Type",
  "New Dairy Plant Erection",
  "Milk Process Plant",
  "Ghee Boiler",
  "Milk Storage / Chilling Tank",
  "Steam Boiler",
  "Paneer / Curd Vat",
  "Used Machinery",
  "Lab Materials & SMP Culture",
  "Dairy Accessories & Crates",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "Select Enquiry Type",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hi PKKR Engineering,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nEnquiry: ${formData.enquiryType}\n\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="eyebrow mb-4 justify-center">Contact Us</div>
          <h2
            className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get in Touch With Us
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--ink-soft)" }}>
            Have a project in mind? Need equipment pricing? We&apos;re here to help. Reach out and
            our team will get back to you promptly.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 border rounded-xl overflow-hidden"
          style={{ borderColor: "rgba(34,27,24,0.1)" }}
        >
          {/* Left: Contact info */}
          <div
            className="p-8 lg:p-12 text-white"
            style={{ background: "linear-gradient(135deg, var(--maroon-deep), var(--maroon))" }}
          >
            <h3
              className="text-2xl font-semibold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Contact Information
            </h3>
            <p className="mt-2 text-white/70 text-sm">
              Reach out via any of the channels below.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: COMPANY.addressFull,
                  href: null,
                },
                {
                  icon: "📞",
                  label: "Phone / WhatsApp",
                  value: COMPANY.phoneDisplay,
                  href: `tel:${COMPANY.phone}`,
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                },
                {
                  icon: "🕐",
                  label: "Working Hours",
                  value: COMPANY.workingHours,
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <div
                      className="text-[10.5px] uppercase tracking-widest font-semibold mb-1"
                      style={{ color: "var(--gold-soft)" }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] font-medium text-white hover:text-[var(--gold-soft)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[15px] font-medium text-white/90">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base w-full justify-center"
                style={{ background: "#25D366", color: "#fff", borderColor: "#25D366" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Now
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-base btn-outline-light w-full justify-center"
              >
                📞 Call Us
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 lg:p-12" style={{ background: "white" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{ background: "rgba(37,211,102,0.12)" }}
                >
                  ✅
                </div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: "Georgia, serif" }}>
                  Enquiry Sent!
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                  Your message has been sent via WhatsApp. We will respond within a few hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-base btn-outline text-sm"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "Georgia, serif", color: "var(--ink)" }}
                >
                  Send an Enquiry
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>
                  Fill in the form and we will reply via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] uppercase tracking-wider font-semibold mb-1.5"
                        style={{ color: "var(--ink-soft)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--maroon)] transition-colors"
                        style={{ borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-wider font-semibold mb-1.5"
                        style={{ color: "var(--ink-soft)" }}
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--maroon)] transition-colors"
                        style={{ borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-wider font-semibold mb-1.5"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      Email (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--maroon)] transition-colors"
                      style={{ borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block text-[11px] uppercase tracking-wider font-semibold mb-1.5"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      Enquiry Type *
                    </label>
                    <select
                      id="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--maroon)] transition-colors bg-white"
                      style={{ borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }}
                    >
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t} value={t} disabled={t === "Select Enquiry Type"}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-wider font-semibold mb-1.5"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Describe your requirements, plant capacity, location, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--maroon)] transition-colors resize-none"
                      style={{ borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-base btn-primary w-full justify-center mt-1"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-10 rounded-xl overflow-hidden border border-[rgba(34,27,24,0.1)]" style={{ height: "360px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126087.32736432505!2d78.7502!3d10.3797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa20c7cb2e1dd1%3A0x5c5e3e6f5a5d3e3!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PKKR Engineering location - Pudukkottai, Tamil Nadu"
          />
        </div>
      </div>
    </section>
  );
}
