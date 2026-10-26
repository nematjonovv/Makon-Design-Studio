"use client";

import { Link } from "@/i18n/navigation";
import { IProject } from "@/shared/types/project.type";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import ProjectCover from "../../(home)/components/ProjectCover";

type Props = {
  project: IProject;
  index: number;
};

function ProjectStackCard({ project, index }: Props) {
  const locale = useLocale() as "ru" | "uz";
  const t = useTranslations("ProjectsPage");
  const content = project.localizedContent?.[locale];

  const facts = [
    { label: t("year"), value: project.facts?.year ?? "—" },
    { label: t("area"), value: project.facts?.areaM2 ? `${project.facts.areaM2} m²` : "—" },
    { label: t("city"), value: project.facts?.location?.city ?? "—" },
  ];

  return (
    <article
      className="group relative w-full md:h-[min(76vh,680px)] grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 p-3 md:p-5 bg-(--surface) border border-(--card-border) rounded-[30px] overflow-hidden shadow-[0_-24px_60px_-30px_rgba(0,0,0,0.7)]"
    >
      {/* Rasm */}
      <div className="relative md:col-span-7 aspect-4/3 md:aspect-auto md:h-full rounded-[20px] overflow-hidden">
        <ProjectCover
          priority={index < 2}
          coverImage={project.coverImage}
          alt={project.coverImage.image_alt[locale]}
          className="object-cover group-hover:scale-105 transition duration-700 ease-out"
        />
      </div>

      {/* Ma'lumotlar */}
      <div className="md:col-span-5 flex flex-col justify-between gap-8 px-2 pb-3 md:p-4 md:pl-0">
        <div className="flex flex-col gap-5 md:pt-2">
          <h2 className="font-clash font-semibold text-(--text) text-3xl md:text-[44px] leading-[1.05] tracking-tight">
            {project.title}
          </h2>

          {content?.excerpt && (
            <p className="font-clashGrotesk text-base leading-relaxed text-(--secondarytext) line-clamp-4">
              {content.excerpt}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <dl className="grid grid-cols-3 border-y border-(--border-muted) divide-x divide-(--border-muted)">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 py-4 px-3 first:pl-0">
                <dt className="font-clashGrotesk text-[11px] uppercase tracking-widest text-(--secondarytext)">
                  {f.label}
                </dt>
                <dd className="font-clash font-semibold text-(--text) text-lg md:text-2xl truncate">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex w-full sm:w-fit items-center justify-center gap-2 bg-(--button-bg) hover:bg-(--button-hover) text-white rounded-xl font-clashGrotesk text-[15px] font-medium py-3.5 px-7 transition-colors"
          >
            {t("viewFull")}
            <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectStackCard;
