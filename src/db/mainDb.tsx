import * as React from "react";

import heroPic from "../assets/images/hero_pic.png";
import about1 from "../assets/images/about_me_1.png";
import about2 from "../assets/images/about_me_2.png";
import steve1 from "../assets/images/steve_1.png";
import steve2 from "../assets/images/steve_2.png";
import pikminJs from "../assets/images/pikmin_js.png";
import pikminPython from "../assets/images/pikmin_python.png";
import pikminReact from "../assets/images/pimin_react.png";

import siteIcon from "../assets/icons/site_icon.png";
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

export const navData = {
  siteIcon: siteIcon,
  left: { name: "Michael Orlanes", link: "#hero" },
  navLinks: [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ],
};

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

export const aboutData = {
  title: "About Me",
  text1: (
    <div>
      Ever since I was young, I’ve always had a passion for creativity. I
      would spend hours, sometimes days on drawings, arts and crafts, or honing
      in my musical capabilities. When it came time to choose a career, I
      was inspired to delve into a new creative medium - coding.
    </div>
  ),
  text2: (
    <div>
      Currently, I invest a lot of my time in meticulously crafting and coding
      the perfect user experiences and ensuring that each one feels unqiue. I am
      continually trying to improve myself as a designer and a developer by
      working on <b>personal projects</b>, learning the <b>latest technology</b>
      , and <b>seeking opportunities</b> that can expand and improve my
      skillsets.
    </div>
  ),
  text3: (
    <div>
      You might have also noticed a little yellow creature on my page. His name
      is <b>Steve</b> and he’s a <b>Pikmin</b>. He’s my partner when I do coding
      and design projects and I like to bounce my thought processes and ideas off
      of him every now and then. He’s also my traveling buddy and accompanies me
      wherever in the world I decide to go next!
    </div>
  ),
  images: {
    me1: about1,
    me2: about2,
    steve1: steve1,
    steve2: steve2,
  },
  pikmin: {
    js: pikminJs,
    python: pikminPython,
    react: pikminReact,
  },
};

export const skillData = {
  frontend: {
    title: "Frontend/Design Skills",
    skills: [
      "Html",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "Material UI",
      "Styled-Components",
      "Playwright",
      "Responsive Design",
      "Figma",
      "Adobe XD",
      "UI/UX Principles",
    ],
  },
  backend: {
    title: "Backend Skills",
    skills: [
      "Python",
      "Java",
      "PostgreSQL",
      "mySQL",
      "Flask",
      "Git/GitHub",
      "REST API",
      "Firebase",
    ],
  },
};
