"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, PRODUCT_CATEGORIES, COMPANY } from "@/lib/constants";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 lg:py-28" style={{ background: "#f8f8f8" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-4">Our Products & Services</div>
          <h2
            className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Complete Range of Dairy Equipment & Services
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            From individual machines to turnkey dairy plant solutions — we supply, install, and
            support every piece of equipment your dairy plant needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white border-transparent"
                  : "border-[rgba(34,27,24,0.2)] hover:border-[var(--maroon)] hover:text-[var(--maroon)]"
              }`}
              style={
                activeCategory === cat
                  ? { background: "var(--maroon)", color: "#fff" }
                  : { background: "white", color: "var(--ink)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-[rgba(34,27,24,0.08)] card-hover group"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: "var(--maroon)" }}
                >
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-[17px] font-semibold leading-snug"
                  style={{ fontFamily: "Georgia, serif", color: "var(--ink)" }}
                >
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {product.description}
                </p>

                {/* Features */}
                <ul className="mt-4 flex flex-col gap-1.5">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs" style={{ color: "var(--ink-soft)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--gold)" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'm interested in ${encodeURIComponent(product.name)}. Please send me details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full btn-base btn-primary text-sm py-2.5 justify-center"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[16px] mb-4" style={{ color: "var(--ink-soft)" }}>
            Need something not listed? We source and supply all types of dairy equipment.
          </p>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I need a custom dairy equipment enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-gold"
          >
            Contact Us for Custom Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
