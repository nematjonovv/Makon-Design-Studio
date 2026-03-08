import { IServices } from "@/shared/types/service.type";
import { apiFetch } from "./ApiFetch";
import { ITeamMember } from "@/shared/types/team.type";
import { IProject } from "@/shared/types/project.type";
import { ITestimonial } from "@/shared/types/testimonial.type";

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
  const res = await apiFetch("/api/services", { next: { revalidate: 3600 } })
  return res.json()
}

export async function getTeam(): Promise<TeamResponse> {
  const res = await apiFetch("/api/team", { next: { revalidate: 3600 } })
  return res.json()
}

export async function getProjects(): Promise<ProjectResponse> {
  const res = await apiFetch("/api/projects", { next: { revalidate: 3600 } })
  return res.json()
}

export async function getProjectBySlug(slug: string): Promise<{ success: boolean; data: IProject | null; }> {
  const res = await apiFetch(`/api/projects/${slug}`, { next: { revalidate: 3600 } })
  return res.json()
}

export async function getTestimonials(): Promise<{ success: boolean; data: ITestimonial[]; }> {
  const res = await apiFetch("/api/testimonials", { next: { revalidate: 3600 } })
  return res.json()
}

export async function getCategories(): Promise<{ success: boolean; data: { id: number, title: string }[] }> {
  const res = await apiFetch("/api/categories", { next: { revalidate: 3600 } })
  return res.json()
}

// export async function getContactInfo(): Promise<{ success: boolean; data: ; }> {
//   const res = await apiFetch("/api/contact-info", { next: { revalidate: 3600 } })
//   return res.json()
// }