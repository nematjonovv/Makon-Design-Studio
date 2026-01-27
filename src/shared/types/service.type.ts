// export type Locale = "uz" | "ru";

// export interface ISerivceLocaleBlock {
//   title: string;
//   desc: string;
// }

// export interface IServiceLocaleData {
//   uz: ISerivceLocaleBlock;
//   ru: ISerivceLocaleBlock;
// }

// export interface IServices {
//   id: number;
//   localeData: IServiceLocaleData;
//   image: string;
// }

export interface IServices {
  id: string;
  title: string;
  desc: string;
  image: string;
}
