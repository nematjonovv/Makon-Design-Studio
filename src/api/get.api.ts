import { IServices } from "@/shared/types/service.type";
import { apiFetch } from "./ApiFetch";
import { ITeamMember } from "@/shared/types/team.type";
import { IProject } from "@/shared/types/project.type";

interface ServiceResponse {
  success: boolean;
  message: string;
  data: IServices[];
}
interface TeamResponse {
  success: boolean;
  message: string;
  data: ITeamMember[];
}

interface ProjectResponse {
  success: boolean;
  data: IProject[];
}

export async function getServices(): Promise<ServiceResponse> {
  const res = await apiFetch("/api/services", { cache: "no-store" })
  return res.json()
}

export async function getTeam(): Promise<TeamResponse> {
  const res = await apiFetch("/api/team", { cache: "no-store" })
  return res.json()
}

export async function getProjects(): Promise<ProjectResponse> {
  const res = await apiFetch("/api/projects", { cache: "no-store" })
  return res.json()
}

export async function getProjectBySlug(slug: string): Promise<{ success: boolean; data: IProject | null; }> {
  const res = await apiFetch(`/api/projects/${slug}`, { cache: "no-store" })
  return res.json()
}