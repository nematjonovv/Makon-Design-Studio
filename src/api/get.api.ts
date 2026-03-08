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

export type ContactData = {
  id: number;
  phone: string;
  phone2: string;
  email: string;
  addressUz: string;
  addressRu: string;
  instagram: string;
  telegram: string;
  youtube: string;
  facebook: string;
  mapUrl: string;
  createdAt: string;
  updatedAt: string;
};


export async function getServices(): Promise<ServiceResponse> {
  const res = await apiFetch("/api/services", { next: { revalidate: 60 } })
  return res.json()
}

export async function getTeam(): Promise<TeamResponse> {
  const res = await apiFetch("/api/team", { next: { revalidate: 60 } })
  return res.json()
}

export async function getProjects(): Promise<ProjectResponse> {
  const res = await apiFetch("/api/projects", { next: { revalidate: 60 } })
  return res.json()
}

export async function getProjectBySlug(slug: string): Promise<{ success: boolean; data: IProject | null; }> {
  const res = await apiFetch(`/api/projects/${slug}`, { next: { revalidate: 60 } })
  return res.json()
}

export async function getTestimonials(): Promise<{ success: boolean; data: ITestimonial[]; }> {
  const res = await apiFetch("/api/testimonials", { next: { revalidate: 60 } })
  return res.json()
}

export async function getCategories(): Promise<{ success: boolean; data: { id: number, title: string }[] }> {
  const res = await apiFetch("/api/categories", { next: { revalidate: 60 } })
  return res.json()
}

export async function getContactInfo(): Promise<{ success: boolean; data: ContactData; }> {
  const res = await apiFetch("/api/contactinfo", { next: { revalidate: 60 } })
  return res.json()
}
type ContactFormData = {
  id?: number;
  name: string;
  number: string;
  about: string;
  heardFrom: string;
  createdAt?: string;
}


export async function sendRequest(data: ContactFormData): Promise<{ success: boolean, message: string, data: ContactFormData }> {
  const res = await apiFetch("/api/request", { method: "POST", body: data })
  return res.json()
}