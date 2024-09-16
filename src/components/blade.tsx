import * as React from "react";
import styled from "styled-components";

interface BladeProps {
  componentStylings: Function;
  type: string;
}

//base stylings for all "Blade" components
const StyledBlade = styled.div<BladeProps>`
  ${(props) => props.componentStylings(props.type)}
  display: flex;
  position: relative;
  width: 100%;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
  }

  &:before {
    box-shadow: var(--shadow-top);
  }

  &:after {
    box-shadow: var(--shadow-bottom);
  }
`;

function Blade(props: any) {
  return (
    <StyledBlade 
      componentStylings={props.componentStylings} 
      type={props.type}
    >
      {props.children}
    </StyledBlade>
  );
}

export default Blade;
