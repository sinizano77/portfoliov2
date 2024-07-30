import * as React from 'react';
import styled from 'styled-components';
import { navData } from "../../db/mainDb";
import { NavLink } from "react-router-dom";

const StyledNavBar= styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  height: 2vw;
  z-index: 1;
  font-family: 'Orkney';
  font-size: 1.5vw;
  align-items: center;
  justify-content: center;
  padding: 1vw 0 1vw 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 0.75vw 0 rgba(0,0,0,.1);
    
  a:link, a:visited, a:hover, a:active  {
    text-decoration: none !important;
    color: #343434;
    margin: 0 2vw 0 2vw;
  }
`;

function Navbar() {
    return <StyledNavBar>
        {navData.map((navData) => (
            <NavLink to='/'>{navData.name}</NavLink>
        ))}
    </StyledNavBar>
};

export default Navbar;