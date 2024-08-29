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
    align-items: center;
    flex-direction: column;
    gap: 10vw;
    padding-top: 15vw;
    padding-bottom: 40vw;
  }

  @media (${theme.breakpoints.sm}) {
    align-items: flex-start;
    gap: 0;
    flex-direction: row;
    padding-top: 5vw;
    padding-bottom: 10vw;
    padding-inline: 8vw;

  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;

    @media (${theme.breakpoints.xs}) {
      text-align: center;
    }

    @media (${theme.breakpoints.sm}) {
      text-align: start;
    }
  }

  .hero-text {
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

  .typed-text {
    position: relative;
    top: 1vw;
  }

  .bubble-hero-container {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    bottom: 1vw;
  }
`;

function Hero() {
  return (
    <StyledHero id="hero">
      <div className="hero-text-container">
        <h1 className="typed-text">Hello {heroData.typedText[0]}</h1>
        <div className="hero-text">
          <p>{heroData.about1}</p>
          <p>{heroData.about2}</p>
        </div>
      </div>
      <div className="bubble-hero-container">
        {createBubble(bubbleData.bubble1)}
        {createBubble(bubbleData.bubble2)}
        {createBubble(bubbleData.bubble3)}
      </div>
    </StyledHero>
  );
}

export default Hero;
