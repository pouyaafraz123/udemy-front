import {createGlobalStyle} from "styled-components";

const GlobalStyle = (props) => {
    return <Global color={props.color}/>
}

const Global = createGlobalStyle`

  * {
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  
  body {
    font-family: iranyekan, sans-serif;
    background-color: ${props => props.color};
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
