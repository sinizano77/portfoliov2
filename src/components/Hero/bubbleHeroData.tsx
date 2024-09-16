import { heroData } from "../../db/mainDb";
import { theme } from "../../global/theme";

function getBubbleStyle(type: string) {
  switch (type) {
    case "bubble-1": {
      return `
        border-color: var(--yellow);
        background-color: var(--cerulean-blue);

        @media (${theme.breakpoints.xs}) {
          margin: -3vw -4vw 0 0;
          border-width: 2.5vw;
          min-width: 15vw;
          min-height: 15vw;
        }

        @media (${theme.breakpoints.sm}) {
          margin: 1vw -4vw 0 0;
          border-width: 1.4vw;
          min-width: 7vw;
          min-height: 7vw;
        }
      `;
    }
    case "bubble-2": {
      return `
        border-color: var(--lime-green);
        background-color: var(--crimson-red);

        @media (${theme.breakpoints.xs}) {
          margin: 75vw 30vw 0 -5vw;
          border-width: 2vw;
          min-width: 10vw;
          min-height: 10vw;
        }

        @media (${theme.breakpoints.sm}) {
          margin: 29vw -15vw 0 0;
          border-width: 0.8vw;
          min-width: 4vw;
          min-height: 4vw;
        }
      `;
    }
    case "bubble-3": {
      return `
        border-color: var(--orange);
        background-image: url("${heroData.image}");

        @media (${theme.breakpoints.xs}) {
          margin: 10vw auto auto -42vw;
          border-width: 3.5vw;
          min-width: 60vw;
          min-height: 60vw;
        }

        @media (${theme.breakpoints.sm}) {
          margin: 4vw auto auto 16vw;
          border-width: 1.25vw;
          min-width: 22vw;
          min-height: 22vw;
        }
      `;
    }
  }
}

export default getBubbleStyle;