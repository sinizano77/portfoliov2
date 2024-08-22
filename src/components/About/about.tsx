import * as React from "react";
import styled from "styled-components";
import Blade from "../blade";
import { createBubble } from "../bubble";
import { bubbleData } from "./bubbleAboutData";
import { aboutData, skillData } from "../../db/mainDb";


//todo: modify steve1.png to use useEffect rather than @media to avoid animation rerendering on resize
const StyledAbout = styled.section`
  position: relative;
  margin-top: -15vw;

  .steve {
    position: inherit;
    width: 20vw;
    bottom: 1.75vw;
    left: 10vw;
    rotate: -5deg;
    transform: translateY(0);
    transition: var(--transition);
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
    right: 1vw;
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
    width: 40%;
    color: white;
    bottom: 5vw;
    z-index: 2;
  }

  .skillsContainer {
    display: inherit;
    flex-direction: row;
    justify-content: center;
    padding: 0 9vw;
  }

  .frontendSkills,
  .backendSkills {
    position: relative;
    color: white;
    display: inherit;
    flex-direction: column;
    max-width: 50%;
  }

  .backendSkills {
    left: 4vw;
  }

  .frontendSkillList,
  .backendSkillList {
    display: inherit;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    color: var(--dark-grey);
    padding: 0;
  }

  li {
    font-size: 1.3vw;
    border-radius: 0.5vw;
    background-color: #d9d9d9;
    margin: 0.5vw;
    padding: 1vw;
    max-height: 1.5vw;
  }

  .pikminContainer {
    displaY: inherit;
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
    max-height: 6vw;
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
    <StyledAbout>
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
                  <li className={`skillItem${i}`}>{currSkill}</li>
                ))}
              </ul>
            </div>
            <div className="backendSkills">
              <h3>{skillData.backend.title}</h3>
              <ul className="backendSkillList">
                {skillData.backend.skills.map((currSkill, i) => (
                  <li className={`skillItem${i}`}>{currSkill}</li>
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
      <div className="tempWhite"/>
    </StyledAbout>
  );
  //todo: find alt solution for tempWhite div to cover up bleeding Blade
}

export default About;
