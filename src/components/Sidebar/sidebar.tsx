import * as React from "react";
import styled from "styled-components";
import { sidebarData } from "../../db/mainDb";
import { theme } from "../../global/theme";
import { useMediaQuery } from "@mui/material";

const StyledSidebar = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: var(--cerulean-blue);
  z-index: 3;
  top: 10vw;
  border-radius: 0 0.5vw 0.5vw 0;

  .btn {
    background-color: transparent;
    cursor: pointer;
  }

  .btn:hover {
    background-color: var(--dark-cerulean);
    transition: var(--transition);
    border-radius: 0 0.5vw 0.5vw 0;
  }

  img {
    margin: 0.4vw 0.6vw;
    max-width: 2.8vw;
  }

  img:nth-last-child(1) {
    max-height: 3.5vw;
  }
`;

function Sidebar() {
  const isMobile = useMediaQuery(`(${theme.breakpoints.sm})`);
  const sidebar = (
    <StyledSidebar>
      <a
        className="btn"
        href={sidebarData.github.url}
        target="_blank"
        rel="external noreferrer"
      >
        <img src={sidebarData.github.whiteIcon} alt="Github Icon" />
      </a>
      <a
        className="btn"
        href={sidebarData.linkedin.url}
        target="_blank"
        rel="external noreferrer"
      >
        <img src={sidebarData.linkedin.whiteIcon} alt="LinkedIn Icon" />
      </a>
      <a
        className="btn"
        href={sidebarData.behance.url}
        target="_blank"
        rel="external noreferrer"
      >
        <img src={sidebarData.behance.whiteIcon} alt="Behance Icon" />
      </a>
      <a
        className="btn"
        href={sidebarData.resume.url}
        target="_blank"
        rel="external noreferrer"
      >
        <img src={sidebarData.resume.whiteIcon} alt="Resume Icon" />
      </a>
    </StyledSidebar>
  );

  return isMobile ? sidebar : null;
}

export default Sidebar;
