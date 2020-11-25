export interface SocialLink {
  fa_icon?: string;
  url?: string;
  name: string;
}
export interface CustomNavLink {
  url: string;
  name: string;
  key: string;
}

export interface NavbarSetup {
  brand: { name: string; path: string };
  navLinks?: CustomNavLink[];
}
export interface PersonalDetails {
  name: string;
  role: string;
  bubbleMessage: string;
}
export interface ProfileSetup {
  profilePic: string;
  socialLinks?: SocialLink[];
  contactLinks?: SocialLink[];
  personalDetails: PersonalDetails;
}

export interface DownloadFile {
  link: string;
  mimeType: string;
  fileName: string;
}

export interface IdoTaskSetup {
  title: string;
  message: string;
}

export interface IdoSetup {
  title: string;
  tasks: IdoTaskSetup[];
}

export interface AboutSetup {
  title: string;
  message: string;
  cvDownload: DownloadFile;
  moreSkills: string[];
  ido?: IdoSetup;
}

export interface Skill {
  name: string;
  gpa: number;
}

export interface SkillSetup {
  technicalSkills: Skill[];
  professionalSkills: Skill[];
}
export interface PageSetup {
  profile: ProfileSetup;
  nav: NavbarSetup;
  about: AboutSetup;
  skills: SkillSetup;
}

export interface AppSetup {
  home: PageSetup;
}
