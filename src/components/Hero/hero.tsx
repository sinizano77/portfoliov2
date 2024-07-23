import * as React from 'react';
import styled from 'styled-components';
import { heroData } from "../../db/mainDb";
import Bubble from "../bubble";

//CSS styling for each element

const StyledHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 45%;
    margin-left: 2rem;
  }

  .heroText {
    font-family: 'Orkney';
    font-size: 25px;
    position: relative;
    left: 5.3rem;
    text-wrap: wrap;
    max-width: 90%;
  }

  .typedText {
    margin: 1rem 11rem -2.5rem 10rem;
    position: relative;
    right: 5rem;
    font-family: 'JetBrainsMono';
    font-size: 60px;
    min-width: 80%;
  }
  
  .bubbleContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    min-width: 50%;
    margin-left: 10rem;
  }

  `;
  


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
        {Bubble("1rem -3rem 0 0","1rem", "#FFE601", "5.5rem", "#0086D1")}
        {Bubble("25rem -11rem 0 0","0.65rem", "#35DE19", "3rem", "#FF3737")}
        {Bubble("auto auto auto auto","1rem", "#FF5C00", "19rem", null, heroData.image)}
      </div>
    </StyledHero>
  );
};

export default Hero;