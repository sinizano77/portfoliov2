import * as React from 'react';
import styled from 'styled-components';
import { heroData } from "../../db/mainDb";
import { bubbleData } from "./bubbleHeroData";
import Bubble from "../bubble";
import { theme } from "../../theme";
//CSS styling for each element

const StyledHero = styled.section`
  display: flex;
  position: relative;
  top: 1.5vw;
  background-image: linear-gradient(180deg, white, #D9D9D9);
  padding-bottom: 10vw;
  padding-top: 5vw;

  @media (${theme.breakpoints.xs}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5vw;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media (${theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 0;
    padding-right: 0;
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
    font-family: 'Orkney';
    font-size: 1.9vw;
    position: relative;
    text-wrap: wrap;

    @media (${theme.breakpoints.xs}) {
      font-size: 4.5vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 1.9vw;
    }
  }

  .typedText {
    position: relative;
    font-family: 'JetBrainsMono';
    font-size: 5vw;

    @media (${theme.breakpoints.xs}) {
      font-size: 10vw;
      max-height: 25vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 5vw;
      max-height: 13vw;
    }
  }
  
  .bubbleContainer {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    min-width: 45vw;
  }
  `;

function createBubble(bubble: any) {
  const margins = bubble.margins;
  const borderWidths = bubble.borderWidths;
  const borderColor = bubble.borderColor;
  const sizes = bubble.sizes;
  const colorFill = bubble.colorFill;
  const imageFill = bubble.imageFill
  return (Bubble(margins, borderWidths, borderColor, sizes, colorFill, imageFill))
}

function Hero() {

  return (
    <StyledHero>
      <div className='textContainer'>
          <div className='typedText'>
            <p>Hello {heroData.typedText[0]}</p>
          </div>
          <div className='heroText'>
            <p>{heroData.about1}</p>
            <p>{heroData.about2}</p>
          </div>
      </div>
      <div className='bubbleContainer'>
        {createBubble(bubbleData.bubble1)}
        {createBubble(bubbleData.bubble2)}
        {createBubble(bubbleData.bubble3)}
      </div>
    </StyledHero>
  );
};

export default Hero;