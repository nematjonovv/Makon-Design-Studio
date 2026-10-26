import { mediaUrl } from "@/shared/utils/mediaUrl";
import { getServices } from "@/api/get.api";
import AnimatedSection from "@/components/AnimationSection";
import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { Link } from "@/i18n/navigation";
import { IServices } from "@/shared/types/service.type";
import { ArrowUpRight, Clock, Layers } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

const delays = ["delay-0", "delay-150", "delay-300"] as const;

/** 3 ustunli grid: oxirgi qatorda 2 ta qolsa — yarimdan, 1 ta qolsa — to'liq kenglik */
function spanClass(index: number, total: number) {
  const rest = total % 3;
  if (rest === 2 && index >= total - 2) return "lg:col-span-3";
  if (rest === 1 && index === total - 1) return "lg:col-span-6";
  return "lg:col-span-2";
}

async function Services() {
  const t = await getTranslations("Services");
  const locale = (await getLocale()) as "ru" | "uz";
  const res = await getServices();
  const services: IServices[] = res?.data ?? [];

  return (
    <section className="container mt-12">
      <Badge title={t("badge")} />
      <AnimatedSection animation="fade-up">
        <H2 title={t("title")} />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-15">
        {services.map((service, index) => {
          const item = service.localeData[locale];
          return (
            <AnimatedSection
              key={service.id}
              animation="fade-up"
              delay={delays[index % delays.length]}
              className={`${spanClass(index, services.length)} ${services.length % 2 === 1 && index === services.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <Link
                href={`/services#service-${service.id}`}
                className="group flex h-full flex-col gap-6 rounded-[30px] border border-(--card-border) bg-(--surface) p-6 md:p-7 transition-colors hover:border-(--border-strong)"
              >
                <div className="relative grid size-16 place-items-center overflow-hidden rounded-2xl border border-(--badge-border) bg-(--badge-bg)">
                  {service.icon ? (
                    <Image
                      src={mediaUrl(service.icon)}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain p-2.5"
                    />
                  ) : (
                    <Layers className="size-7 text-(--secondarytext)" />
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-clash font-semibold text-(--text) text-2xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-clashGrotesk text-sm leading-relaxed text-(--secondarytext) line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  {item.duration && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-(--badge-border) bg-(--badge-bg) px-3 py-1.5 font-clashGrotesk text-xs text-(--text)">
                      <Clock className="size-3.5 text-(--secondarytext)" />
                      {item.duration}
                    </span>
                  )}
                  <span
                    aria-label={t("more")}
                    className="ml-auto grid size-10 shrink-0 place-items-center rounded-full bg-(--button-bg) text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <ArrowUpRight className="size-4.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
