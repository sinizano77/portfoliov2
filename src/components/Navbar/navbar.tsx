import { useState } from "react";
import * as React from "react";
import styled from "styled-components";
import { navData } from "../../db/mainDb";
import { theme } from "../../global/theme";
import { sidebarData } from "../../db/mainDb";
import useMediaQuery from "../../hooks/useMediaQuery";

const StyledNavBar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 4;
  padding: 1.25vw 0;
  background-color: white;
  box-shadow: var(--shadow-bottom);

  .nav-content-container {
    display: inherit;
    align-items: center;
    width: 100%;
  }

  .icon-container {
    display: inherit;
    position: relative;
    align-items: center;
    left: 3vw;
    width: 17%;
    z-index: 3;

    @media (${theme.breakpoints.xs}) {
      width: 60%;
    }

    @media (${theme.breakpoints.sm}) {
      width: 17%;
    }
  }

  .site-icon {
    @media (${theme.breakpoints.xs}) {
      width: 10vw;
      height: 10vw;
      margin-right: 5vw;
    }

    @media (${theme.breakpoints.sm}) {
      width: 3vw;
      height: 3vw;
      margin-right: 1.5vw;
    }
  }

  .name {
    font-family: "Orkney";

    @media (${theme.breakpoints.xs}) {
      font-size: 5vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 1.5vw;
    }
  }

  .desktop-nav {
    display: inherit;
    position: fixed;
    list-style-type: none;
    width: 100%;
    justify-content: center;
  }

  a:link,
  a:visited,
  a:active {
    position: relative;
    text-decoration: none !important;
    color: var(--dark-grey);
    margin: 0 2vw;
  }

  a::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.2vw;
    bottom: -0.3vw;
    left: 0;
    transform-origin: 50%;
    transition: transform 0.25s ease-out;
    border-radius: 20vw;
  }

  li:nth-child(n + 1) a::after {
    background-color: var(--orange);
  }

  li:nth-child(n + 2) a::after {
    background-color: var(--crimson-red);
  }

  li:nth-child(n + 3) a::after {
    background-color: var(--lime-green);
  }

  li:nth-child(n + 4) a::after {
    background-color: var(--cerulean-blue);
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: 50%;
  }

  @media (${theme.breakpoints.xs}) {
    height: 15vw;
    justify-content: flex-end;
  }

  @media (${theme.breakpoints.sm}) {
    height: 2vw;
    justify-content: center;
  }
`;

const StyledMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 10vw;
  min-height: 10vw;
  box-sizing: border-box;
  right: 8vw;
  left: 18vw;

  .lines {
    width: 100%;
    height: 1vw;
    background-color: var(--dark-grey);
    margin: 1.5vw 0;
    border-radius: 3vw / 3vw;
  }

  .lines.clicked:nth-child(n + 1) {
    transform: translateY(2vw) rotate(-45deg);
    transition: var(--transition);
  }

  .lines.clicked:nth-child(n + 2) {
    transform: translateY(-2vw) rotate(45deg);
    transition: var(--transition);
  }

  .lines.unclicked {
    transform: rotate(0) translate(0);
    transition: var(--transition);
  }
`;

//& self-references the class
const StyledDropdown = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  min-width: 100%;
  min-height: 60vw;
  background-color: white;
  overflow: hidden;
  padding-top: 13vw;

  .dropdown-link:link,
  .dropdown-link:visited,
  .dropdown-link:hover,
  .dropdown-link:active {
    text-decoration: none !important;
    color: var(--dark-grey);
  }

  .mobile-dropdown {
    list-style-type: none;
    display: block;
    justify-content: center;
    align-items: center;
    box-sizing: box-border;
    padding-inline: 0 !important;
    margin-block-end: 1vw !important;
    min-width: 85%;
  }

  .dropdown-item {
    list-style-type: none;
    font-size: 5vw;
    padding: 5vw 0;
    border-bottom: solid 0.5vw;
    border-color: var(--light-grey);
  }

  .dropdown-link {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.25vw 0;
  }

  &.dropdown.closed {
    visibility: hidden;
    transform: translateY(-90vw);
    transition: var(--transition);
  }

  &.dropdown.open {
    transform: translateY(0vw);
    transition: var(--transition);
  }
`;

const StyledPortfolioLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw 0;

  .portfolio-link-container {
    padding: 0 4vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 54vw;
  }

  img {
    max-width: 12vw;
    margin: 0 3vw;
  }

  span {
    background-color: var(--cerulean-blue);
    width: 50%;
    height: 1vw;
  }

  span:nth-child(1) {
    border-radius: 0 10vw 10vw 0;
  }

  span:nth-child(3) {
    border-radius: 10vw 0 0 10vw;
  }
`;

function Navbar() {
  const isMobile = useMediaQuery(`(${theme.breakpoints.sm})`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lineClass, setLineClass] = useState("lines unclicked");
  const [dropdownClass, setDropdownClass] = useState(`dropdown closed`);

  function NavLinks(navClass: string) {
    let linkClass: string;
    navClass === "desktop-nav-links"
      ? (linkClass = "nav")
      : (linkClass = "dropdown");

    return (
      <menu className={navClass}>
        {navData.navLinks.map((navItem, i) => (
          <li className={`${linkClass}-item`} key={i}>
            <a
              className={`${linkClass}-link`}
              href={navItem.link}
              rel="noreferrer"
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </menu>
    );
  }

  function MenuIcon() {
    return (
      <StyledMenuIcon className="menuIcon" onClick={updateMenu}>
        <span className={lineClass}></span>
        <span className={lineClass}></span>
      </StyledMenuIcon>
    );
  }

  function dropdown() {
    return (
      <StyledDropdown className={dropdownClass}>
        {NavLinks("mobile-dropdown")}
        <StyledPortfolioLinks>
          <span />
          <div className="portfolio-link-container">
            <a
              href={sidebarData.github.url}
              target="_blank"
              rel="external noreferrer"
            >
              <img src={sidebarData.github.ceruleanIcon} alt="Github Icon" />
            </a>
            <a
              href={sidebarData.linkedin.url}
              target="_blank"
              rel="external noreferrer"
            >
              <img
                src={sidebarData.linkedin.ceruleanIcon}
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href={sidebarData.resume.url}
              target="_blank"
              rel="external noreferrer"
            >
              <img src={sidebarData.resume.ceruleanIcon} alt="Resume Icon" />
            </a>
          </div>
          <span />
        </StyledPortfolioLinks>
      </StyledDropdown>
    );
  }

  function updateMenu() {
    if (!isMenuOpen) {
      setLineClass("lines clicked");
      setDropdownClass(`dropdown open`);
    } else {
      setLineClass("lines unclicked");
      setDropdownClass(`dropdown closed`);
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <StyledNavBar className="navBar">
        <div className="nav-content-container">
          <a className="icon-container" href={navData.left.link}>
            <img
              className="site-icon"
              src={navData.siteIcon}
              alt="Website icon"
            />
            <p className="name">{navData.left.name}</p>
          </a>
          {isMobile ? NavLinks("desktop-nav") : MenuIcon()}
        </div>
      </StyledNavBar>
      {!isMobile ? dropdown() : null}
    </>
  );
}

export default Navbar;
