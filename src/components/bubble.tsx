import * as React from "react";
import styled from "styled-components";

interface BubbleProps {
  componentStylings: Function;
  type: string;
}

//base stylings for all "Bubble" components
const StyledBubble = styled.div<BubbleProps>`
  ${(props) => props.componentStylings(props.type)}
  position: relative;
  border-radius: 50%;
  border-style: solid;
  background-position: center;
  background-size: cover;
  z-index: 3;
`;

function Bubble(props: any) {
  return (
    <StyledBubble
      componentStylings={props.componentStylings}
      type={props.type}
    />
  );
}

export default Bubble;
