interface ISeo {
  metaTitle: string;
  metaDescription: string;
}

interface ILocalizedFields {
  seo: ISeo;
  excerpt: string;
  results: string;
  solution: string;
  challenge: string;
}

interface ILocalizedContent {
  ru: ILocalizedFields;
  uz: ILocalizedFields;
}

interface ILocation {
  city: string;
  country: string;
}

interface IFacts {
  year: number;
  areaM2: number;
  budget: number;
  location: ILocation;
}

interface IDesign {
  style: string[];
  palette: string[];
  materials: string[];
  keyFeatures: string[];
}

interface ICoverImage {
  image_light: string;
  image_dark: string;
  image_alt: {
    ru: string;
    uz: string;
  };
}

interface ICategory {
  id: number;
  title: string;
}
type GalleryImage = {
  id: number;
  image: string;
  image_alt: {
    uz: string;
    ru: string;
  };
};
export interface IProject {
  id: number;
  title: string;
  categoryId: number;
  slug: string;
  status: "completed" | "in_progress" | "pending";
  localizedContent: ILocalizedContent;
  facts: IFacts;
  design: IDesign;
  coverImage: ICoverImage;
  category: ICategory;
  gallery: GalleryImage[];
}