import * as React from 'react';
import styled from 'styled-components';
import { sidebarData } from "../../db/mainDb";
import { theme } from "../../global/theme";

const StyledSidebar = styled.aside`
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: var(--cerulean-blue);
    z-index: 1;
    top: 10vw;
    border-radius: 0 0.5vw 0.5vw 0;

    .btn {
        background-color: transparent;
        cursor: pointer;
        padding: 0 0.1vw;
    }

    .btn:hover {
        background-color: var(--dark-cerulean);
        transition: var(--transition);
        border-radius: 0 0.5vw 0.5vw 0;
    }

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.6vw 0.5vw;
        max-height: 2.8vw;
        max-width: 2.8vw;
    }
    
    img:nth-last-child(1) {
        max-height: 4vw;
    }

    @media (${theme.breakpoints.xs}) {
        visibility: hidden;
    }

    @media (${theme.breakpoints.md}) {
        visibility: visible;
    }
`;

function Sidebar() {
    return (
        <StyledSidebar>
            <a className='btn' href={sidebarData.github.url} target="_blank" rel="external">
                <img src={sidebarData.github.whiteIcon} alt="Github Icon"/>
            </a>
            <a className='btn' href={sidebarData.linkedin.url} target="_blank" rel="external">
                <img src={sidebarData.linkedin.whiteIcon} alt="LinkedIn Icon"/>
            </a>
            <a className='btn' href={sidebarData.resume.url} target="_blank" rel="external">
                <img src={sidebarData.resume.whiteIcon} alt="Resume Icon"/>
            </a>
        </StyledSidebar>
    );
};

export default Sidebar;