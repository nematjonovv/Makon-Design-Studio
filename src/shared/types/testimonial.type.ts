export interface ITestimonial {
  id: number;
  avatar: string;
  video: string;
  uz: testimonialLocale;
  ru: testimonialLocale;
}

type testimonialLocale = {
  name: string;
  role: string;
  text: string;
};
