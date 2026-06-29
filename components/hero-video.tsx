"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  src: string;
  /** Still image shown while the video loads + fallback for reduced-motion users. */
  poster: string;
  /** 0.75 = slowed-down cinematic feel; 1 = native speed. */
  playbackRate?: number;
  className?: string;
};

/**
 * Looping muted background video for the flagship hero.
 *
 * - Sets playbackRate after mount (React doesn't expose it as a prop).
 * - Respects prefers-reduced-motion: skips the <video> entirely and renders
 *   only the poster image so reduced-motion users get a static background.
 * - Defers loading (preload="metadata") so the page paints fast; the poster
 *   covers the gap while the video buffers.
 */
export function HeroVideo({ src, poster, playbackRate = 1, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Apply playback rate after the video element exists + whenever metadata loads.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const apply = () => {
      try {
        v.playbackRate = playbackRate;
      } catch {
        // Some browsers throw if set before metadata; ignore - the metadata handler will retry.
      }
    };
    apply();
    v.addEventListener("loadedmetadata", apply);
    return () => v.removeEventListener("loadedmetadata", apply);
  }, [playbackRate]);

  if (!allowMotion) {
    return (
      <div
        className={className}
        aria-hidden
        style={{ backgroundImage: `url('${poster}')`, backgroundSize: "cover", backgroundPosition: "center 35%" }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
