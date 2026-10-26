import type { Metadata } from "next";
import { mediaUrl } from "@/shared/utils/mediaUrl";
import { getProjectBySlug } from "@/api/get.api";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ProjectCover from "../../(home)/components/ProjectCover";
import ProjectGallery from "./ProjectGallery";
import { SITE_NAME, baseOpenGraph, buildAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = (await getProjectBySlug(slug))?.data;
  if (!project) return {};

  const lang = locale as "ru" | "uz";
  const content = project.localizedContent?.[lang];
  // metaTitle admin paneldan keladi, o'zida to'liq sarlavha — shablon qo'shilmaydi
  const title = content?.seo?.metaTitle || `${project.title} | ${SITE_NAME}`;
  const description = content?.seo?.metaDescription || content?.excerpt;
  const cover = project.coverImage?.image_light;

  return {
    title: { absolute: title },
    description,
    alternates: buildAlternates(locale, `/projects/${project.slug}`),
    openGraph: {
      ...baseOpenGraph(locale),
      type: "article",
      title,
      description,
      url: `/${locale}/projects/${project.slug}`,
      ...(cover && {
        images: [{ url: mediaUrl(cover), alt: project.coverImage.image_alt?.[lang] || project.title }],
      }),
    },
  };
}

async function AboutProject({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  setRequestLocale(rawLocale);
  const locale = rawLocale as "ru" | "uz";
  const [res, t] = await Promise.all([
    getProjectBySlug(slug),
    getTranslations("ProjectDetails"),
  ]);
  const project = res?.data;

  if (!project) notFound();

  const content = project.localizedContent[locale];
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
          className="grid grid-cols-5 md:grid-cols-5 gap-px mb-16 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border-muted)" }}
        >
          {[
            { label: "Maydon", value: `${project.facts.areaM2} m²` },
            { label: "Dizayn xarajati", value: `$${project.facts.budgetDesign}` },
            { label: "Qurilish xarajati", value: `$${project.facts.budgetBuild}` },
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
            <ProjectGallery gallery={project.gallery} locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}

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