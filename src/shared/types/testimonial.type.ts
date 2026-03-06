interface LocalizedString {
  ru: string;
  uz: string;
}

interface TestimonialLocalizedContent {
  content: string;
  position: string;
}

export interface ITestimonial {
  id: number;
  name: string;
  localizedContent: {
    ru: TestimonialLocalizedContent;
    uz: TestimonialLocalizedContent;
  };
  photoUrl: string;
  videoUrl: string;
  altImage: {
    image: LocalizedString;
    video: LocalizedString;
  };
  photoPublicId: string;
  videoPublicId: string;
}