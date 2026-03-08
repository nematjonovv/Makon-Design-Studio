import { getCategories, getProjects } from "@/api/get.api";
import Filter from "./component/Filter";

async function Projects() {
  const [{ data: projects }, { data: categories }] = await Promise.all([
    getProjects(),
    getCategories()
  ])
  return (
    <main className="w-screen text-(--text)">
      <div className="container h-screen relative pt-20 pb-50 mb-40">
        <Filter projects={projects} categories={categories} />
      </div>
    </main>
  );
}

export default Projects;