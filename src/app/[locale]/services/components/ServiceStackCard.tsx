import CtaButton from "@/components/CtaButton";
import { IServices } from "@/shared/types/service.type";
import { mediaUrl } from "@/shared/utils/mediaUrl";
import { Layers } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

function ServiceStackCard({ data, index }: { data: IServices; index: number }) {
  const locale = useLocale() as "ru" | "uz";
  const t = useTranslations("Services");
  const service = data.localeData[locale];
  // Rasm bo'lmasa ikonka, u ham bo'lmasa bo'sh fon
  const photo = data.image || data.icon;
  const imageRight = index % 2 === 1;

  return (
    <article
      id={`service-${data.id}`}
      className="group relative w-full scroll-mt-28 md:h-[min(74vh,620px)] grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 p-3 md:p-5 bg-(--surface) border border-(--card-border) rounded-[30px] overflow-hidden shadow-[0_-24px_60px_-30px_rgba(0,0,0,0.7)]"
    >
      {/* Rasm */}
      <div
        className={`relative md:col-span-6 aspect-4/3 md:aspect-auto md:h-full rounded-[20px] overflow-hidden bg-(--badge-bg) ${imageRight ? "md:order-2" : ""}`}
      >
        {photo ? (
          <Image
            src={mediaUrl(photo)}
            alt={service.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={index < 2}
            className={`${data.image ? "object-cover" : "object-contain p-16"} group-hover:scale-105 transition duration-700 ease-out`}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-(--secondarytext)">
            <Layers className="size-12 opacity-40" />
          </div>
        )}
      </div>

      {/* Ma'lumotlar */}
      <div
        className={`md:col-span-6 flex flex-col justify-center gap-6 px-2 pb-3 md:py-4 ${imageRight ? "md:pl-6 md:pr-0" : "md:pr-6 md:pl-0"}`}
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-clash font-semibold text-(--text) text-3xl md:text-[40px] leading-[1.05] tracking-tight">
            {service.title}
          </h2>
          <p className="font-clashGrotesk text-base leading-relaxed text-(--secondarytext) line-clamp-3">
            {service.desc}
          </p>
        </div>

        {service.features?.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {service.features.map((f, i) => (
              <li
                key={i}
                className="font-clashGrotesk text-xs md:text-[13px] text-(--text) px-3 py-1.5 rounded-full bg-(--badge-bg) border border-(--badge-border)"
              >
                {f}
              </li>
            ))}
          </ul>
        )}

        {service.steps?.length > 0 && (
          <div>
            <p className="font-clashGrotesk text-[11px] uppercase tracking-widest text-(--secondarytext)">
              {t("steps")}
            </p>
            <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-clashGrotesk text-sm text-(--text)">
              {service.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-(--button-bg) tabular-nums">{i + 1}</span>
                  {step}
                  {i < service.steps.length - 1 && (
                    <span aria-hidden className="text-(--secondarytext)">→</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-(--border-muted) pt-5">
          <div>
            <p className="font-clashGrotesk text-[11px] uppercase tracking-widest text-(--secondarytext)">
              {t("duration")}
            </p>
            <p className="mt-1 font-clash font-semibold text-(--text) text-xl">{service.duration}</p>
          </div>
          <CtaButton fontSize={14} round={12} padding={[11, 22]} />
        </div>
      </div>
    </article>
  );
}

export default ServiceStackCard;
