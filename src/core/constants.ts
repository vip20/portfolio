import { AppSetup, CustomNavLink, NavbarSetup, SocialLink } from "./types";

export const defaultNavBar: NavbarSetup = {
  brand: { name: "Vinay P", path: "/#home" },
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
    fa_icon: "phone-alt",
    name: "+91 8892764958",
    url: "tel:+918892764958",
  },
  {
    fa_icon: "map-marker-alt",
    name: "Bangalore, Karnataka, India",
  },
];
export const defaultNavLinks: CustomNavLink[] = [
  {
    name: "Home",
    url: "/#home",
    key: "home",
  },
  {
    name: "About",
    url: "/#about",
    key: "about",
  },
  {
    name: "Skills",
    url: "/#skills",
    key: "skills",
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
      socialLinks: defaultSocialLinks,
    },
    nav: {
      ...defaultNavBar,
      navLinks: defaultNavLinks,
    },
    about: {
      title: "About Me",
      message: ` Hello, I’m a Vinay, a web-developer based on India. I have rich
      experience in building website and customization along with Devops
      configuration using Jenkins.`,
      cvDownload: {
        link: "resume/resume.pdf",
        mimeType: "application/pdf",
        fileName: "Vinay_resume.pdf",
      },
    },
  },
};
