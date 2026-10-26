import StickyStack from "@/components/StickyStack";
import { IProject } from "@/shared/types/project.type";
import ProjectStackCard from "./ProjectStackCard";

function ProjectsStack({ projects, emptyText }: { projects: IProject[]; emptyText: string }) {
  if (!projects.length) {
    return (
      <section className="container pb-32">
        <p className="font-clashGrotesk text-center text-(--secondarytext) py-20 border border-dashed border-(--card-border) rounded-[30px]">
          {emptyText}
        </p>
      </section>
    );
  }

  return (
    <StickyStack>
      {projects.map((p, i) => (
        <ProjectStackCard key={p.id} project={p} index={i} />
      ))}
    </StickyStack>
  );
}

export default ProjectsStack;
