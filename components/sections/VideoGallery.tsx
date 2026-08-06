"use client";

import { useState, useRef, useEffect } from "react";

const ALL_VIDEOS = [
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
  {
    src: "/videos/1kl_milk_curd_plant_eration_work_finished.mp4",
    title: "1 KL Milk & Curd Plant – Work Finished",
    description: "Completed erection of a 1,000-litre milk and curd processing plant — full setup and final commissioning walk-through.",
    thumbnail: "/images/paneer-processing-vat.jpg",
  },
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
    thumbnail: "/images/dairy-processing-plant.jpg",
  },
];

function VideoCard({
  video,
}: {
  video: { src: string; title: string; description: string; thumbnail: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState(false);
  // Whether the card has ever entered the viewport — only then we render the <video> element
  const [inView, setInView] = useState(false);

  // Lazy-mount the video element only when card enters viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before it scrolls into view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pause when the card scrolls out of view
  useEffect(() => {
    if (!playing) return;
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [playing]);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().catch(() => setError(true));
      setPlaying(true);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-[rgba(34,27,24,0.08)] bg-white card-hover"
      style={{ boxShadow: "0 10px 30px -15px rgba(34,27,24,0.2)" }}
    >
      {/* 16:9 video area */}
      <div ref={wrapperRef} className="relative bg-black" style={{ aspectRatio: "16/9" }}>
        {!error ? (
          <>
            {inView ? (
              <video
                ref={videoRef}
                src={video.src}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted
                onEnded={() => setPlaying(false)}
                poster={video.thumbnail}
                preload="none"
              />
            ) : (
              // While not in view, show the poster as a plain <img> so the card
              // looks correct without loading any video bytes at all.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}

            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group transition-all"
              style={{
                background: playing ? "transparent" : "rgba(0,0,0,0.3)",
              }}
              aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
            >
              {!playing && (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                  style={{ background: "var(--maroon)", boxShadow: "0 8px 24px rgba(92,14,24,0.5)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
              {playing && (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </div>
              )}
            </button>

            {/* Mute / Unmute button — visible only while playing */}
            {playing && (
              <button
                onClick={handleMuteToggle}
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? (
                  /* Muted icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18l2 2L21 18.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                ) : (
                  /* Unmuted icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                )}
              </button>
            )}
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
  // Split into rows: first 3 → row 1 (full-width 3-col grid), last 3 → row 2 (3-col grid)
  const row1 = ALL_VIDEOS.slice(0, 3);
  const row2 = ALL_VIDEOS.slice(3);

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

        {/* Row 1 – 3 videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {row1.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>

        {/* Row 2 – 3 videos (now includes new full-processing video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
          {row2.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
