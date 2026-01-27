"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import MinimalVideo, { MinimalVideoHandle } from "./Video";
import { testimonials } from "@/shared/data/testimonial.data";
import type { ITestimonial } from "@/shared/types/testimonial.type";

export default function Testimonial() {
  const t = useTranslations("Testimonial"); 
  const locale = useLocale() as "uz" | "ru";

  const items = testimonials as ITestimonial[];

  const [index, setIndex] = useState(0);
  const videoHandleRef = useRef<MinimalVideoHandle | null>(null);

  const active = useMemo(() => items[index], [items, index]);
  const content = active[locale];

  const go = (nextIndex: number) => {
    videoHandleRef.current?.pause();

    const safe = (nextIndex + items.length) % items.length;
    setIndex(safe);
  };

  return (
    <section className="container">
      <div className="flex flex-col justify-between gap-15">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl text-(--text) font-clash font-semibold">
            {t("title")}
          </h2>

          <div>
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="bg-(--button-bg) py-1.5 px-2 rounded-[10px] cursor-pointer mr-2"
              aria-label="Previous"
            >
              <ChevronLeft strokeWidth={2} color="white" />
            </button>

            <button
              type="button"
              onClick={() => go(index + 1)}
              className="bg-(--button-bg) py-1.5 px-2 rounded-[10px] cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight strokeWidth={2} color="white" />
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <div className="w-1/2">
            {active.video ? (
              <MinimalVideo ref={videoHandleRef} src={active.video} />
            ) : (
              <div className="w-full aspect-video rounded-3xl bg-(--surface)" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center">
              <Image
                src={active.avatar || "/avatar.jpg"}
                className="rounded-xl mr-4"
                alt="avatar"
                width={50}
                height={50}
              />
              <div>
                <p className="text-(--text) font-normal text-lg">
                  {content.name}
                </p>
                <p className="text-(--secondarytext) font-normal text-[12px] mt-0.5">
                  {content.role}
                </p>
              </div>
            </div>

            <p className="text-(--secondarytext) text-sm mt-3">
              {t("koroche")}: {content.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
