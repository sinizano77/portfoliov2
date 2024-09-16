import * as React from "react";
import styled from "styled-components";
import Blade from "../blade";
import Bubble from "../bubble";
import getBladeStyle from "./bladeAboutData";
import getBubbleStyle from "./bubbleAboutData";
import { useState, useEffect } from "react";
import { theme } from "../../global/theme";
import { aboutData, skillData } from "../../db/mainDb";

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (${theme.breakpoints.xs}) {
    align-items: center;
    margin-top: -30vw;
  }

  @media (${theme.breakpoints.sm}) {
    align-items: flex-start;
    margin-top: -15vw;
  }

  .section-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  .about-container {
    display: inherit;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 4vw;

    @media (${theme.breakpoints.xs}) {
      flex-direction: column-reverse;
    }

    @media (${theme.breakpoints.sm}) {
      flex-direction: row;
    }
  }

  .bubble-about-container {
    display: inherit;
    position: relative;
    flex-direction: column;
    right: 4vw;
    width: 50%;
  }

  .about-text-container {
    display: inherit;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: white;
    bottom: 5vw;
    z-index: 2;

    b {
      font-family: "Orkney";
      text-decoration: underline;
    }

    @media (${theme.breakpoints.xs}) {
      width: 85%;
      text-align: left;
    }

    @media (${theme.breakpoints.sm}) {
      width: 40%;
      text-align: left;
    }
  }

  .skills-container {
    display: inherit;
    justify-content: center;

    @media (${theme.breakpoints.xs}) {
      flex-direction: column;
      padding-inline: 7vw;
    }

    @media (${theme.breakpoints.sm}) {
      flex-direction: row;
      padding-inline: 9vw;
    }
  }

  .frontend-skills,
  .backend-skills {
    display: inherit;
    flex-direction: column;
    position: relative;
    color: white;

    @media (${theme.breakpoints.xs}) {
      max-width: 100%;
    }
    @media (${theme.breakpoints.sm}) {
      max-width: 50%;
    }
  }

  .backend-skills {
    @media (${theme.breakpoints.xs}) {
      left: none;
    }

    @media (${theme.breakpoints.sm}) {
      left: 4vw;
    }
  }

  .frontend-skill-list,
  .backend-skill-list {
    display: inherit;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    color: var(--dark-grey);
    padding: 0;
    justify-content: flex-start;
    margin-top: 0vw;
  }

  .skill-item {
    background-color: #f7f7f7;

    @media (${theme.breakpoints.xs}) {
      margin: 1.5vw;
      padding: 2vw 3vw;
      border-radius: 1vw;
    }
    @media (${theme.breakpoints.sm}) {
      margin: 0.5vw;
      padding: 0.75vw 1.5vw;
      border-radius: 0.5vw;
    }
  }

  .pikmin-container {
    display: inherit;
    position: relative;
    justify-content: flex-end;
    width: 100%;
    rotate: -8deg;
    right: 10vw;
    z-index: 2;

    @media (${theme.breakpoints.xs}) {
      bottom: 6.5vw;
    }

    @media (${theme.breakpoints.sm}) {
      bottom: 2vw;
    }
  }

  .pikmin-python,
  .pikmin-js,
  .pikmin-react {
    @media (${theme.breakpoints.xs}) {
      max-height: 10vw;
    }

    @media (${theme.breakpoints.sm}) {
      max-height: 6vw;
    }
  }
`;

//todo?: have a global hook that can stop CSS animations/transitions on resize
interface SteveProps {
  transition: string;
}

const StyledSteve = styled.img<SteveProps>`
  position: inherit;
  rotate: -5deg;
  transform: translateY(0);
  transition: ${(props) => props.transition};

  @media (${theme.breakpoints.xs}) {
    width: 50vw;
    left: 8vw;
  }

  @media (${theme.breakpoints.sm}) {
    width: 20vw;
    left: 15vw;
    bottom: 2.5vw;
  }

  &:hover {
    transition: ${(props) => props.transition};

    @media (${theme.breakpoints.xs}) {
      transform: translateY(-8vw);
    }

    @media (${theme.breakpoints.sm}) {
      transform: translateY(-3vw);
    }
  }
`;

function Steve() {
  const [isResizing, setIsResizing] = useState(false);

  //stops CSS transition from playing on resize
  useEffect(() => {
    let timer: any;
    function SetResizingState() {
      timer ? clearTimeout(timer) : setIsResizing(true);

      timer = setTimeout(() => {
        setIsResizing(false);
      }, 100);
    }

    window.addEventListener("resize", SetResizingState);
    return () => window.removeEventListener("resize", SetResizingState);
  }, [isResizing]);

  return (
    <StyledSteve
      transition={isResizing ? "none" : "var(--transition)"}
      className="steve"
      src={aboutData.images.steve1}
      alt="Yellow Pikmin poking its head out"
    />
  );
}

function About() {
  return (
    <StyledAbout id="about">
      <Steve />
      <Blade componentStylings={getBladeStyle} type="section">
        <div className="section-container">
          <div className="about-container">
            <div className="bubble-about-container">
              <Bubble componentStylings={getBubbleStyle} type="bubble-1" />
              <Bubble componentStylings={getBubbleStyle} type="bubble-2" />
              <Bubble componentStylings={getBubbleStyle} type="bubble-3" />
            </div>
            <div className="about-text-container">
              <h2>{aboutData.title}</h2>
              <p>{aboutData.text1}</p>
              <p>{aboutData.text2}</p>
              <p>{aboutData.text3}</p>
              <p>{aboutData.text4}</p>
            </div>
          </div>

          <div className="skills-container">
            <div className="frontend-skills">
              <h3>{skillData.frontend.title}</h3>
              <ul className="frontend-skill-list">
                {skillData.frontend.skills.map((currSkill, i) => (
                  <li className="skill-item" key={i}>
                    {currSkill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="backend-skills">
              <h3>{skillData.backend.title}</h3>
              <ul className="backend-skill-list">
                {skillData.backend.skills.map((currSkill, i) => (
                  <li className="skill-item" key={i}>
                    {currSkill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Blade>
      <div className="pikmin-container">
        <img
          className="pikmin-python"
          src={aboutData.pikmin.python}
          alt="pikmin carrying Python icon"
        />
        <img
          className="pikmin-js"
          src={aboutData.pikmin.js}
          alt="pikmin carrying JavaScript icon"
        />
        <img
          className="pikmin-react"
          src={aboutData.pikmin.react}
          alt="pikmin carrying React icon"
        />
      </div>
      <Blade componentStylings={getBladeStyle} type="experience-top" />
    </StyledAbout>
  );
}

export default About;
