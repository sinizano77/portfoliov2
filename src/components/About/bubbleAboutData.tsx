import { aboutData } from "../../db/mainDb";

export const bubbleData = {
  bubble1: {
    margins: {
      xs: "auto auto -30vw -13vw",
      sm: "auto auto -23vw 8vw",
    },
    borderWidths: {
      xs: "3vw",
      sm: "1.1vw",
    },
    borderColor: "var(--cerulean-blue)",
    sizes: {
      xs: "40vw",
      sm: "17vw",
    },
    colorFill: "none",
    imageFill: aboutData.images.me2,
  },

  bubble2: {
    margins: {
      xs: "6vw -22vw auto auto",
      sm: "auto 3.5vw auto auto",
    },
    borderWidths: {
      xs: "2.5vw",
      sm: "1vw",
    },
    borderColor: "var(--lime-green)",
    sizes: {
      xs: "35vw",
      sm: "14vw",
    },
    colorFill: "none",
    imageFill: aboutData.images.me1,
  },

  bubble3: {
    margins: {
      xs: "-13vw auto auto 0vw",
      sm: "1.5vw 10vw auto auto",
    },
    borderWidths: {
      xs: "2.5vw",
      sm: "0.9vw",
    },
    borderColor: "var(--yellow)",
    sizes: {
      xs: "30vw",
      sm: "11vw",
    },
    colorFill: "none",
    imageFill: aboutData.images.steve2,
  },
};
