import { AppSetup, CustomNavLink, NavbarSetup, SocialLink } from "./types";

export const BREAKPOINT_MOBILE = 768;

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
        role: "Create and Build Responsive Websites",
        bubbleMessage: `👇 Meet `,
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
      experience in building website and customization. Being good at the following`,
      moreSkills: [
        "Angular 8 with ngrx",
        "Jenkins",
        "Node Js",
        "React",
        "Flutter",
      ],
      cvDownload: {
        link: "resume/resume.pdf",
        mimeType: "application/pdf",
        fileName: "Vinay_resume.pdf",
      },
      ido: {
        title: "What I do",
        tasks: [
          {
            title: "Web Development",
            message: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
          },
          {
            title: "App Development",
            message: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
          },
        ],
      },
    },
    skills: {
      technicalSkills: [
        {
          name: "Angular 8, Ngrx, Javascript, Nodejs",
          gpa: 8.5,
        },
      ],
      professionalSkills: [
        {
          name: "Communication",
          gpa: 8.0,
        },
      ],
    },
  },
};
