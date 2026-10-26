import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://makondesign.uz"
).replace(/\/$/, "");

export const SITE_NAME = "Makon Design";

// 1200×630, public/ papkasida turadi
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const OG_LOCALES: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
};

/**
 * Canonical va hreflang. path — tilsiz yo'l: "", "/aboutus", "/projects/slug".
 */
export function buildAlternates(locale: string, path = ""): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  routing.locales.forEach((l) => {
    languages[l] = `/${l}${path}`;
  });
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return { canonical: `/${locale}${path}`, languages };
}

/**
 * Umumiy Open Graph maydonlari. Sahifa openGraph bersa, layout'dagisi to'liq
 * almashadi (merge bo'lmaydi), shuning uchun har bir sahifa buni yoyib ishlatadi.
 */
export function baseOpenGraph(locale: string) {
  const current = locale as Locale;
  return {
    siteName: SITE_NAME,
    type: "website" as const,
    locale: OG_LOCALES[current],
    alternateLocale: routing.locales
      .filter((l) => l !== current)
      .map((l) => OG_LOCALES[l]),
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  };
}

type StaticPage = "home" | "aboutus" | "services" | "projects" | "contact";

/**
 * Statik sahifalar uchun metadata. Matnlar messages/{uz,ru}.json → "Metadata".
 */
export async function staticPageMetadata(
  locale: string,
  page: StaticPage,
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `Metadata.${page}` });
  const title = t("title");
  const description = t("description");

  return {
    // Bosh sahifa title'ida brend bor — shablon qo'shilmaydi
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      ...baseOpenGraph(locale),
      title: page === "home" ? title : `${title} | ${SITE_NAME}`,
      description,
      url: `/${locale}${path}`,
    },
  };
}
