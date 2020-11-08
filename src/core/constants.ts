import { AppSetup, NavbarSetup, SocialLink } from "./types";

export const defaultNavBar: NavbarSetup = {
  brand: { name: "Vinay P", path: "/" },
};

export const defaultSocialLinks: SocialLink[] = [
  {
    fa_icon: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vinay-p-71aba4a0/",
  },
  {
    fa_icon: "github",
    name: "GitHub",
    url: "https://github.com/vip20",
  },
  {
    fa_icon: "twitter",
    name: "Twitter",
    url: "https://twitter.com/iam_vinayp",
  },
];
export const APP_CONST: AppSetup = {
  home: {
    nav: {
      ...defaultNavBar,
      socialLinks: defaultSocialLinks,
    },
  },
};
