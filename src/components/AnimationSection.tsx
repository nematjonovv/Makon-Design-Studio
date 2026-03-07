"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom";
  delay?: "delay-0" | "delay-150" | "delay-300" | "delay-500" | number;
  index?: number;
  className?: string;
};

const animations = {
  "fade-up": "animate-fade-up",
  "fade-down": "animate-fade-down",
  "fade-left": "animate-fade-left",
  "fade-right": "animate-fade-right",
  zoom: "animate-zoom-in",
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = "delay-0",
  index,
  className
}: Props) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    // componentda:
    <div
      ref={ref}
      className={`${isVisible ? animations[animation] : "opacity-0"} ${typeof delay === "number" ? `delay-${delay}` : delay} ${className} `}
    >
      {children}
    </div>
  );
}
