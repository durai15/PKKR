import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ boxShadow: "0 30px 60px -30px rgba(34,27,24,0.4)" }}
            >
              <Image
                src="/images/founders-team.jpg"
                alt="PKKR Engineering founders — Father and son team from Pudukkottai"
                width={560}
                height={480}
                className="w-full object-cover"
                style={{ height: "clamp(320px, 38vw, 480px)", width: "100%", display: "block" }}
              />
              {/* Gold inner border overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "1px solid rgba(201,162,75,0.45)",
                  margin: "12px",
                  borderRadius: "4px",
                }}
              />
            </div>
            {/* Experience badge */}
            <div
              className="absolute bottom-6 right-[-12px] lg:right-[-24px] bg-white rounded-lg p-5 text-center shadow-xl border border-[var(--steel-light)]"
            >
              <div
                className="text-4xl font-bold leading-none"
                style={{ fontFamily: "Georgia, serif", color: "var(--maroon)" }}
              >
                {COMPANY.established}
              </div>
              <div
                className="text-[10px] uppercase tracking-widest mt-1 font-semibold"
                style={{ color: "var(--ink-soft)" }}
              >
                Established
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="eyebrow mb-4">About Us</div>

            <h2
              className="text-[clamp(26px,3.2vw,40px)] font-semibold leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A Family Business Built on Trust & Dairy Expertise
            </h2>

            <p className="mt-5 text-[16.5px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Founded in Pudukkottai, Tamil Nadu, <strong>PKKR Engineering & PKR Traders</strong> is
              a family-run business with over two decades of experience in the dairy equipment
              industry. We combine the hands-on knowledge of our founders with a passionate team of
              engineers and technicians.
            </p>

            <p className="mt-4 text-[16.5px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Through <strong>PKKR Engineering</strong>, we undertake complete dairy plant erection
              projects — from site planning and equipment selection to installation and commissioning.
              Through <strong>PKR Traders</strong>, we supply dairy equipment, lab materials, SMP
              powder, bacterial cultures, and both new and certified pre-owned machinery.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              {[
                { icon: "🏭", label: "Plant Erection", desc: "Turnkey dairy plant setup" },
                { icon: "⚙️", label: "Equipment Supply", desc: "New & used machinery" },
                { icon: "🔬", label: "Lab Materials", desc: "SMP & culture supply" },
                { icon: "🔧", label: "After-Sales", desc: "Maintenance & support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 items-start p-4 rounded-lg border"
                  style={{ borderColor: "rgba(34,27,24,0.1)", background: "#f5f5f5" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
                      {item.label}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--ink-soft)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature block */}
            <div
              className="mt-8 pt-6 flex items-center gap-5 border-t"
              style={{ borderColor: "rgba(34,27,24,0.12)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ background: "var(--maroon)" }}
              >
                P
              </div>
              <div>
                <div
                  className="text-lg font-semibold italic"
                  style={{ fontFamily: "Georgia, serif", color: "var(--maroon)" }}
                >
                  PKKR Engineering & PKR Traders
                </div>
                <div
                  className="text-[10.5px] uppercase tracking-wider font-semibold mt-0.5"
                  style={{ color: "var(--ink-soft)" }}
                >
                  Pudukkottai, Tamil Nadu · Est. {COMPANY.established}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
