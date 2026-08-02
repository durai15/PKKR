import Link from "next/link";
import { COMPANY, NAV_LINKS, PRODUCTS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1d1613", color: "#9c8f83" }} className="pt-14 pb-6">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div
              className="font-black text-2xl"
              style={{ fontFamily: "Georgia, serif", color: "#fff" }}
            >
              PKKR<span style={{ color: "var(--gold)" }}>.</span>
            </div>
            <p className="text-sm leading-relaxed mt-3 text-[#9c8f83] max-w-xs">
              Trusted supplier and erector of dairy equipment and milk processing machinery in
              Pudukkottai, Tamil Nadu. Serving the dairy industry since {COMPANY.established}.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--maroon)] transition-colors"
                aria-label="Phone"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.45.69 3.57a1 1 0 01-.25 1.03l-2.22 2.19z"/>
                </svg>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              className="text-[11px] uppercase tracking-widest font-bold mb-4"
              style={{ color: "var(--gold-soft)" }}
            >
              Quick Links
            </h5>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#c9beb2] hover:text-[var(--gold-soft)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5
              className="text-[11px] uppercase tracking-widest font-bold mb-4"
              style={{ color: "var(--gold-soft)" }}
            >
              Our Products
            </h5>
            <ul className="flex flex-col gap-2.5">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-[14px] text-[#c9beb2] hover:text-[var(--gold-soft)] transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="text-[11px] uppercase tracking-widest font-bold mb-4"
              style={{ color: "var(--gold-soft)" }}
            >
              Contact Us
            </h5>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">📍</span>
                <span className="text-[14px] text-[#c9beb2] leading-relaxed">{COMPANY.addressFull}</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[var(--gold)] flex-shrink-0">📞</span>
                <a href={`tel:${COMPANY.phone}`} className="text-[14px] text-[#c9beb2] hover:text-[var(--gold-soft)] transition-colors">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[var(--gold)] flex-shrink-0">✉️</span>
                <a href={`mailto:${COMPANY.email}`} className="text-[14px] text-[#c9beb2] hover:text-[var(--gold-soft)] transition-colors break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[var(--gold)] flex-shrink-0">🕐</span>
                <span className="text-[14px] text-[#c9beb2]">{COMPANY.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-xs text-[#6b5f59]">
          <p>© {year} {COMPANY.fullName}. All rights reserved.</p>
          <p>Dairy Equipment · Erection Work · Lab Materials · SMP Culture · Machinery Trading</p>
        </div>
      </div>
    </footer>
  );
}
