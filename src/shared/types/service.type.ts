interface LocaleContent {
  title: string;
  desc: string;
}

export interface IServices {
  id: number;
  icon: string;
  iconPublicId: string;
  localeData: {
    ru: LocaleContent;
    uz: LocaleContent;
  };
}