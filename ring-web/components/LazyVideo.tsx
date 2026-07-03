"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Poster via next/image (lazy, WebP/AVIF) — avoids eager download of raw JPG
 * through the video `poster` attribute flagged by PageSpeed.
 */
export default function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { rootMargin: "120px", threshold: 0 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (showVideo) {
      videoRef.current?.play().catch(() => {});
    }
  }, [showVideo]);

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      {!showVideo ? (
        <Image
          src={poster}
          alt=""
          fill
          loading="lazy"
          quality={60}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          aria-hidden
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
