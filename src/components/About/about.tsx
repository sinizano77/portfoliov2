import * as React from "react";
import styled from "styled-components";
import { theme } from "../../global/theme";
import Blade from "../blade";
import { createBubble } from "../bubble";
import { bubbleData } from "./bubbleAboutData";
import { aboutData, skillData } from "../../db/mainDb";

//todo: modify steve1.png to use useEffect rather than @media to avoid animation rerendering on resize
const StyledAbout = styled.section`
  position: relative;

  @media (${theme.breakpoints.xs}) {
    margin-top: -30vw;
  }

  @media (${theme.breakpoints.sm}) {
    margin-top: -15vw;
  }

  .steve {
    position: inherit;
    rotate: -5deg;
    transform: translateY(0);
    transition: var(--transition);

    @media (${theme.breakpoints.xs}) {
      width: 50vw;
      left: 33vw;
      bottom: -2vw;
    }

    @media (${theme.breakpoints.sm}) {
      width: 20vw;
      left: 10vw;
      bottom: 1.75vw;
    }
  }

  .steve:hover {
    transform: translateY(-3vw);
    transition: var(--transition);
  }

  .sectionContainer {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  .aboutContainer {
    display: inherit;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 4vw;
    padding-bottom: 2vw;

    @media (${theme.breakpoints.xs}) {
      flex-direction: column-reverse;
    }

    @media (${theme.breakpoints.sm}) {
      flex-direction: row;
    }
  }

  .bubbleAboutContainer {
    display: inherit;
    position: relative;
    flex-direction: column;
    right: 4vw;
    width: 50%;
  }

  .textContainer {
    display: inherit;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: white;
    bottom: 5vw;
    z-index: 2;

    @media (${theme.breakpoints.xs}) {
      width: 70%;
      text-align: center;
    }

    @media (${theme.breakpoints.sm}) {
      width: 40%;
      text-align: left;
    }
  }

  .skillsContainer {
    display: inherit;
    justify-content: center;

    @media (${theme.breakpoints.xs}) {
      flex-direction: column;
      padding: 0 11vw;
    }

    @media (${theme.breakpoints.sm}) {
      flex-direction: row;
      padding: 0 9vw;
    }
  }

  .frontendSkills,
  .backendSkills {
    display: inherit;
    flex-direction: column;
    position: relative;
    color: white;
    align-items: flex-start;

    @media (${theme.breakpoints.xs}) {
      max-width: 100%;
    }
    @media (${theme.breakpoints.sm}) {
      max-width: 50%;
    }
  }

  .backendSkills {
    @media (${theme.breakpoints.xs}) {
      left: none;
    }

    @media (${theme.breakpoints.sm}) {
      left: 4vw;
    }
  }

  .frontendSkillList,
  .backendSkillList {
    display: inherit;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    color: var(--dark-grey);
    padding: 0;
    justify-content: flex-start;
    margin-top: 0vw;
  }

  li {
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

  .pikminContainer {
    display: inherit;
    position: relative;
    justify-content: flex-end;
    rotate: -5deg;
    z-index: 2;
    right: 10vw;
    bottom: -2vw;
  }

  .pikminPython,
  .pikminJs,
  .pikminReact {
    @media (${theme.breakpoints.xs}) {
      max-height: 11vw;
    }

    @media (${theme.breakpoints.sm}) {
      max-height: 6vw;
    }
  }

  .tempWhite {
    position: relative;
    background-color: white;
    width: 100%;
    height: 4vw;
    bottom: 8vw;
    left: 0vw;
    z-index: 0;
  }
`;

function About() {
  return (
    <StyledAbout id="about">
      <img
        className="steve"
        src={aboutData.images.steve1}
        alt="Yellow Pikmin poking its head out"
      />
      <Blade color="var(--orange)" angletop="-5deg" anglebottom="-5deg">
        <div className="sectionContainer">
          <div className="aboutContainer">
            <div className="bubbleAboutContainer">
              {createBubble(bubbleData.bubble1)}
              {createBubble(bubbleData.bubble2)}
              {createBubble(bubbleData.bubble3)}
            </div>
            <div className="textContainer">
              <h2>{aboutData.title}</h2>
              <p>{aboutData.text1}</p>
              <p>{aboutData.text2}</p>
            </div>
          </div>

          <div className="skillsContainer">
            <div className="frontendSkills">
              <h3>{skillData.frontend.title}</h3>
              <ul className="frontendSkillList">
                {skillData.frontend.skills.map((currSkill, i) => (
                  <li className={`skillItem${i}`} key={i}>
                    {currSkill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="backendSkills">
              <h3>{skillData.backend.title}</h3>
              <ul className="backendSkillList">
                {skillData.backend.skills.map((currSkill, i) => (
                  <li className={`skillItem${i}`} key={i}>
                    {currSkill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pikminContainer">
            <img
              className="pikminPython"
              src={aboutData.pikmin.python}
              alt="pikmin carrying Python icon"
            />
            <img
              className="pikminJs"
              src={aboutData.pikmin.js}
              alt="pikmin carrying JavaScript icon"
            />
            <img
              className="pikminReact"
              src={aboutData.pikmin.react}
              alt="pikmin carrying React icon"
            />
          </div>
        </div>
      </Blade>
      <div className="tempWhite" />
    </StyledAbout>
  );
  //todo: find alt solution for tempWhite div to cover up bleeding Blade
}

export default About;
