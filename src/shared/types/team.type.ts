type LocaleText = {
  uz: string;
  ru: string;
};

export interface ITeamMember {
  id: string;
  image: string;
  name: string;
  role: LocaleText;
}
