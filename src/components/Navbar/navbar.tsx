import { useState } from "react";
import * as React from "react";
import styled from "styled-components";
import { navData } from "../../db/mainDb";
import { theme } from "../../global/theme";
import { sidebarData } from "../../db/mainDb";
import useMediaQuery from "../../hooks/useMediaQuery";

//Dropdown logic needs heavy refactoring
//Should use useEffect + componentDismount instead of CSS visibility alternaives
const StyledNavBar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 4;
  align-items: center;
  padding: 1.25vw 0;
  background-color: white;
  box-shadow: var(--shadow-bottom);

  a:link,
  a:visited,
  a:active {
    position: relative;
    text-decoration: none !important;
    color: var(--dark-grey);
    margin: 0 2vw 0 2vw;
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

  .desktopNavLinks {
    display: inherit;
    list-style-type: none;
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

  .lines {
    width: 100%;
    height: 1vw;
    background-color: var(--dark-grey);
    margin: 1.5vw 0;
    border-radius: 3vw / 3vw;
  }

  .lines.clicked:nth-child(n + 1) {
    transform: translate(0, 2vw) rotate(-45deg);
    transition: var(--transition);
  }

  .lines.clicked:nth-child(n + 2) {
    transform: translate(0, -2vw) rotate(45deg);
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
  padding-top: 15vw;

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none !important;
    color: var(--dark-grey);
  }

  .mobileDropdownLinks {
    list-style-type: none;
    display: block;
    justify-content: center;
    align-items: center;
    box-sizing: box-border;
    padding-inline: 0 !important;
    margin-block-end: 1vw !important;
    min-width: 85%;
  }

  li {
    display: flex;
    justify-content: center;
    list-style-type: none;
    font-size: 5vw;
    padding: 5vw 0;
    border-bottom: solid 0.5vw;
    border-color: var(--light-grey);
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

  &.dropdown.hidden {
    visibility: hidden;
  }

  &.dropdown.visible {
    visibility: visible;
    transform: translateY(0vw);
  }
`;

const StyledPortfolioLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw 0;

  .linkContainer {
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
  const [isDropdownOpenPrior, setIsDropdownOpenPrior] = useState(false);

  function NavLinks(linkClass: string) {
    return (
      <menu className={linkClass}>
        {navData.map((navItem) => (
          <li className={`${navItem.name}Link`}>
            <a href={navItem.link} rel="noreferrer">{navItem.name}</a>
          </li>
        ))}
      </menu>
    );
  }

  //dropdown state can be controlled by clicking on MenuIcon
  function MenuIcon() {
    return (
      <StyledMenuIcon className="menuIcon" onClick={updateMenu}>
        <span className={lineClass}></span>
        <span className={lineClass}></span>
      </StyledMenuIcon>
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

  //dropdown state can also be controlled by mediaQuery (isMobile)
  //if dropdown is open in mobile and then switches to desktop, hide dropdown
  //if dropdown was open prior and switches back to mobile, reopen dropdown
  function updateDropdownClass() {
    if (isMobile && isMenuOpen) {
      setDropdownClass("dropdown hidden");
      setIsDropdownOpenPrior(!isDropdownOpenPrior);
      setIsMenuOpen(!isMenuOpen);
    } else if (!isMobile && isDropdownOpenPrior) {
      setDropdownClass("dropdown visible");
      setIsDropdownOpenPrior(!isDropdownOpenPrior);
      setIsMenuOpen(!isMenuOpen);
    }

    return dropdownClass;
  }

  return (
    <>
      <StyledNavBar className="navBar">
        {isMobile ? NavLinks("desktopNavLinks") : MenuIcon()}
      </StyledNavBar>
      <StyledDropdown className={updateDropdownClass()}>
        {NavLinks("mobileDropdownLinks")}
        <StyledPortfolioLinks>
          <span />
          <div className="linkContainer">
            <a href={sidebarData.github.url} target="_blank" rel="external noreferrer">
              <img src={sidebarData.github.ceruleanIcon} alt="Github Icon" />
            </a>
            <a href={sidebarData.linkedin.url} target="_blank" rel="external noreferrer">
              <img
                src={sidebarData.linkedin.ceruleanIcon}
                alt="LinkedIn Icon"
              />
            </a>
            <a href={sidebarData.resume.url} target="_blank" rel="external noreferrer">
              <img src={sidebarData.resume.ceruleanIcon} alt="Resume Icon" />
            </a>
          </div>
          <span />
        </StyledPortfolioLinks>
      </StyledDropdown>
    </>
  );
}

export default Navbar;
