import heroPic from "../assets/images/hero_pic.png";

import ghIconWhite from "../assets/icons/github_icon_white.png";
import ghIconCerulean from "../assets/icons/github_icon_cerulean.png";
import linkedInWhite from "../assets/icons/linkedin_icon_white.png";
import linkedInCerulean from "../assets/icons/linkedin_icon_cerulean.png";
import resumeIconWhite from "../assets/icons/resume_icon_white.png";
import resumeIconCerulean from "../assets/icons/resume_icon_cerulean.png";

export const heroData = {
  image: heroPic,
  typedText: ["World!", "There!"],
  about1: "My name is Michael Orlanes. ",
  about2:
    "I’m a software engineer with a passion for full-stack development and UI/UX. ",
};

export const navData = [
  { name: "About", link: "/#about" },
  { name: "Experience", link: "/#experience" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
];

export const sidebarData = {
  github: {
    whiteIcon: ghIconWhite,
    ceruleanIcon: ghIconCerulean,
    url: "https://github.com/sinizano77",
  },
  linkedin: {
    whiteIcon: linkedInWhite,
    ceruleanIcon: linkedInCerulean,
    url: "https://www.linkedin.com/in/michael-orlanes/",
  },
  resume: {
    whiteIcon: resumeIconWhite,
    ceruleanIcon: resumeIconCerulean,
    url: "/docs/Michael Orlanes Developer Resume 2024.pdf",
  },
};
