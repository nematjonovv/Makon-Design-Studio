type TLocaleData = {
  title: string;
  excerpt: string;
  seo: { metaTitle: string; metaDesc: string };
  challange: string;
  solution: string;
  result: string;
};

type TCoverImage = {
  src: string;
  alt: { uz: string; ru: string };
};

type TFacts = {
  year: number;
  durationMonth: number;
  areaM2: number;
  localtion: { city: string; country: string };
  services: string[];
};
type TGalleryItem = {
  src: string;
  alt: { uz: string; ru: string };
};

export interface IProjects {
  id: "";
  slug: string;
  status: "concept" | "comppleted" | "in progess";
  category: "residential" | "commercial" | "hospitality" | "office";
  publishedAt: "2025-11-10";
  localeData: { uz: TLocaleData; ru: TLocaleData };
  coverImage: { light: TCoverImage; dark: TCoverImage };
  gallery: TGalleryItem[];
  facts: TFacts;
}
