import AnimatedSection from "@/components/AnimationSection";
import { IProject } from "@/shared/types/project.type";
import ProjectCover from "../../(home)/components/ProjectCover";
import ReadMoreBtn from "@/components/ReadMoreBtn";
import { useLocale } from "next-intl";

function PorjectsMasonry({ data }: { data?: IProject[] }) {
  const locale = useLocale() as "ru" | "uz"
  return (
    <div className="flex flex-wrap gap-5 container justify-between">
      {data?.map((p, i) => (
        <AnimatedSection
          animation={i % 2 === 0 ? "fade-right" : "fade-left"}
          delay={i % 2 === 0 ? "delay-150" : "delay-0"}
          index={i}
          key={p.id}
          className="relative sm:w-full md:w-full lg:w-[calc(50%-20px)] h-90 rounded-[30px] border border-(--card-border) overflow-hidden"
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
      ))}
    </div>
  );
}

export default PorjectsMasonry;