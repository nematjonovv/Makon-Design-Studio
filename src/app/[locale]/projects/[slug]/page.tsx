"use client"
import { getProjectBySlug } from "@/api/get.api";
import { notFound } from "next/navigation";
import ProjectCover from "../../(home)/components/ProjectCover";
import { use, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { IProject } from "@/shared/types/project.type";

type Props = {
  params: Promise<{ slug: string }>;
};

function AboutProject({ params }: Props) {
  const { slug } = use(params);
  const locale = useLocale() as "ru" | "uz";
  const t = useTranslations("ProjectDetails");
  const [project, setProject] = useState<IProject | null>(null);
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProjectBySlug(slug).then((res) => {
      setProject(res?.data ?? null);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
  document.body.classList.toggle("overflow-hidden", !!viewImage);
}, [viewImage]);

  if (loading) return null;
  if (!project) return notFound();

  const content = project?.localizedContent[locale];
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>

      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
        <ProjectCover priority={true} className="w-full aspect-video object-cover object-[center_65%]" coverImage={project.coverImage} alt={project.coverImage.image_alt[locale]} />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-(--bg) via-(--bg)/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-(--bg)/60 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 container pb-10 pt-20">
          <div className="flex flex-col gap-4">
            {/* Badges */}
            <div className="flex items-center gap-3">
              <span
                className="font-clashGrotesk text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border"
                style={{
                  background: "var(--badge-bg)",
                  borderColor: "var(--badge-border)",
                  color: "var(--secondarytext)",
                }}
              >
                {project.category.title}
              </span>
              <span
                className="font-clashGrotesk text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border"
                style={{
                  background: "rgba(227,83,54,0.12)",
                  borderColor: "rgba(227,83,54,0.4)",
                  color: "rgb(227,83,54)",
                }}
              >
                {
                  project.status === "completed"
                    ? t("status.completed")
                    : project.status === "in_progress"
                      ? t("status.in_progress")
                      : t("status.pending")
                }
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-clash text-5xl md:text-7xl font-bold leading-none tracking-tight"
              style={{ color: "var(--text)" }}
            >
              {project.title}
            </h1>

            {/* Location + year */}
            <p
              className="font-clashGrotesk text-base"
              style={{ color: "var(--secondarytext)" }}
            >
              {project.facts.location.city}, {project.facts.location.country} —{" "}
              {project.facts.year}
            </p>
          </div>
        </div>
      </div>

      {/*  MAIN CONTENT */}
      <div className="container py-16">
        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border-muted)" }}
        >
          {[
            { label: "Maydon", value: `${project.facts.areaM2} m²` },
            { label: "Byudjet", value: `$${project.facts.budget.toLocaleString()}` },
            { label: "Uslub", value: project.design.style[0] ?? "—" },
            { label: "Yil", value: project.facts.year },
          ]?.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 px-6 py-5"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-clashGrotesk text-xs uppercase tracking-widest"
                style={{ color: "var(--secondarytext)" }}
              >
                {stat.label}
              </span>
              <span
                className="font-clash text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Asimmetrik magazine grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* ── LEFT col ── */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-12">
            {/* Excerpt */}
            <p
              className="font-clashGrotesk text-xl md:text-2xl leading-relaxed border-l-4 pl-6"
              style={{
                color: "var(--text)",
                borderColor: "rgb(227,83,54)",
              }}
            >
              {content.excerpt}
            </p>

            {/* Challenge */}
            <Section num="01" title={t("challenge")} text={content.challenge} />

            {/* Solution */}
            <Section num="02" title={t("solution")} text={content.solution} />

            {/* Results */}
            <Section num="03" title={t("result")} text={content.results} />
          </div>

          {/* ── RIGHT col ── */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            {/* Gallery masonry-ish */}
            <div className="grid grid-cols-2 gap-3">
              {project.gallery?.map((img: any) => (
                <div
                  key={img.id}
                  className="rounded-2xl overflow-hidden aspect-square"
                >
                  <img
                    src={img.image}
                    alt={img.image_alt[locale]}
                    onClick={() => setViewImage(img.image)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div
              className={`${viewImage ? "flex" : "hidden"} fixed w-full h-full inset-0 bg-black/90 z-50 justify-center items-center`}
              onClick={() => setViewImage(null)}
            >
              {viewImage && (
                <div
                  className="fixed w-full h-full inset-0 bg-black/50 z-999 overflow-hidden flex justify-center items-center"
                  onClick={() => setViewImage(null)}
                >
                  <img src={viewImage} className="w-full h-full object-contain" alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section component  */
function Section({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span
          className="font-clashGrotesk text-xs font-bold tracking-widest uppercase"
          style={{ color: "rgb(227,83,54)" }}
        >
          {num}
        </span>
        <span
          className="h-px flex-1"
          style={{ background: "var(--border-muted)" }}
        />
      </div>
      <h2
        className="font-clash text-2xl md:text-3xl font-bold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <p
        className="font-clashGrotesk text-base leading-relaxed"
        style={{ color: "var(--secondarytext)" }}
      >
        {text}
      </p>
    </div>
  );
}

export default AboutProject;