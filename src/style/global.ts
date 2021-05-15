import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
`;

export default GlobalStyle;
