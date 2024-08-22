import * as React from "react";
import styled from "styled-components";

interface BladeProps {
  color: string;
  angletop: string;
  anglebottom: string;
}

const StyledBlade = styled.div<BladeProps>`
  display: flex;
  position: relative;
  background-color: ${(props) => props.color};
  width: 100%;
  top: -5vw;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 10vw;
    width: 100%;
    background-color: ${(props) => props.color};
    z-index: 1;
  }

  &:before {
    top: -5vw;
    transform: skewY(${(props) => props.angletop});
    box-shadow: var(--shadow-top);
  }

  &:after {
    bottom: -1.5vw;
    transform: skewY(${(props) => props.anglebottom});
    box-shadow: var(--shadow-bottom);
  }
`;

function Blade(props: any) {
  return (
    <StyledBlade
      color={props.color}
      angletop={props.angletop}
      anglebottom={props.anglebottom}
    >
      {props.children}
    </StyledBlade>
  );
}

export default Blade;
