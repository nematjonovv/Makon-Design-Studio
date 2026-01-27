import { ITeamMember } from "../types/team.type";

export const team: ITeamMember[] = [
  {
    id: "t1",
    image: "/images/tyler.png", 
    name: "Alisher Rahimov",
    role: {
      uz: "Bosh dizayner (Founder)",
      ru: "Главный дизайнер (Founder)",
    },
  },
  {
    id: "t2",
    image: "/images/jonsnow.png", 
    name: "Madina Yusupova",
    role: {
      uz: "Interyer dizayner",
      ru: "Дизайнер интерьера",
    },
  },
  {
    id: "t3",
    image: "/images/tyler.png", 
    name: "Jasur Karimov",
    role: {
      uz: "3D vizualizator",
      ru: "3D-визуализатор",
    },
  },
  {
    id: "t4",
    image: "/images/jonsnow.png", 
    name: "Dilshod Normatov",
    role: {
      uz: "Texnik loyiha muhandisi",
      ru: "Инженер-проектировщик",
    },
  },
  {
    id: "t5",
    image: "/images/tyler.png", 
    name: "Sardor Usmonov",
    role: {
      uz: "Loyiha menejeri",
      ru: "Менеджер проекта",
    },
  },
];
