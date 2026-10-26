"use client";

import { IGalleryImage } from "@/shared/types/gallery.type";
import { mediaUrl } from "@/shared/utils/mediaUrl";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import GalleryLightbox from "./GalleryLightbox";

const tile =
  "group relative overflow-hidden rounded-[22px] bg-(--surface) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--button-bg)";

function StudioGallery({ images }: { images: IGalleryImage[] }) {
  const t = useTranslations("Studio");
  const locale = useLocale() as "uz" | "ru";
  const [open, setOpen] = useState<number | null>(null);
  const [first, second, third] = images;
  // 3-rasm "ko'rish" kartasi ostida qisman ko'rinadi — u ham hisobga kiradi
  const more = images.length - 2;

  if (!first) {
    return (
      <div className="aspect-square grid place-items-center rounded-[30px] border border-(--card-border) bg-(--surface) text-(--secondarytext)">
        <ImageIcon className="size-10 opacity-40" />
      </div>
    );
  }

  const photo = (img: IGalleryImage, sizes: string) => (
    <Image
      src={mediaUrl(img.image)}
      alt={img.image_alt?.[locale] ?? ""}
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );

  return (
    <>
      <div
        className={`grid aspect-square gap-3 rounded-[30px] border border-(--card-border) bg-(--surface) p-3 ${second ? "grid-cols-2 grid-rows-[1.25fr_1fr]" : "grid-cols-1"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(0)}
          aria-label={first.image_alt?.[locale] || t("viewPhotos")}
          className={`${tile} ${second ? "col-span-2" : ""}`}
        >
          {photo(first, "(min-width: 768px) 600px, 100vw")}
        </button>

        {second && (
          <button
            type="button"
            onClick={() => setOpen(1)}
            aria-label={second.image_alt?.[locale] || t("viewPhotos")}
            className={tile}
          >
            {photo(second, "(min-width: 768px) 300px, 50vw")}
          </button>
        )}

        {/* Galereyani ochish kartasi */}
        {second && (
          <button
            type="button"
            onClick={() => setOpen(third ? 2 : 0)}
            className={`${tile} text-left text-white ${third ? "" : "bg-(--button-bg)!"}`}
          >
            {third && (
              <>
                {photo(third, "(min-width: 768px) 300px, 50vw")}
                <span className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/50" />
              </>
            )}
            <span className="relative flex h-full flex-col justify-between p-4 md:p-5">
              {more > 0 ? (
                <span className="font-clash text-3xl md:text-4xl font-semibold leading-none">
                  +{more}
                </span>
              ) : (
                <span />
              )}
              <span className="flex items-end justify-between gap-3">
                <span className="font-clashGrotesk text-sm md:text-base font-medium leading-tight">
                  {t("viewPhotos")}
                </span>
                <span className="grid size-9 md:size-10 shrink-0 place-items-center rounded-full bg-white text-(--button-bg) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
            </span>
          </button>
        )}
      </div>

      {/* Portal: ota elementdagi transform (AnimatedSection) fixed'ni buzmasligi uchun */}
      {open !== null &&
        createPortal(
          <AnimatePresence>
            <GalleryLightbox
              images={images}
              index={open}
              locale={locale}
              onChange={setOpen}
              onClose={() => setOpen(null)}
            />
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

export default StudioGallery;
