import { WHY_FEATURES, INDUSTRIES } from "@/lib/constants";

export default function WhyUs() {
  return (
    <>
      {/* Why Choose Us */}
      <section
        id="why-us"
        className="py-24 lg:py-28"
        style={{ background: "var(--maroon-deep)", color: "#f3ece0" }}
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div
              className="eyebrow mb-4"
              style={{ color: "var(--gold-soft)" }}
            >
              <span
                className="w-5 h-0.5 flex-shrink-0"
                style={{ background: "var(--gold-soft)", display: "inline-block" }}
              />
              Why Choose Us
            </div>
            <h2
              className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Trusted Partner for Your Dairy Business
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "#d9c9ae" }}>
              Hundreds of dairy units across Tamil Nadu rely on us for equipment, erection, and
              ongoing support. Here is why they keep coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="border-t-2 pt-5 group"
                style={{ borderColor: "var(--gold)" }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#cdbda0" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="eyebrow mb-4 justify-center">Industries We Serve</div>
            <h2
              className="text-[clamp(24px,2.8vw,36px)] font-semibold leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Serving Every Corner of the Dairy Sector
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center text-center p-6 rounded-xl border card-hover"
                style={{
                  borderColor: "rgba(34,27,24,0.1)",
                  background: "#f5f5f5",
                }}
              >
                <span className="text-4xl mb-3">{industry.icon}</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20" style={{ background: "#f8f8f8" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="eyebrow mb-4 justify-center">Our Process</div>
            <h2
              className="text-[clamp(24px,2.8vw,36px)] font-semibold leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              How We Deliver Your Dairy Plant
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Requirement Analysis", desc: "Understand your plant capacity, product range, and site constraints." },
              { step: "02", title: "Equipment Planning", desc: "Select the right machinery mix and prepare layout drawings." },
              { step: "03", title: "Supply & Procurement", desc: "Source certified equipment from trusted manufacturers." },
              { step: "04", title: "Erection & Installation", desc: "On-site assembly, pipework, electrical, and civil coordination." },
              { step: "05", title: "Testing & Handover", desc: "Commissioning, trial runs, staff training, and handover." },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 4 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-x-1/2 z-0"
                    style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
                  />
                )}
                <div className="relative z-10 bg-white rounded-xl p-5 border border-[rgba(34,27,24,0.1)] h-full">
                  <div
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "Georgia, serif", color: "var(--maroon)" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
