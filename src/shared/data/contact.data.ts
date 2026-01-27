import { IContactCard } from "../types/contact.type";

export const contactCard: IContactCard = {
  phone: "+998905715663",

  socials: [
    {
      key: "instagram",
      icon: "bi bi-instagram",
      url: "https://instagram.com/makon.design",
    },
    {
      key: "telegram",
      icon: "bi bi-telegram",
      url: "https://t.me/makonstudio",
    },
    {
      key: "facebook",
      icon: "bi bi-facebook",
      url: "https://facebook.com/makonstudio",
    },
  ],

  address: {
    localeData: {
      uz: {
        city: "Toshkent",
        district: "Yunusobod tumani",
        street: "Maxtumquli ko‘chasi, 10",
        full: "Toshkent sh. Yunusobod tumani, Maxtumquli ko‘chasi, 10",
      },
      ru: {
        city: "Ташкент",
        district: "Юнусабадский район",
        street: "ул. Махтумкули, 10",
        full: "г. Ташкент, Юнусабадский район, ул. Махтумкули, 10",
      },
    },
  },
};
