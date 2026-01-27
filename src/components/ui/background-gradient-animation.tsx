"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb()",
  gradientBackgroundEnd = "rgb()",
  firstColor = "42, 97, 111", // deep teal
  secondColor = "248, 246, 242", // warm white
  thirdColor = "72, 132, 145", // soft teal
  fourthColor = "30, 70, 80", // dark teal
  fifthColor = "210, 215, 210", // neutral
  pointerColor = "120, 170, 175", // highlight
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  // CSS variables
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Smooth follow (keep your existing style; just make it stable)
  useEffect(() => {
    if (!interactiveRef.current) return;

    const nextX = curX + (tgX - curX) / 20;
    const nextY = curY + (tgY - curY) / 20;

    setCurX(nextX);
    setCurY(nextY);

    interactiveRef.current.style.transform = `translate(${Math.round(
      nextX
    )}px, ${Math.round(nextY)}px)`;
  }, [tgX, tgY]); // intentionally tied to mouse target changes

  // IMPORTANT: mouse move on container, not on pointer layer
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTgX(event.clientX - rect.left);
    setTgY(event.clientY - rect.top);
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0",
        "bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>

      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {/* SINGLE BIG BLOB */}
        <div
          className={cn(
            "absolute inset-0",
            "[background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.85)_0,_rgba(var(--first-color),_0)_70%)_no-repeat]",
            "[mix-blend-mode:var(--blending-value)]",
            "w-[120%] h-[120%] -top-[10%] -left-[10%]",
            "opacity-100",
            "animate-[var(--animate-single)]"
          )}
        />

        {/* POINTER FOLLOW */}
        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute w-full h-full -top-1/2 -left-1/2 opacity-70 pointer-events-none",
              "[background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)]"
            )}
          />
        )}
      </div>
    </div>
  );
};
