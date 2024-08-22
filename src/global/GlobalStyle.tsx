import { createGlobalStyle } from "styled-components";
import { fonts } from "../fonts/fonts";
import { variables } from "./cssVariables";
import { theme } from "../global/theme";

export const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    scrollbar-width: thin;
  }

  body {
    width: 100%;
  }
  
  h1 {
    font-family: "JetBrainsMono";
    font-weight: 200;

    @media (${theme.breakpoints.xs}) {
      font-size: 10vw;
      max-height: 25vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 5vw;
      max-height: 13vw;
    }
  }

  h2 {
    font-family: "JetBrainsMono";
    text-underline-offset: 0.6vw;
    text-decoration: underline solid white 0.2vw;
    font-size: 3.25vw;
    font-weight: 100;
  }

  h3 {
    font-family: "JetBrainsMono";
    text-underline-offset: 0.6vw;
    text-decoration: underline solid white 0.2vw;
    font-size: 2.25vw;
    font-weight: 100;
  }

  p {
    font-family: "OrkneyLight";
    font-size: 1.3vw;

    @media (${theme.breakpoints.xs}) {
      letter-spacing: none;
      line-height: none;
    }

    @media (${theme.breakpoints.sm}) {
      letter-spacing: 0.05vw;
      line-height: 2vw;
    }
  }

  li {
    font-family: "Orkney";
    font-size: 1.5vw;
  }
`;
