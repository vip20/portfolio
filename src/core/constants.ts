import {
  AppSetup,
  CustomNavLink,
  DownloadFile,
  NavbarSetup,
  SocialLink,
} from "./types";

export const BREAKPOINT_MOBILE = 992;

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
  // {
  //   name: "Home",
  //   url: "/#home",
  //   key: "home",
  // },
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
        role: "Builds User-Interfaces & Codes Design Elements",
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
      message: `My name is Vinay. I'm a Front-end Developer based in India, who focuses on writing clean, elegant and efficient code`,
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

export interface HomeData {
  intro: string;
  skills: string[];
  skillsInterval: number;
}
export interface NavItem {
  displayName: string;
  url: string;
}
export interface AboutData {
  title: string;
  subTitle: string;
  body: string;
  startDate: Date;
  currentEmployer: string;
  cvDownload: DownloadFile;
}
export interface AppData {
  navItems: NavItem[];
  home: HomeData;
  about: AboutData;
  socialLinks: SocialLink[];
  contactLinks: SocialLink[];
}

export const APP_DATA_CONST: AppData = {
  navItems: [
    {
      url: "#home",
      displayName: "Home",
    },
    {
      url: "#about",
      displayName: "About",
    },
    {
      url: "#skills",
      displayName: "Skills",
    },
    // {
    //   url: "#portfolio",
    //   displayName: "Portfolio",
    // },
    // {
    //   url: "#services",
    //   displayName: "Services",
    // },
    // {
    //   url: "#testimonial",
    //   displayName: "Testimonial",
    // },
    {
      url: "#blog",
      displayName: "Blog",
    },
    {
      url: "#contact",
      displayName: "Contact",
    },
  ],
  home: {
    intro: "Hi, I am Vinay P",
    skills: ["Front-End Developer", "Flutter Developer"],
    skillsInterval: 2000,
  },
  about: {
    title: "Hello, I am Vinay",
    subTitle: "Web Developer from India",
    body: `I describe myself as a passionate developer who loves coding, open source, and the web platform. Beside from my job, I like to explore new technology and contribute to open source projects. That helped me a lot to grow as a web developer.`,
    startDate: new Date("August 24, 2015 00:00:00"),
    currentEmployer: "Cisco Systems India Pvt Ltd.",
    cvDownload: {
      link: "resume/resume.pdf",
      mimeType: "application/pdf",
      fileName: "Vinay_resume.pdf",
    },
  },
  socialLinks: defaultSocialLinks,
  contactLinks: defaultContactList,
};
