import * as React from "react";
import styled from "styled-components";
import { theme } from "../../global/theme";
import { constructionData } from "./constructionDb";
import useMediaQuery from "../../hooks/useMediaQuery";

interface GearProps {
  margin: string;
  size: string;
  rotationDirection: string;
}

const StyledGear = styled.img<GearProps>`
  max-width: ${(props) => props.size};
  margin: ${(props) => props.margin};
  animation: spin 5s linear 0s infinite ${(props) => props.rotationDirection};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledUnderConstruction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: #909090;
  color: white;
  padding: 5vw 0 6vw 0;

  h2 {
    font-family: "JetBrainsMono";
    @media (${theme.breakpoints.xs}) {
      font-size: 7vw;
    }

    @media (${theme.breakpoints.md}) {
      font-size: 3vw;
    }
  }

  p {
    font-family: "Orkney";
    padding: 0 10vw;
    text-align: center;

    @media (${theme.breakpoints.xs}) {
      font-size: 4.5vw;
    }

    @media (${theme.breakpoints.md}) {
      font-size: 1.75vw;
    }
  }

  a:link,
  a:visited,
  a:active {
    color: #86c5ff;
  }
`;

function UnderConstruction() {
  const isMobile = useMediaQuery(`(${theme.breakpoints.md})`);

  return (
    <StyledUnderConstruction>
      <h2>{constructionData.title}</h2>
      <div>
        <StyledGear
          size={isMobile ? "5vw" : "20vw"}
          margin="auto"
          rotationDirection="normal"
          src={constructionData.gearIcon}
          alt="spinning gear icon"
        />
        <StyledGear
          size={isMobile ? "3vw" : "12vw"}
          margin={isMobile ? "0 0 2.5vw -1vw" : "0 0 10vw -4vw"}
          rotationDirection="reverse"
          src={constructionData.gearIcon}
          alt="spinning gear icon"
        />
      </div>
      <p>
        {constructionData.text}
        <a href={constructionData.figma} target="_blank" rel="external">
          Figma
        </a>
        !
      </p>
    </StyledUnderConstruction>
  );
}

export default UnderConstruction;
