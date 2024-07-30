import * as React from 'react';
import styled from 'styled-components';
import { theme } from "../theme";

interface BubbleProps {
    margins: any;
    borderwidths: any;
    bordercolor: string;
    sizes: any;
    colorfill?: string;
    imgfill?: string;
}

const StyledBubble = styled.div<BubbleProps>`
  position: relative;
  border-radius: 50%;
  border-style: solid;
  border-color: ${(props) => props.bordercolor};
  background-color: ${(props) => props.colorfill};
  background-image: url(${(props) => props.imgfill});
  background-position: center;
  background-size: cover;

  @media (${theme.breakpoints.xs}) {
    margin: ${(props) => props.margins.xs};
    min-width: ${(props) => props.sizes.xs};
    min-height: ${(props) => props.sizes.xs};
    border-width: ${(props) => props.borderwidths.xs};
  }

  @media (${theme.breakpoints.sm}) {
    margin: ${(props) => props.margins.sm};
    min-width: ${(props) => props.sizes.sm};
    min-height: ${(props) => props.sizes.sm};
    border-width: ${(props) => props.borderwidths.sm};
  }
`;

function Bubble(
  margins: any,
  borderWidths: any, 
  borderColor: string, 
  sizes: any, 
  colorFill: string = "none", 
  imageFill: string = "none") {
    return <StyledBubble 
      margins={margins}
      borderwidths={borderWidths} 
      bordercolor={borderColor} 
      sizes={sizes}
      colorfill={colorFill}
      imgfill={imageFill}>
      </StyledBubble>
}

export default Bubble