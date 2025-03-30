import * as React from "react";
import styled from "styled-components";
import Blade from "../blade";
import { experienceData } from "../../db/mainDb";
import { useRef, useState, useEffect } from "react";
import { theme } from "../../global/theme";

const StyledExperience = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5vw;

  h2 {
    color: var(--dark-grey);
    text-decoration: underline solid var(--dark-grey);
  }
`;

interface TimelineProps {
  numitems: number;
  linewidth: number;
  linetop: number;
}

const StyledTimeline = styled.div<TimelineProps>`
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  padding-block: 4vw;

  .line {
    position: absolute;
    height: 0.5vw;
    background-color: var(--light-grey);
    border-radius: 1vw;
    position: relative;
    width: ${(props) => props.linewidth}px;
    top: ${(props) => props.linetop}px;
  }

  .filling-line {
    background-color: var(--crimson-red);
    height: inherit;
    width: 25%;
    border-radius: 1vw;
  }

  ol {
    display: inherit;
    flex-direction: row;
    position: relative;
    column-gap: 5vw;
    width: fit-content;
    z-index: 1;
  }
`;

const StyledDate = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  text-align: center;
  position: relative;
  min-width: fit-content;
  
  p {
    font-family: "Orkney";
    color: #737373;
    line-height: 1vw;

    @media (${theme.breakpoints.xs}) {
      font-size: 4vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 1.5vw;
    }
  }

  h6 {
    color: var(--crimson-red);

    @media (${theme.breakpoints.xs}) {
      font-size: 5vw;
    }

    @media (${theme.breakpoints.sm}) {
      font-size: 1.75vw;
    }
  }

  .timeline-bubble {
    display: flex;
    border-radius: 50%;
    border: 0.5vw solid var(--crimson-red);
    background-color: white;
    width: 2vw;
    height: 2vw;
  }
`;

function Experience() {
  const numItems = experienceData.experiences.length;
  const olRef = useRef(null);
  const lineRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    // sets width of the timeline line to match the sibling element width, <ol>
    function updateLineWidth() {
      if (olRef.current) {
        setLineWidth(olRef.current.scrollWidth);
      }
    };

    // sets position of the timeline line to be vertically centered with the bubbles of the timeline
    function updateLinePosition() {
      if (olRef.current && olRef.current.children[0]) {
        const firstBubble = olRef.current.children[0].querySelector(".timeline-bubble");

        if (firstBubble) {
          const rect = firstBubble.getBoundingClientRect();
          const olRect = olRef.current.getBoundingClientRect();
          const relativeTop = (olRect.top / 2) - (rect.top / 2);

          setLineTop(relativeTop);
        }
      }
    }

    function updatePosition() {
      updateLineWidth();
      updateLinePosition();
    }

    updatePosition();

    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <StyledExperience>
      <h2>{experienceData.title}</h2>
      <StyledTimeline 
        numitems = {numItems} 
        linewidth = {lineWidth}
        linetop={lineTop}>
        <ol ref={olRef}>
          {experienceData.experiences.map((currExperience, i) => (
            <StyledDate key={i}>
              <h6>{currExperience.title}</h6>
              <p>{currExperience.date}</p>
              <a className="timeline-bubble"/>
            </StyledDate>
          ))}
        </ol>
        <div className="line" ref={lineRef}>
          <span className="filling-line" />
        </div>
      </StyledTimeline>
    </StyledExperience>
  );
}

export default Experience;
