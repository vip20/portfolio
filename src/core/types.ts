export interface SocialLink{
  fa_icon?: string;
  url: string;
  name: string;
}

export interface NavbarSetup {
  brand: { name: string; path: string}
  socialLinks?: SocialLink[]
}

export interface PageSetup {
  nav : NavbarSetup;
}

export interface AppSetup {
  home: PageSetup
}