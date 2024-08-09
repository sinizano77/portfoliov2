import { createGlobalStyle } from 'styled-components';
import  { fonts } from '../fonts/fonts';
import { variables } from './cssVariables';

export const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    scrollbar-width: thin;
  }

  body {
    margin: 0;
    width: 100%;
  }
`;