"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  maxStars?: number;      // ✅ bir vaqtda nechta
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0: return { x: offset, y: 0, angle: 45 };
    case 1: return { x: window.innerWidth, y: offset, angle: 135 };
    case 2: return { x: offset, y: window.innerHeight, angle: 225 };
    case 3: return { x: 0, y: offset, angle: 315 };
    default: return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 300,      // ✅ defaultni ham kichraytirdim
  maxDelay = 1200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  maxStars = 6,        // ✅ bir paytning o‘zida 6 ta
  className,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const timerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // ✅ spawn
  useEffect(() => {
    const spawn = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.floor(Math.random() * 100000),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };

      setStars((prev) => {
        const next = [...prev, newStar];
        // maxStars'dan oshsa, eski starlarni kesamiz
        return next.length > maxStars ? next.slice(next.length - maxStars) : next;
      });

      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      timerRef.current = window.setTimeout(spawn, delay);
    };

    spawn();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  // ✅ animate all
  useEffect(() => {
    const tick = () => {
      setStars((prev) =>
        prev
          .map((s) => {
            const newX = s.x + s.speed * Math.cos((s.angle * Math.PI) / 180);
            const newY = s.y + s.speed * Math.sin((s.angle * Math.PI) / 180);
            const newDistance = s.distance + s.speed;
            const newScale = 1 + newDistance / 100;

            // out of bounds => remove
            if (
              newX < -50 ||
              newX > window.innerWidth + 50 ||
              newY < -50 ||
              newY > window.innerHeight + 50
            ) {
              return null;
            }

            return { ...s, x: newX, y: newY, distance: newDistance, scale: newScale };
          })
          .filter((s): s is ShootingStar => Boolean(s))
      );

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <svg className={cn("w-full h-full absolute inset-0", className)}>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
