import * as React from "react";
import styled from "styled-components";
import { theme } from "../../global/theme";
import { constructionData } from "./constructionDb";
import useMediaQuery from "../../hooks/useMediaQuery";

interface GearProps {
  margin: string;
  size: string;
  rotationdirection: string;
}

const StyledGear = styled.img<GearProps>`
  max-width: ${(props) => props.size};
  margin: ${(props) => props.margin};
  animation: spin 5s linear 0s infinite ${(props) => props.rotationdirection};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledUnderConstruction = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  background-color: #909090;
  color: white;
  padding: 3.5vw 0;

  .contentContainer {
    display: inherit;
    position: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10vw;
    text-align: center;
  }

  h2 {
    font-family: "JetBrainsMono";
    @media (${theme.breakpoints.xs}) {
      font-size: 7vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 3vw;
    }
  }

  .constructionText {
    @media (${theme.breakpoints.xs}) {
      font-size: 4.5vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-family: "Orkney";
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
  const isMobile = useMediaQuery(`(${theme.breakpoints.sm})`);

  return (
    <StyledUnderConstruction>
      <div className="contentContainer">
        <h2>{constructionData.title}</h2>
        <div>
          <StyledGear
            size={isMobile ? "5vw" : "20vw"}
            margin="auto"
            rotationdirection="normal"
            src={constructionData.gearIcon}
            alt="spinning gear icon"
          />
          <StyledGear
            size={isMobile ? "3vw" : "12vw"}
            margin={isMobile ? "0 0 2.5vw -1vw" : "0 0 10vw -4vw"}
            rotationdirection="reverse"
            src={constructionData.gearIcon}
            alt="spinning gear icon"
          />
        </div>
        <p className="constructionText">
          {constructionData.text}
          <a href={constructionData.figma} target="_blank" rel="external noreferrer">
            Figma
          </a>
          !
        </p>
        <p>{constructionData.footnote}</p>
      </div>
    </StyledUnderConstruction>
  );
}

export default UnderConstruction;
