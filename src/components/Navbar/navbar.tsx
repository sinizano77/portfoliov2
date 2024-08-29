import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { navData } from "../../db/mainDb";
import { theme } from "../../global/theme";
import { sidebarData } from "../../db/mainDb";
import { useMediaQuery } from '@mui/material';

const StyledNavBar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 4;
  background-color: white;
  box-shadow: var(--shadow-bottom);

  @media (${theme.breakpoints.xs}) {
    height: 17vw;
  }

  @media (${theme.breakpoints.sm}) {
    height: 5vw;
  }

  .nav-content-container {
    display: inherit;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding-inline: 8vw;

    @media (${theme.breakpoints.xs}) {
      width: 90%;
    }

    @media (${theme.breakpoints.sm}) {
      width: 100%;
    }
  }

  .desktop-nav {
    display: inherit;
    list-style-type: none;
  }

  .icon-container {
    display: inherit;
    align-items: center;
    z-index: 3;

    @media (${theme.breakpoints.xs}) {
      gap: 5vw;
    }

    @media (${theme.breakpoints.sm}) {
      gap: 1.5vw;
    }
  }

  .site-icon {
    @media (${theme.breakpoints.xs}) {
      width: 10vw;
    }

    @media (${theme.breakpoints.sm}) {
      width: 3vw;
    }
  }

  .name {
    position: relative;
    font-family: "Orkney";

    @media (${theme.breakpoints.xs}) {
      font-size: 5vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 1.5vw;
    }
  }

  .nav-link:link,
  .nav-link:visited,
  .nav-link:active {
    position: relative;
    margin-inline: 2.5vw;
  }

  .nav-link::after,
  .name::after {
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

  .nav-link:hover::after,
  .name:hover::after {
    transform: scaleX(1);
    transform-origin: 50%;
  }

  .nav-item:nth-child(n + 1) .nav-link::after {
    background-color: var(--orange);
  }

  .nav-item:nth-child(n + 2) .nav-link::after {
    background-color: var(--crimson-red);
  }

  .nav-item:nth-child(n + 3) .nav-link::after {
    background-color: var(--lime-green);
  }

  .nav-item:nth-child(n + 4) .nav-link::after,
  .name::after {
    background-color: var(--cerulean-blue);
  }
`;

const StyledMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10vw;

  .lines {
    width: 100%;
    height: 1vw;
    background-color: var(--dark-grey);
    margin-block: 1.5vw;
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
  padding-top: 13vw;

  .mobile-dropdown {
    list-style-type: none;
    display: block;
  }

  .dropdown-item {
    padding-block: 5vw;
    border-bottom: solid 0.5vw;
    border-color: var(--light-grey);
  }

  .dropdown-link {
    display: flex;
    list-style-type: none;
    font-size: 5vw;
    justify-content: center;
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
  align-items: center;
  padding-block: 5vw;

  .portfolio-link-container {
    padding-inline: 3.5vw;
    min-width: 68vw;
  }

  img {
    max-width: 12vw;
    max-height: 13vw;
    margin-inline: 2.5vw;
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
    navClass === "desktop-nav" ? (linkClass = "nav") : (linkClass = "dropdown");

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
              href={sidebarData.behance.url}
              target="_blank"
              rel="external noreferrer"
            >
              <img src={sidebarData.behance.ceruleanIcon} alt="Behance Icon" />
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

  //todo: dismount/mount dropdown based on isMenuOpen instead of CSS visiblity
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
