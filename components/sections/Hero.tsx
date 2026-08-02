"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

/* ── Slide data ─────────────────────────────────────────────── */
const SLIDES = [
  {
    src: "/images/stainless-steel-silos.jpg",
    alt: "Large stainless steel dairy processing silos",
    heading: "Complete Dairy Plant Solutions",
    sub: "End-to-end erection, equipment supply & commissioning",
  },
  {
    src: "/images/milk-process-plant-01.jpg",
    alt: "Automatic milk process plant",
    heading: "Milk Processing Plants",
    sub: "Fully automated — 500 LPH to 50,000 LPH capacity",
  },
  {
    src: "/images/milk-chilling-tank.jpg",
    alt: "Bulk milk chilling and storage tank",
    heading: "Milk Chilling & Storage Tanks",
    sub: "Insulated SS tanks — 1,000 L to 50,000 L capacity",
  },
  {
    src: "/images/ghee-boiler-500l.jpg",
    alt: "500 litre ghee boiler",
    heading: "Ghee Boilers & Dairy Equipment",
    sub: "SS 304 food-grade construction — motor-driven agitator",
  },
  {
    src: "/images/industrial-steam-boiler.jpg",
    alt: "Industrial steam boiler",
    heading: "Industrial Steam Boilers",
    sub: "IBR-approved — coal, oil & gas fired — high efficiency",
  },
  {
    src: "/images/dairy-processing-plant.jpg",
    alt: "Dairy processing plant interior",
    heading: "Turnkey Dairy Plant Erection",
    sub: "Design → Supply → Install → Commission — one partner",
  },
];

/* ── Chevron icons ──────────────────────────────────────────── */
function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setTransitioning(false), 700);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  /* Auto-advance every 5 s — resets when user clicks */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot  = (i: number) => { goTo(i); resetTimer(); };

  return (
    <>
      {/* ── FULL-WIDTH HERO CAROUSEL ─────────────────────────── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(420px, 60vw, 680px)" }}
        aria-label="Hero image carousel"
      >
        {/* ── SLIDES ─────────────────────────────────────────── */}
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: idx === current ? 1 : 0,
              zIndex: idx === current ? 1 : 0,
              pointerEvents: idx === current ? "auto" : "none",
            }}
            aria-hidden={idx !== current}
          >
            {/* Background image — fills 100% width & height */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={idx === 0}
              quality={85}
            />

            {/* Dark gradient overlay — bottom-heavy, text readable */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.10) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
              }}
            />

            {/* Slide text content */}
            <div
              className="absolute inset-0 flex items-center"
              style={{ zIndex: 2 }}
            >
              <div className="w-full max-w-[1180px] mx-auto px-6 lg:px-8">
                <div className="max-w-xl">
                  {/* Eyebrow */}
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4"
                    style={{ color: "var(--gold-soft)" }}
                  >
                    PKKR Engineering &amp; PKR Traders — Pudukkottai
                  </p>

                  {/* Main heading */}
                  <h1
                    className="font-bold leading-tight text-white"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(26px, 4vw, 54px)",
                      textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                    }}
                  >
                    {slide.heading}
                  </h1>

                  {/* Sub-text */}
                  <p
                    className="mt-3 font-medium leading-relaxed"
                    style={{
                      fontSize: "clamp(14px, 1.6vw, 18px)",
                      color: "rgba(255,255,255,0.88)",
                      textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    {slide.sub}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 mt-7">
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-gold"
                      style={{ fontSize: "13px", padding: "11px 22px" }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp Us Now
                    </a>
                    <a
                      href="#products"
                      className="btn-base btn-outline-light"
                      style={{ fontSize: "13px", padding: "11px 22px" }}
                    >
                      Explore Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ── LEFT ARROW ─────────────────────────────────────── */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            width: "clamp(38px, 4vw, 52px)",
            height: "clamp(38px, 4vw, 52px)",
            background: "rgba(0,0,0,0.35)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            backdropFilter: "blur(4px)",
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>

        {/* ── RIGHT ARROW ────────────────────────────────────── */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            width: "clamp(38px, 4vw, 52px)",
            height: "clamp(38px, 4vw, 52px)",
            background: "rgba(0,0,0,0.35)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            backdropFilter: "blur(4px)",
          }}
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>

        {/* ── DOT INDICATORS ─────────────────────────────────── */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2"
          role="tablist"
          aria-label="Slide indicators"
        >
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDot(idx)}
              role="tab"
              aria-selected={idx === current}
              aria-label={`Go to slide ${idx + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: idx === current ? "28px" : "9px",
                height: "9px",
                background: idx === current
                  ? "#ffffff"
                  : "rgba(255,255,255,0.45)",
                border: idx === current
                  ? "none"
                  : "1px solid rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>

        {/* ── SLIDE COUNTER (top-right) ───────────────────────── */}
        <div
          className="absolute top-5 right-5 z-10 text-white font-mono text-sm"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(4px)",
            padding: "4px 12px",
            borderRadius: "100px",
            border: "1px solid rgba(255,255,255,0.25)",
            fontSize: "12px",
            letterSpacing: "0.05em",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </section>

      {/* ── STATS BAR (sits directly below carousel, white bg) ── */}
      <div className="w-full bg-white border-b border-[rgba(34,27,24,0.08)]">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5">
            {[
              { value: "20+",   label: "Years Experience" },
              { value: "500+",  label: "Plants Erected" },
              { value: "1000+", label: "Happy Clients" },
              { value: "100%",  label: "Quality Assured" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    className="hidden sm:block w-px h-8"
                    style={{ background: "rgba(34,27,24,0.12)" }}
                  />
                )}
                <div>
                  <div
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "Georgia, serif",
                      color: "var(--maroon)",
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[11px] font-semibold uppercase tracking-wider mt-1"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Right side: quick-contact chips */}
            <div className="flex flex-wrap gap-3 ml-auto">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-colors hover:border-[var(--maroon)] hover:text-[var(--maroon)]"
                style={{ borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }}
              >
                📞 {COMPANY.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
                style={{ background: "#25D366" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES STRIP (maroon background) ──────────────── */}
      <div style={{ background: "var(--maroon-deep)", padding: "18px 0" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-3 items-center">
            {[
              "🏭 Dairy Plant Erection",
              "⚙️ Milk Processing Machines",
              "🫙 Ghee & Butter Equipment",
              "🔬 Lab Materials & Culture",
              "🛒 New & Used Machinery",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[12.5px] font-semibold tracking-wide"
                style={{ color: "#f3e9d3" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--gold)" }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
