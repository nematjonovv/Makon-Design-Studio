
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
  iconPublicId: string;
  localeData: {
    ru: Service;
    uz: Service;
  };
}