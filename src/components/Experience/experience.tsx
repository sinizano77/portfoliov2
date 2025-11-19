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

  .timeline-wrapper {
    position: relative;
    width: 80%;
    overflow: visible;
  }

  .fade-container {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .fade-left,
  .fade-right {
    position: absolute;
    width: 4vw;
    height: 100%;
    top: 0;
    z-index: 2;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(to right, white 0%, transparent 100%);
  }

  .fade-right {
    right: 0;
    background: linear-gradient(to left, white 0%, transparent 100%);
  }
`;

//todo: numsItems not used currently - remove if not needed
interface TimelineProps {
  numitems: number;
}

const StyledTimeline = styled.div<TimelineProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
  position: relative;
  padding-block: 4vw;

  .timeline-line {
    position: absolute;
    background-color: var(--light-grey);
    border-radius: 1vw;

    @media (${theme.breakpoints.xs}) {
      height: 0.7vw;
    }

    @media (${theme.breakpoints.sm}) {
      height: 0.25vw;
    }
  }

  .progress-line {
    background-color: var(--crimson-red);
    height: 100%;
    width: 25%;
    border-radius: 1vw;
  }

  ol {
    display: flex;
    flex-direction: row;
    position: relative;
    column-gap: 5vw;
    width: fit-content;
    z-index: 2;
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
  cursor: pointer;
  
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
    content: "";
    display: flex;
    border-radius: 50%;
    background-color: white;
    position: relative;
    align-items: center;
    justify-content: center;
    align-content: center;
    z-index: 1;
    aspect-ratio: 1;

    @media (${theme.breakpoints.xs}) {
      width: 0.75rem;
      height: 0.75rem;
      border: 0.2rem solid var(--crimson-red);
    }

    @media (${theme.breakpoints.sm}) {
      width: 1rem;
      height: 1rem;
      border: 0.25rem solid var(--crimson-red);
    }
  }

  .timeline-bubble-inner {
    background-color: transparent; 
    border-radius: 50%;
    width: 0; 
    height: 0; 
    transition: var(--transition);
    display: flex;
  }

  &:hover .timeline-bubble-inner, &:active .timeline-bubble-inner {
    background-color: var(--crimson-red);
    width: 50%;
    height: 50%;
  }


`;

function Experience() {
  const numItems = experienceData.experiences.length;
  const timelineRef = useRef(null);
  const olRef = useRef(null);
  const timelineLineRef = useRef(null);
  const fadeContainerRef = useRef(null);

  // Directly maniuplates the styling for some timeline elements' dimensions
  // Elements include timeline line width, timeline line vertical centering, timeline fades' positioning
  function updateDimensions() {
    // Makes sure that all required refs are present before using
    if (!olRef.current || !timelineLineRef.current || !timelineRef.current || !fadeContainerRef.current) return;
    
    // Forces a layout recalculation on the timeline before continuing the code
    // void() invokes the expression without needing a return 
    void(timelineRef.current.offsetHeight);

    const estimatedWidth = Math.max(
      olRef.current.scrollWidth,
      // Fallback calculation that manually calculates the scrollbar width
      // olRef.current.scrollWidth isn't always reliable for time efficient calculations on resize
      // At least according to Google
      olRef.current.children.length > 0 
      ? olRef.current.children[0].offsetWidth * numItems * 1.2 // 1.2 is 20% for spacing
      : olRef.current.scrollWidth
    );

    const bubbles = olRef.current.querySelectorAll(".timeline-bubble");
    if (bubbles.length === 0) return;

    const firstBubble = bubbles[0];
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const bubbleRect = firstBubble.getBoundingClientRect();
    
    // Calculates the offset from the timeline's top edge to the center of the bubble
    // Timeline bubble's top + middle of bubble - whole timeline's top
    const topOffset = bubbleRect.top + (bubbleRect.height / 2) - timelineRect.top;

    // Directly set the styles here
    timelineLineRef.current.style.top = `${topOffset}px`;
    timelineLineRef.current.style.width = `${estimatedWidth}px`;
  };

  useEffect(() => {
    // todo: remove Timeout since direct style manipulation instead of prop styling???
    function initDimensions() {
      // Set timeout delay to ensure rendering is complete
      setTimeout(updateDimensions, 100);
      // Run timeout again after a longer delay to catch any delayed rendering
      setTimeout(updateDimensions, 500);
    };

    initDimensions();
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Backup effect to handle any changes to the component that might affect layout
  useEffect(() => {
    updateDimensions();
  }, [experienceData]);

  return (
    <StyledExperience id="experience">
      <h2>{experienceData.title}</h2>
      <div className="timeline-wrapper">
        <div className="fade-container" ref={fadeContainerRef}>
          <div className="fade-left"/>
          <div className="fade-right"/>
        </div>
        <StyledTimeline 
          ref={timelineRef}
          numitems={numItems}>
          <ol ref={olRef}>
            {experienceData.experiences.map((currExperience, i) => (
              <StyledDate key={i}>
                <h6>{currExperience.title}</h6>
                <p>{currExperience.date}</p>
                <a className="timeline-bubble">
                  <div className="timeline-bubble-inner"/>
                </a>
              </StyledDate>
            ))}
          </ol>
          <div className="timeline-line" ref={timelineLineRef}>
            <span className="progress-line"/>
          </div>
        </StyledTimeline>
      </div>
    </StyledExperience>
  );
}

export default Experience;