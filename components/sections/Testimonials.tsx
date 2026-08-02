import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--gold)" : "#ddd"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="eyebrow mb-4 justify-center">Testimonials</div>
          <h2
            className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--ink-soft)" }}>
            Trusted by dairy businesses across Tamil Nadu. Here is what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-xl p-6 border border-[rgba(34,27,24,0.08)] card-hover flex flex-col"
              style={{ boxShadow: "0 4px 20px -8px rgba(34,27,24,0.15)" }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-5 text-5xl font-serif leading-none opacity-10"
                style={{ color: "var(--maroon)" }}
              >
                "
              </div>

              <StarRating rating={t.rating} />

              <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "var(--ink-soft)" }}>
                "{t.text}"
              </p>

              <div
                className="mt-5 pt-4 border-t flex items-center gap-3"
                style={{ borderColor: "rgba(34,27,24,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: "var(--maroon)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
                    {t.name}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink-soft)" }}>
                    {t.role}
                  </div>
                  <div
                    className="text-[10px] mt-0.5 font-semibold"
                    style={{ color: "var(--maroon)" }}
                  >
                    📍 {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="mt-16 rounded-2xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, var(--maroon-deep), var(--maroon-bright))" }}
        >
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to Start Your Dairy Project?
          </h3>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Talk to our experts today. Get free consultation, equipment recommendations, and a
            customised quotation for your dairy plant.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="tel:+916382644316" className="btn-base btn-gold">
              📞 Call +91 63826 44316
            </a>
            <a
              href="https://wa.me/916382644316"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-light"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
