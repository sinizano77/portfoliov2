import { createGlobalStyle } from "styled-components";
import { fonts } from "../fonts/fonts";
import { variables } from "./cssVariables";
import { theme } from "../global/theme";

export const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    scrollbar-width: thin;
    scroll-behavior: smooth !important;
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
    font-weight: 100;

    @media (${theme.breakpoints.xs}) {
      font-size: 8vw;
      text-underline-offset: 1vw;
      text-decoration: underline solid white 0.5vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 3.25vw;
      text-underline-offset: 0.6vw;
      text-decoration: underline solid white 0.2vw;
    }
  }

  h3 {
    font-family: "JetBrainsMono";
    font-weight: 100;

    @media (${theme.breakpoints.xs}) {
      text-underline-offset: 1.5vw;
      text-decoration: underline solid white 0.4vw;
      font-size: 5.5vw;
    }

    @media (${theme.breakpoints.sm}) {
      text-underline-offset: 0.6vw;
      text-decoration: underline solid white 0.2vw;
      font-size: 2.25vw;
    }
  }

  p {
    font-family: "CelloSansLight";
    font-weight: 100;

    @media (${theme.breakpoints.xs}) {
      letter-spacing: 0.1vw;
      line-height: none;
      font-size: 4vw;
    }

    @media (${theme.breakpoints.sm}) {
      letter-spacing: 0.05vw;
      line-height: 2vw;
      font-size: 1.3vw;
    }
  }

  li {
    font-family: "Orkney";

    @media (${theme.breakpoints.xs}) {
      font-size: 4vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 1.5vw;
    }
  }
`;
