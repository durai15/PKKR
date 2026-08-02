"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

const CATEGORIES = ["All", "Plant", "Storage", "Processing", "Ghee", "Boiler", "Accessories"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightbox, setLightbox] = useState<null | { src: string; caption: string }>(null);

  const filtered =
    activeTab === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  return (
    <section id="gallery" className="py-24 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="eyebrow mb-4">Gallery</div>
            <h2
              className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Equipment in Action
            </h2>
            <p className="mt-3 text-base" style={{ color: "var(--ink-soft)" }}>
              A glimpse of the dairy equipment and machinery we supply, install, and commission.
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeTab === cat ? "text-white border-transparent" : "hover:border-[var(--maroon)] hover:text-[var(--maroon)]"
                }`}
                style={
                  activeTab === cat
                    ? { background: "var(--maroon)" }
                    : { background: "#f5f5f5", borderColor: "rgba(34,27,24,0.2)", color: "var(--ink)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((img, idx) => (
            <div
              key={img.src + idx}
              className="break-inside-avoid gallery-item relative rounded-xl overflow-hidden cursor-pointer group border border-[rgba(34,27,24,0.06)]"
              style={{ boxShadow: "0 10px 30px -15px rgba(34,27,24,0.25)" }}
              onClick={() => setLightbox({ src: img.src, caption: img.caption })}
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={600}
                height={400}
                className="w-full object-cover"
                style={{ height: idx % 3 === 0 ? "280px" : "220px" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.caption}</span>
              </div>
              {/* Category badge */}
              <div
                className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white"
                style={{ background: "rgba(92,14,24,0.85)" }}
              >
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-[var(--gold)] transition-colors z-10"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <Image
              src={lightbox.src}
              alt={lightbox.caption}
              width={1200}
              height={800}
              className="w-full rounded-lg object-contain max-h-[80vh]"
            />
            <p className="text-white/80 text-center mt-3 text-sm">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
