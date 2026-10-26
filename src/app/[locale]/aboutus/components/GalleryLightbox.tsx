"use client";

import { IGalleryImage } from "@/shared/types/gallery.type";
import { mediaUrl } from "@/shared/utils/mediaUrl";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  images: IGalleryImage[];
  index: number;
  locale: "uz" | "ru";
  onChange: (index: number) => void;
  onClose: () => void;
};

const SWIPE_PX = 50;

function GalleryLightbox({ images, index, locale, onChange, onClose }: Props) {
  const t = useTranslations("Studio");
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = images.length;
  const current = images[index];

  const go = (dir: -1 | 1) => onChange((index + dir + total) % total);

  // Klaviatura, scroll bloki, fokusni ushlash va qaytarish
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
      else if (e.key === "ArrowRight") onChange((index + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onChange, onClose]);

  // Faol miniatyura ko'rinib turishi uchun
  useEffect(() => {
    thumbsRef.current
      ?.querySelector<HTMLElement>(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  if (!current) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={t("galleryLabel")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-100 flex flex-col bg-black/95 text-white"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > SWIPE_PX && total > 1) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* Yuqori panel */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-5">
        <span className="font-mono text-sm tabular-nums text-white/70">
          {index + 1} / {total}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Asosiy rasm */}
      <div className="relative flex-1 min-h-0 px-4 md:px-24" onClick={onClose}>
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative h-full w-full"
        >
          <Image
            src={mediaUrl(current.image)}
            alt={current.image_alt?.[locale] ?? ""}
            fill
            sizes="100vw"
            priority
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label={t("prev")}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 hidden sm:grid size-12 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-white"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label={t("next")}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 hidden sm:grid size-12 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-white"
            >
              <ChevronRight className="size-6" />
            </button>
          </>
        )}
      </div>

      {/* Tavsif va miniatyuralar */}
      <div className="px-4 pt-3 pb-4 md:px-8 md:pb-6">
        {current.image_alt?.[locale] && (
          <p className="mb-3 text-center font-clashGrotesk text-sm text-white/70">
            {current.image_alt[locale]}
          </p>
        )}
        {total > 1 && (
          <div ref={thumbsRef} className="scrollnone mx-auto flex max-w-full w-fit gap-2 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                data-index={i}
                onClick={() => onChange(i)}
                aria-label={`${i + 1} / ${total}`}
                aria-current={i === index}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-opacity focus-visible:outline-2 focus-visible:outline-white ${i === index ? "opacity-100 ring-2 ring-(--button-bg)" : "opacity-45 hover:opacity-80"}`}
              >
                <Image src={mediaUrl(img.image)} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default GalleryLightbox;
