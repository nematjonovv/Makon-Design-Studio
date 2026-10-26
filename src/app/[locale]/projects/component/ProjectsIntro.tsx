import CountUp from "@/components/CounUp";
import { getTranslations } from "next-intl/server";

async function ProjectsIntro({
  totalProjects,
  totalArea
}: {
  totalProjects: number;
  totalArea: number;
}) {
  const t = await getTranslations("ProjectsPage");

  const stats = [
    { label: t("totalProjects"), value: totalProjects, suffix: "" },
    { label: t("totalArea"), value: totalArea, suffix: " m²" },
  ];

  return (
    <section className="container pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
        {/* Chap: sarlavha */}
        <div className="md:col-span-7 animate-fade-up">
          <h1 className="font-clash font-semibold text-(--text) text-[40px] leading-[1.05] md:text-7xl tracking-tight">
            {t("title")}
          </h1>
        </div>

        {/* O'ng: umumiy statistika */}
        <div className="md:col-span-5 grid grid-cols-2 gap-4 animate-fade-up delay-100">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col justify-between gap-8 bg-(--surface) border border-(--card-border) rounded-[20px] p-5 md:p-6 min-h-40"
            >
              <span className="font-clashGrotesk text-xs uppercase tracking-widest text-(--secondarytext)">
                {s.label}
              </span>
              <CountUp
                from={0}
                to={s.value}
                separator=" "
                duration={1}
                prefix={s.suffix}
                className="font-clash font-semibold text-(--text) text-3xl md:text-[44px] leading-none whitespace-nowrap"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsIntro;
