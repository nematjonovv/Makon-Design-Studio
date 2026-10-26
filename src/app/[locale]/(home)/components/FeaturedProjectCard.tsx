import { Link } from "@/i18n/navigation";
import { IProject } from "@/shared/types/project.type";
import { ArrowUpRight } from "lucide-react";
import ProjectCover from "./ProjectCover";

type Size = "lg" | "md" | "sm";

const titleSize: Record<Size, string> = {
  lg: "text-2xl md:text-[32px]",
  md: "text-2xl",
  sm: "text-lg",
};

function FeaturedProjectCard({
  project,
  size,
  locale
}: {
  project: IProject;
  size: Size;
  locale: "ru" | "uz";
}) {
  const excerpt = project.localizedContent?.[locale]?.excerpt;
  const { areaM2, year, location } = project.facts ?? {};
  // Kichik kartada joy kam — shahar tushirib qoldiriladi
  const meta = [areaM2 && `${areaM2} m²`, size !== "sm" && location?.city, year]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block w-full h-full rounded-[30px] overflow-hidden border border-(--card-border) bg-(--surface)"
    >
      <ProjectCover
        priority={size === "lg"}
        coverImage={project.coverImage}
        alt={project.coverImage.image_alt[locale]}
        className="object-cover group-hover:scale-105 transition duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

      {/* Pastki ma'lumot paneli */}
      <div
        className={`absolute inset-x-3 bottom-3 flex items-end justify-between gap-4 rounded-[20px] bg-(--badge-bg) backdrop-blur-md border border-white/5 ${size === "lg" ? "p-5 md:p-6" : "p-4 md:p-5"}`}
      >
        <div className="min-w-0 flex flex-col gap-1.5">
          <h3 className={`font-clash font-semibold text-white leading-tight truncate ${titleSize[size]}`}>
            {project.title}
          </h3>
          {size !== "sm" && excerpt && (
            <p className="font-clashGrotesk text-sm text-(--secondarytext) line-clamp-2">
              {excerpt}
            </p>
          )}
          {meta && (
            <p className="font-clashGrotesk text-xs md:text-sm text-white/80 truncate">{meta}</p>
          )}
        </div>
        {size !== "sm" && (
          <span
            className={`shrink-0 grid place-items-center rounded-full bg-(--button-bg) text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${size === "lg" ? "size-12" : "size-10"}`}
          >
            <ArrowUpRight className="size-4.5" />
          </span>
        )}
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;
