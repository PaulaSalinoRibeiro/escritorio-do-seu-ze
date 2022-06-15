import { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: '#F0F2F5';
    font-family: 'Roboto', sans-serif;
  }
`

export const theme: DefaultTheme = {
  colors: {
    dark: '#1C1C1C',
    yellow: '#FFC857',
    white: '#F4F7F5',
  }
};

