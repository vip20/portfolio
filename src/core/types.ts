export interface SocialLink {
  fa_icon?: string;
  url?: string;
  name: string;
}
export interface CustomNavLink {
  url: string;
  name: string;
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

export interface PageSetup {
  profile: ProfileSetup;
  nav: NavbarSetup;
}

export interface AppSetup {
  home: PageSetup;
}
