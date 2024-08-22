import * as React from "react";
import styled from "styled-components";
import { heroData } from "../../db/mainDb";
import { bubbleData } from "./bubbleHeroData";
import { createBubble } from "../bubble";
import { theme } from "../../global/theme";
//CSS styling for each element

const StyledHero = styled.section`
  display: flex;
  position: relative;
  top: 1.5vw;
  background-image: var(--gradient);

  @media (${theme.breakpoints.xs}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5vw;
    padding: 15vw 10vw 40vw;
  }

  @media (${theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 5vw 0 10vw;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (${theme.breakpoints.xs}) {
      max-width: 100%;
      text-align: center;
      margin-left: none;
    }

    @media (${theme.breakpoints.sm}) {
      max-width: 43vw;
      text-align: start;
      margin-left: 7vw;
    }
  }

  .heroText {
    position: relative;
    text-wrap: wrap;

    p {
      font-family: "Orkney";
      
      @media (${theme.breakpoints.xs}) {
        font-size: 4.5vw;
      }

      @media (${theme.breakpoints.sm}) {
        font-size: 1.9vw;
      }
    }
  }

  .typedText {
    position: relative;
    top: 1vw;
  }

  .bubbleHeroContainer {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    min-width: 45vw;
    bottom: 1vw;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <div className="textContainer">
        <h1 className="typedText">Hello {heroData.typedText[0]}</h1>
        <div className="heroText">
          <p>{heroData.about1}</p>
          <p>{heroData.about2}</p>
        </div>
      </div>
      <div className="bubbleHeroContainer">
        {createBubble(bubbleData.bubble1)}
        {createBubble(bubbleData.bubble2)}
        {createBubble(bubbleData.bubble3)}
      </div>
    </StyledHero>
  );
}

export default Hero;
