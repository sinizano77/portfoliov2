import * as React from "react";
import styled from "styled-components";

// todo?: superclass for Bubble and Blade since a lot of overlap code?
interface BladeProps {
  componentstylings: (type: string) => string; // function for dynamic styling
  type: string;
}

// base stylings for all "Blade" components
const StyledBlade = styled.div<BladeProps>`
  ${(props) => props.componentstylings(props.type)} /* Applying dynamic styles */
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

// Prevent the function prop `componentstylings` & `type` from being passed to the underlying DOM element
// Since these props are only for internal logic use, don't pass them to make them publicly visible on inspect
StyledBlade.shouldForwardProp = (prop: string) => {
  return prop !== 'componentstylings' && prop !== 'type';
};

function Blade(props: any) {
  const { componentstylings, type, ...rest } = props; // destructuring to avoid passing invalid props

  return (
    <StyledBlade 
      {...rest} // spreading the rest of the props here as they will be valid HTML attributes passed to the div
      componentstylings={componentstylings}
      type={type}
    >
      {props.children}
    </StyledBlade>
  );
}

export default Blade;
