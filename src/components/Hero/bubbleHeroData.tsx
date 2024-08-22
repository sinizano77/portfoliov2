import { heroData } from "../../db/mainDb";

export const bubbleData = {
  bubble1: {
    margins: {
      xs: "-3vw -4vw 0 0",
      sm: "1vw -4vw 0 0",
    },
    borderWidths: {
      xs: "2.5vw",
      sm: "1.4vw",
    },
    borderColor: "var(--yellow)",
    sizes: {
      xs: "15vw",
      sm: "7vw",
    },
    colorFill: "var(--cerulean-blue)",
    imageFill: "none",
  },

  bubble2: {
    margins: {
      xs: "75vw 30vw 0 -5vw",
      sm: "29vw -15vw 0 0",
    },
    borderWidths: {
      xs: "2vw",
      sm: "0.8vw",
    },
    borderColor: "var(--lime-green)",
    sizes: {
      xs: "10vw",
      sm: "4vw",
    },
    colorFill: "var(--crimson-red)",
    imageFill: "none",
  },

  bubble3: {
    margins: {
      xs: "10vw auto auto -42vw",
      sm: "4vw auto auto 16vw",
    },
    borderWidths: {
      xs: "3.5vw",
      sm: "1.25vw",
    },
    borderColor: "var(--orange)",
    sizes: {
      xs: "60vw",
      sm: "22vw",
    },
    colorFill: "none",
    imageFill: heroData.image,
  },
};
