import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import CtaButton from "@/components/CtaButton";
import { getLocale, getTranslations } from "next-intl/server";
import { getProjects } from "@/api/get.api";
import { IProject } from "@/shared/types/project.type";
import AnimatedSection from "@/components/AnimationSection";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import FeaturedProjectCard from "./FeaturedProjectCard";

/**
 * Admin paneldagi o'rin (1 — katta, 2 — o'rta, 3 — kichik) bo'yicha 3 ta loyiha.
 * Bo'sh o'rinlar ko'rsatilmagan eng yangi loyihalar bilan to'ldiriladi.
 */
function pickFeatured(projects: IProject[]) {
  const featured = [1, 2, 3].map((n) => projects.find((p) => p.featuredOrder === n));
  const rest = projects
    .filter((p) => !featured.includes(p))
    .sort((a, b) => b.id - a.id);
  return featured
    .map((p) => p ?? rest.shift())
    .filter((p): p is IProject => !!p);
}

async function Projects() {
  const t = await getTranslations("Projects");
  const res = await getProjects();
  const projects: IProject[] = res?.data ?? [];
  const locale = await getLocale() as "ru" | "uz";

  const [big, medium, small] = pickFeatured(projects);
  const more = projects.length - [big, medium, small].filter(Boolean).length;

  return (
    <section className="container">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-23 md:h-160">
        {big && (
          <AnimatedSection animation="fade-right" delay="delay-150" className="h-110 md:h-full">
            <FeaturedProjectCard project={big} size="lg" locale={locale} />
          </AnimatedSection>
        )}

        <div className="grid grid-cols-1 md:grid-rows-[1.15fr_1fr] gap-4 min-h-0">
          {medium && (
            <AnimatedSection animation="fade-left" className="h-90 md:h-full min-h-0">
              <FeaturedProjectCard project={medium} size="md" locale={locale} />
            </AnimatedSection>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-0">
            {small && (
              <AnimatedSection animation="fade-up" className="h-80 md:h-full">
                <FeaturedProjectCard project={small} size="sm" locale={locale} />
              </AnimatedSection>
            )}

            {/* Barcha loyihalar — 3-karta bo'lmasa butun qatorni egallaydi */}
            <AnimatedSection
              animation="fade-up"
              delay="delay-150"
              className={`h-64 sm:h-80 md:h-full ${small ? "" : "sm:col-span-2"}`}
            >
              <Link
                href="/projects"
                className="group flex h-full flex-col justify-between gap-6 rounded-[30px] bg-(--button-bg) hover:bg-(--button-hover) p-6 text-white transition-colors"
              >
                {more > 0 && (
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/85">
                    {t("moreProjects", { count: more })}
                  </span>
                )}
                <div className="mt-auto flex flex-col gap-5">
                  <p className="font-clash font-semibold text-[28px] leading-[1.1]">
                    {t("viewAll")}
                  </p>
                  <span className="grid size-11 place-items-center rounded-full bg-white text-(--button-bg) transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="size-4.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-15">
        <CtaButton fontSize={14} padding={[13, 30]} round={16} />
      </div>
    </section>
  );
}

export default Projects;
