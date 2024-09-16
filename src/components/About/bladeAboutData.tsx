//todo?: Migrate experience-top to be part of Experience component
function getBladeStyle(type: string) {
  switch (type) {
    case "section":
      return `
        background-color: var(--orange);
        z-index: 2;
        top: -5vw;

        &:before, &:after {
            background-color: var(--orange);
            transform: skewY(-5deg);
            height: 10vw;
        }

        &:before {
            top: -5vw;
        }

        &:after {
            bottom: -4vw;
        }`;

    case "experience-top":
      return `
        background-color: var(--crimson-red);
        z-index: 1;

        &:after {
            transform: skewY(5deg);
            background-color: var(--crimson-red);
            bottom: 0vw;
            height: 10vw;
        }`;
  }
}

export default getBladeStyle;
