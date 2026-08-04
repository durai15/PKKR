"use client";

import { useState, useRef } from "react";

const VIDEOS_ROW1 = [
  {
    src: "/videos/dairy-plant-overview.mp4",
    title: "Dairy Plant Overview",
    description: "Complete walk-through of a dairy processing plant we erected and commissioned.",
    thumbnail: "/images/stainless-steel-silos.jpg",
  },
  {
    src: "/videos/milk-processing-demo.mp4",
    title: "Milk Processing Demo",
    description: "Live demonstration of milk processing and pasteurization equipment in operation.",
    thumbnail: "/images/milk-process-plant-01.jpg",
  },
  {
    src: "/videos/equipment-installation.mp4",
    title: "Equipment Installation",
    description: "Time-lapse of dairy equipment installation, pipework, and commissioning process.",
    thumbnail: "/images/milk-chilling-tank.jpg",
  },
];

const VIDEOS_ROW2 = [
  {
    src: "/videos/milk-backing.mp4",
    title: "Milk Backing Process",
    description: "Detailed view of the milk backing process at our dairy plant facility.",
    thumbnail: "/images/milk-agitator-vat.jpg",
  },
  {
    src: "/videos/1kl-plant-erection-finished.mp4",
    title: "1 KL Plant Erection – Completed",
    description: "Full erection and finishing work of a 1,000-litre dairy plant installation.",
    thumbnail: "/images/milk-process-plant-02.jpg",
  },
];

function VideoCard({
  video,
}: {
  video: { src: string; title: string; description: string; thumbnail: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play().catch(() => setError(true));
        setPlaying(true);
      }
    }
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-[rgba(34,27,24,0.08)] bg-white card-hover"
      style={{ boxShadow: "0 10px 30px -15px rgba(34,27,24,0.2)" }}
    >
      <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
        {!error ? (
          <>
            <video
              ref={videoRef}
              src={video.src}
              className="w-full h-full object-cover"
              playsInline
              loop
              onEnded={() => setPlaying(false)}
              poster={video.thumbnail}
              preload="metadata"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group transition-all"
              style={{
                background: playing ? "transparent" : "rgba(0,0,0,0.3)",
              }}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {!playing && (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                  style={{ background: "var(--maroon)", boxShadow: "0 8px 24px rgba(92,14,24,0.5)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
              {playing && (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </div>
              )}
            </button>
          </>
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center text-white/60 p-8 text-center"
            style={{ background: "#1a1a1a" }}
          >
            <span className="text-4xl mb-3">🎬</span>
            <p className="text-sm">{video.title}</p>
            <p className="text-xs mt-1 opacity-60">Video preview available on deployment</p>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3
          className="font-semibold text-base"
          style={{ fontFamily: "Georgia, serif", color: "var(--ink)" }}
        >
          {video.title}
        </h3>
        <p className="mt-1.5 text-sm" style={{ color: "var(--ink-soft)" }}>
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function VideoGallery() {
  return (
    <section id="video-gallery" className="py-24 lg:py-28" style={{ background: "#f8f8f8" }}>
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <div className="eyebrow mb-4">Video Gallery</div>
          <h2
            className="text-[clamp(26px,3.2vw,42px)] font-semibold leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            See Our Work in Motion
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--ink-soft)" }}>
            Watch our dairy plant erection projects, equipment demonstrations, and installation
            processes come to life.
          </p>
        </div>

        {/* Row 1 – original three videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {VIDEOS_ROW1.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>

        {/* Row 2 – two new videos, centred on wider screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7 lg:w-2/3 lg:mx-auto">
          {VIDEOS_ROW2.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
