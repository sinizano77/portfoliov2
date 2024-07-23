import * as React from 'react';
import styled from 'styled-components';
import { navData } from "../../db/mainDb";
import { NavLink } from "react-router-dom";

const StyledNavText = styled.div`
  font-family: 'Orkney';
  font-size: 22px;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 1.3rem 32% 1.3rem 32%;
  
  a:link, a:visited, a:hover, a:active  {
    text-decoration: none !important;
    color: #343434;
  }
`;

function Navbar() {
    return <StyledNavText>
        {navData.map((navData) => (
            <NavLink to='/'>{navData.name}</NavLink>
        ))}
    </StyledNavText>
};

export default Navbar;