import type { MetadataRoute } from "next";
import { getProjects } from "@/api/get.api";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

const pages = ["", "/aboutus", "/contact", "/projects", "/services"];

// Har bir til versiyasi boshqalariga hreflang orqali bog'lanadi
function entries(
  path: string,
  extra: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  );
  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}${path}`,
    alternates: { languages },
    ...extra,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = pages.flatMap((page) =>
    entries(page, {
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.8,
    }),
  );

  // API ishlamasa ham sitemap statik sahifalar bilan qaytsin
  let projectUrls: MetadataRoute.Sitemap = [];
  try {
    const res = await getProjects();
    projectUrls = (res?.data ?? []).flatMap((project) =>
      entries(`/projects/${project.slug}`, {
        lastModified: project.updatedAt ? new Date(project.updatedAt) : undefined,
        changeFrequency: "monthly",
        priority: 0.7,
      }),
    );
  } catch (error) {
    console.error("Sitemap: projects fetch failed", error);
  }

  return [...staticUrls, ...projectUrls];
}
