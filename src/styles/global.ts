import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  body {
    font-size: 20px;
    font-family: 'NanumSquare', sans-serif;
    font-weight: 300;
  }

  #root {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
`;

export default GlobalStyle;
