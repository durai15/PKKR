"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[rgba(34,27,24,0.1)]"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px] lg:h-[84px]">
          {/* Brand Logo - All Screen Sizes */}
          <Link 
            href="#hero" 
            onClick={closeMenu} 
            className="flex items-center flex-shrink-0 relative"
            aria-label="PKKR Engineering & PKR Traders - Dairy Equipment Specialists, Pudukkottai"
          >
            {/* Logo Image - Responsive across all devices */}
            <img
              src="/logo-horizontal.svg"
              alt="PKKR Engineering & PKR Traders - Dairy Equipment, Plant Erection & Machinery, Pudukkottai, Tamil Nadu"
              className="h-14 sm:h-16 lg:h-[72px] w-auto"
              style={{ borderRadius: '6px' }}
              width="320"
              height="72"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-[var(--ink)] group py-1"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-base btn-outline text-sm px-4 py-2.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.45.69 3.57a1 1 0 01-.25 1.03l-2.22 2.19z"/>
              </svg>
              Call Now
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary text-sm px-4 py-2.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get a Quote
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--ink)] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--ink)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--ink)] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-[rgba(34,27,24,0.1)] px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-semibold text-[var(--ink)] py-3 border-b border-[rgba(34,27,24,0.08)] hover:text-[var(--maroon)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-5">
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-base btn-outline w-full justify-center"
              onClick={closeMenu}
            >
              📞 Call: {COMPANY.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary w-full justify-center"
              onClick={closeMenu}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
