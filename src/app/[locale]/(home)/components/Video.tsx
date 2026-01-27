"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

export type MinimalVideoHandle = {
  pause: () => void;
};

const MinimalVideo = forwardRef<MinimalVideoHandle, Props>(function MinimalVideo(
  { src, poster, className = "" },
  ref
) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    pause() {
      const v = videoRef.current;
      if (!v) return;
      v.pause();
      // xohlasangiz reset ham qilasiz:
      // v.currentTime = 0;
    },
  }));

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      try {
        await v.play();
      } catch {}
    } else {
      v.pause();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={false}
        className="w-full h-full rounded-3xl object-cover bg-black/20"
        onClick={toggle}
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-0 grid place-items-center"
          aria-label="Play video"
        >
          <span className="w-16 h-16 rounded-full bg-(--button-bg) text-(--text) grid place-items-center shadow-xl">
            ▶
          </span>
        </button>
      )}
    </div>
  );
});

export default MinimalVideo;
