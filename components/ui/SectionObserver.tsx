"use client";

import { useEffect } from "react";

/**
 * Adds the "visible" class to every <section> element when it
 * enters the viewport, triggering the fadeUp CSS animation.
 * Immediately marks sections already in view on mount.
 */
export default function SectionObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((section) => {
      // If already partially visible on initial load, mark immediately
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("visible");
      } else {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
