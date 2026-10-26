import { getProjects } from "@/api/get.api";
import { IProject } from "@/shared/types/project.type";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import { staticPageMetadata } from "@/lib/seo";
import ProjectsIntro from "./component/ProjectsIntro";
import ProjectsStack from "./component/ProjectsStack";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata(locale, "projects", "/projects");
}

async function Projects({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [res, t] = await Promise.all([getProjects(), getTranslations("ProjectsPage")]);
  const projects: IProject[] = res?.data ?? [];
  const totalArea = projects.reduce((sum, p) => sum + (p.facts?.areaM2 ?? 0), 0);

  return (
    <main className="w-screen text-(--text)">
      <ProjectsIntro totalProjects={projects.length} totalArea={totalArea} />
      <ProjectsStack projects={projects} emptyText={t("empty")} />
      <CtaSection />
    </main>
  );
}

export default Projects;
