import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
  body {
  font-family: 'Comfortaa', cursive;
  color: #444;
  font-size: 13px;
  //letter-spacing: 1px;
    background: white;
  }
        * {
    box-sizing: border-box;
    }
`;

export default GlobalStyle;
