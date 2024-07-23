import * as React from 'react';
import styled from 'styled-components';

interface BubbleProps {
    margin: string;
    borderwidth: string;
    bordercolor: string;
    sz: string;
    colorfill?: string;
    imgfill?: string;
}

const StyledBubble = styled.div<BubbleProps>`
  position: relative;
  margin: ${(props) => props.margin};
  border-radius: 50%;
  border-style: solid;
  border-width: ${(props) => props.borderwidth};
  border-color: ${(props) => props.bordercolor};
  width: ${(props) => props.sz};
  height: ${(props) => props.sz};
  background-color: ${(props) => props.colorfill};
  background-image: url(${(props) => props.imgfill});
  background-position: center;
  background-size: cover;
`;

function Bubble(
  margin: string = "auto",
  borderWidth: string, 
  borderColor: string, 
  size: string, 
  colorFill: string = null, 
  imageFill: string = null) {
    return <StyledBubble 
      margin={margin}
      borderwidth={borderWidth} 
      bordercolor={borderColor} 
      sz={size}
      colorfill={colorFill}
      imgfill={imageFill}>
      </StyledBubble>
}

export default Bubble