import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import ProjectCover from "./ProjectCover";
import ReadMoreBtn from "@/components/ReadMoreBtn";
import CtaButton from "@/components/CtaButton";
import { getLocale, getTranslations } from "next-intl/server";
import { getProjects } from "@/api/get.api";
import { IProject } from "@/shared/types/project.type";
import AnimatedSection from "@/components/AnimationSection";

async function Projects() {
  const t = await getTranslations("Projects");
  const res = await getProjects();
  const projects: IProject[] = res?.data ?? [];
  const locale = await getLocale() as "ru" | "uz";
  return (
    <section className="container">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />
      {/* Projects Card */}
      <div className="flex justify-between flex-wrap gap-20 mt-23 text-center">
        {projects?.map((p, i) => {
          return (
            <AnimatedSection
              animation={i % 2 === 0 ? "fade-right" : "fade-left"}
              delay={i % 2 === 0 ? "delay-150" : "delay-0"}
              index={i}
              key={p.id}
              className="relative w-full md lg:flex-1 lg:min-w-[calc(50%-80px)]  h-110 rounded-[30px] border border-(--card-border) overflow-hidden"
            >
              <ProjectCover
                priority={i < 4}
                key={i}
                coverImage={p.coverImage}
                className="text-white w-full h-full rounded-[30px]"
                alt={p.coverImage.image_alt[locale]}
              />
              <div className="inset-0 absolute w-full h-full bg-black/15 backdrop-blur-[3px] rounded-[30px] flex flex-col justify-center items-center">
                <p className="font-semibold text-center font-clashGrotesk mb-10 text-3xl text-(--text)">
                  {p.title}
                </p>

                <ReadMoreBtn href={`/projects/${p.slug}`} which="solid" />
              </div>
            </AnimatedSection>
          );
        })}
      </div>
      <div className="flex justify-center items-center w-full mt-15">
        <CtaButton fontSize={14} padding={[13, 30]} round={16} />
      </div>
    </section>
  );
}

export default Projects;

{
  /*  */
}
// border border-(--card-border)
