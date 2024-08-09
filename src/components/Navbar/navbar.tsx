import { useState } from "react";
import * as React from "react";
import styled from 'styled-components';
import { navData } from "../../db/mainDb";
import { NavLink } from "react-router-dom";
import { theme } from "../../global/theme";
import useMediaQuery from '../../hooks/useMediaQuery';

//Dropdown logic needs heavy refactoring
const StyledNavBar= styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 2;
  font-family: 'Orkney';
  font-size: 1.5vw;
  align-items: center;
  padding: 1.25vw 0 1.25vw 0;
  background-color: white;
  box-shadow: 0 5px 0.75vw 0 rgba(0,0,0,.1);

  a:link, a:visited, a:hover, a:active  {
    text-decoration: none !important;
    color: var(--dark-grey);
    margin: 0 2vw 0 2vw;
  }
  
  .desktopNavLinks {
    display: inherit;
    list-style-type: none;
  }

  @media (${theme.breakpoints.xs}) {
    height: 15vw;
    justify-content: flex-end;
  }

  @media (${theme.breakpoints.md}) {
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
    border-radius: 3vw / 3vw
  }

  .lines.clicked:nth-child(1) {
    transform: translate(0, 2vw) rotate(-45deg);
    transition: var(--transition);
  }

  .lines.clicked:nth-child(2) {
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
  justify-content: center;
  z-index: 1;
  min-width: 100%;
  min-height: 60vw;
  font-family: 'Orkney';
  font-size: 5vw;
  background-color: white;
  overflow: hidden;

  a:link, a:visited, a:hover, a:active  {
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
    border-bottom: solid 0.5vw;
    border-color: var(--dark-grey);
    list-style-type: none;
    padding: 4vw 0;
  }

  li:nth-last-child(1) {
    border-bottom: none;
  }

  &.dropdown.closed {
    visibility: hidden;
    transform: translateY(-50vw);
    transition: cubic-bezier(0.32, 0.885, 0.175, 1.275) 0.5s;
  }

  &.dropdown.open {
    transform: translateY(14vw);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }

  &.dropdown.hidden {
    visibility: hidden;
  }

  &.dropdown.visible {
    visibility: visible;
    transform: translateY(14vw);
  }
`;

function Navbar() {
    const isMobile = useMediaQuery(`(${theme.breakpoints.md})`);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lineClass, setLineClass] = useState("lines unclicked");
    const [dropdownClass, setDropdownClass] = useState(`dropdown closed`);
    const [isDropdownOpenPrior, setIsDropdownOpenPrior] = useState(false);

    function NavLinks(linkClass: string) {
      return (
        <menu className={linkClass}>
          {navData.map((navData, i) => (
            <li key={i}>
              <NavLink to='/'>{navData.name}</NavLink>
            </li>
          ))}
        </menu>
      )
    }
    
    //dropdown state can be controlled by clicking on MenuIcon
    function MenuIcon() {
      return <StyledMenuIcon className="menuIcon" onClick={updateMenu}>
        <div className={lineClass}></div>
        <div className={lineClass}></div>
      </StyledMenuIcon>
    };

    function updateMenu() {
      if (!isMenuOpen) {
        setLineClass("lines clicked");
        setDropdownClass(`dropdown open`);
      }
      else {
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
        setDropdownClass("dropdown hidden")
        setIsDropdownOpenPrior(!isDropdownOpenPrior);
        setIsMenuOpen(!isMenuOpen);
      }
      else if (!isMobile && isDropdownOpenPrior) {
        setDropdownClass("dropdown visible");
        setIsDropdownOpenPrior(!isDropdownOpenPrior);
        setIsMenuOpen(!isMenuOpen);
      }

      return dropdownClass;
    }

    return <>
      <StyledNavBar className="navBar">
        {isMobile ? NavLinks("desktopNavLinks") : MenuIcon()}
      </StyledNavBar>
      <StyledDropdown className={updateDropdownClass()}>
        {NavLinks("mobileDropdownLinks")}
      </StyledDropdown>
    </>
};

export default Navbar;