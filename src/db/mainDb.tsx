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
import behanceWhite from "../assets/icons/behance_icon_white.png";
import behanceCerulean from "../assets/icons/behance_icon_cerulean.png";
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
  behance: {
    whiteIcon: behanceWhite,
    ceruleanIcon: behanceCerulean,
    url: "https://www.behance.net/michaelorlanes",
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
    <p>
      Hello! I am Michael Orlanes, a dedicated software engineer with a
      specialization in <b>full-stack development</b> and <b>UI/UX design</b>. I
      am actively seeking opportunities to elevate the standards of coding and
      software development through innovative solutions.
    </p>
  ),
  text2: (
    <p>
      After graduating, I took time to engage in personal growth and
      self-discovery, which allowed me to clarify my career aspirations and
      enhance my overall well-being. This period of introspection also
      strengthened my relationships with the friends and family who have
      supported me along the way.
    </p>
  ),
  text3: (
    <p>
      I am now prepared to advance into an engineering role, having invested
      considerable effort in refining my technical skills and staying up-to-date
      with the <b>latest technologies</b>. My focus is on meticulously crafting
      high-quality, distinctive <b>personal projects</b> that demonstrate
      excellence and innovation.
    </p>
  ),
  text4: (
    <p>
      You might have also noticed a little yellow creature on my page. His name
      is <b>Steve</b> and he’s a <b>Pikmin</b>. He’s my partner when I do coding
      and design projects and I like to bounce my thought processes and ideas
      off of him every now and then. He’s also my traveling buddy and
      accompanies me wherever in the world I decide to go next!
    </p>
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

export const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Experience 1",
      date: "Jun 2020",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
    {
      title: "abdouoabfoubeaofaeuo",
      date: "Dec 2021",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
    {
      title: "a",
      date: "Apr 2023",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
    {
      title: "Experience 4",
      date: "Jun 2023",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
    {
      title: "Experience 5",
      date: "Feb 2024",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
    {
      title: "asdnjasdnjo oan sdiasndoas",
      date: "Aug 2024",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
    {
      title: "Experience 7",
      date: "Nov 2024",
      description: (
        <div>
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ),
    },
  ],
};
