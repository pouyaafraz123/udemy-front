import {createGlobalStyle} from "styled-components";

const GlobalStyle = () => {
    return <Global/>
}

const Global = createGlobalStyle`
  body {
    font-family: iranyekan, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
