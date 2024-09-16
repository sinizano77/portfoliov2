//todo?: Migrate experience-top to be part of Experience component
//todo: refactor layering and positioning css of pikmin-container and bottom blades
function getBladeStyle(type: string) {
  switch (type) {
    case "section":
      return `
        background-color: var(--orange);
        z-index: 2;
        top: -5vw;

        &:before, &:after {
            background-color: var(--orange);
        }

        &:before {
            top: -5vw;
            transform: skewY(-5deg);
            height: 10vw;
        }

        &:after {
            bottom: none;
            transform: skewY(-8deg);
            height: 15vw;
            z-index: -1;
            bottom: -8vw;
        }`;

    case "experience-top":
      return `
        background-color: var(--crimson-red);
        z-index: 1;
        height: 10vw;
        bottom: 20vw;

        &:after {
            transform: skewY(7deg);
            background-color: var(--crimson-red);
            height: 15vw;
            z-index: 2;
        }`;
  }
}

export default getBladeStyle;
