import { AppSetup, CustomNavLink, NavbarSetup, SocialLink } from "./types";

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
export const defaultContactList: SocialLink[] = [
  {
    fa_icon: "envelope",
    name: "pvinayvinu20@gmail.com",
    url: "mailto:pvinayvinu20@gmail.com",
  },
  {
    fa_icon: "map-marker",
    name: "Bangalore, Karnataka, India",
  },
];
export const defaultNavLinks: CustomNavLink[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Skills",
    url: "/skills",
  },
];
export const APP_CONST: AppSetup = {
  home: {
    profile: {
      personalDetails: {
        name: "Vinay P",
        role: "Frontend Developer",
        bubbleMessage: "Hello I'm",
      },
      profilePic: "photos/vinay_1.jpg",
      contactLinks: defaultContactList,
    },
    nav: {
      ...defaultNavBar,
      navLinks: defaultNavLinks,
    },
  },
};
