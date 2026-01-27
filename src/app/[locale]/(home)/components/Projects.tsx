import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { projects } from "@/shared/data/project";
import { useTranslations } from "next-intl";
import ProjectCover from "./ProjectCover";
import ReadMoreBtn from "@/components/ReadMoreBtn";
import CtaButton from "@/components/CtaButton";

function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="container">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />
      {/* Projects Card */}
      <div className="flex justify-between flex-wrap gap-20 mt-23 text-center">
        {projects?.map((p, i) => {
          return (
            <div
              key={p.id}
              className={`relative w-full md lg:flex-1 lg:min-w-[calc(50%-80px)]  h-110 rounded-[30px] border border-(--card-border) overflow-hidden`}
            >
              <ProjectCover
                key={i}
                coverImage={p.coverImage}
                className="text-white w-full h-full rounded-[30px]"
              />
              <div className="inset-0 absolute w-full h-full bg-black/15 backdrop-blur-[3px] rounded-[30px] flex flex-col justify-center items-center">
                <p className="font-semibold text-center font-clashGrotesk mb-10 text-3xl text-(--text)">
                  {p.localeData.uz.title}
                </p>

                <ReadMoreBtn href="/" which="solid" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center w-full mt-15">
        <CtaButton fontSize={16} padding={[13, 41]} round={16} />
      </div>
    </section>
  );
}

export default Projects;

{
  /*  */
}
// border border-(--card-border)
