"use client";

import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Children, CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function StackItem({
  children,
  index,
  total,
  progress,
  animate
}: {
  children: ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
  animate: boolean;
}) {
  // Har bir karta o'z navbatidan boshlab kichrayadi; pastdagilari ko'proq qatlam ostida qoladi
  const depth = total - 1 - index;
  const range = [index / total, 1];
  const scale = useTransform(progress, range, [1, 1 - depth * 0.04]);
  const shade = useTransform(progress, range, [0, Math.min(depth * 0.12, 0.45)]);

  return (
    // Desktopda har bir o'ram sticky — keyingi karta oldingisining ustiga chiqadi
    <div
      className="md:sticky md:top-0 md:h-screen md:flex md:items-center md:pt-16"
      style={{ "--i": index } as CSSProperties}
    >
      <motion.div
        style={{ scale: animate ? scale : undefined }}
        className="relative w-full origin-top md:top-[calc(var(--i)*22px)]"
      >
        {children}
        {/* Ustiga keyingi karta chiqqanda biroz qoraytirish */}
        {animate && depth > 0 && (
          <motion.div
            aria-hidden
            style={{ opacity: shade }}
            className="pointer-events-none absolute inset-0 bg-black rounded-[30px]"
          />
        )}
      </motion.div>
    </div>
  );
}

/**
 * Kartalarni scroll paytida ustma-ust taxlaydi (faqat desktopda).
 * Har bir child — to'liq karta; balandligini kartaning o'zi belgilaydi.
 */
function StickyStack({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const animate = isDesktop && !reduceMotion;
  const items = Children.toArray(children);

  return (
    <section ref={containerRef} className="container relative flex flex-col gap-10 md:gap-0 pb-24 md:pb-[10vh]">
      {items.map((child, i) => (
        <StackItem
          key={i}
          index={i}
          total={items.length}
          progress={scrollYProgress}
          animate={animate}
        >
          {child}
        </StackItem>
      ))}
    </section>
  );
}

export default StickyStack;
