
export interface Service {
  id: number;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  duration: string;
  steps: string[];
}

export interface IServices {
  id: number;
  icon: string;
  /** Xizmat jarayonidagi rasm (xizmatlar sahifasi); ikonka — bosh sahifa uchun */
  image?: string | null;
  localeData: {
    ru: Service;
    uz: Service;
  };
}