import { aboutData } from "../../db/mainDb";
import { theme } from "../../global/theme";

function getBubbleStyle(type: string) {
  switch (type) {
    case "bubble-1": {
      return `
        border-color: var(--cerulean-blue);
        background-image: url("${aboutData.images.me2}");

        @media (${theme.breakpoints.xs}) {
          margin: auto auto -30vw -13vw;
          border-width: 3vw;
          min-width: 40vw;
          min-height: 40vw;
        }

        @media (${theme.breakpoints.sm}) {
          margin: auto auto -23vw 8vw;
          border-width: 1.1vw;
          min-width: 17vw;
          min-height: 17vw;
        }
      `;
    }
    case "bubble-2": {
      return `
        border-color: var(--lime-green);
        background-image: url("${aboutData.images.me1}");

        @media (${theme.breakpoints.xs}) {
          margin: 6vw -22vw auto auto;
          border-width: 2.5vw;
          min-width: 35vw;
          min-height: 35vw;
        }

        @media (${theme.breakpoints.sm}) {
          margin: auto 3.5vw auto auto;
          border-width: 1vw;
          min-width: 14vw;
          min-height: 14vw;
        }
      `;
    }
    case "bubble-3": {
      return `
        border-color: var(--yellow);
        background-image: url("${aboutData.images.steve2}");

        @media (${theme.breakpoints.xs}) {
          margin: -13vw auto auto 0vw;
          border-width: 2.5vw;
          min-width: 30vw;
          min-height: 30vw;
        }

        @media (${theme.breakpoints.sm}) {
          margin: 1.5vw 10vw auto auto;
          border-width: 0.9vw;
          min-width: 11vw;
          min-height: 11vw;
        }
      `;
    }
  }
}

export default getBubbleStyle;
