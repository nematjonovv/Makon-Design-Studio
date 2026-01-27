export type Locale = "uz" | "ru";

export interface ISocialLink {
  key: "instagram" | "telegram" | "facebook" | string;
  icon: string; 
  url: string;
}

export interface ILocaleAddress {
  city: string;
  district: string;
  street: string;
  full: string;
}

export interface IAddress {
  localeData: Record<Locale, ILocaleAddress>;
}
export interface IContactCard {
  phone: string;
  socials: ISocialLink[];
  address: IAddress;
}
