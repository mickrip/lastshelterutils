import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
font-family: 'Roboto', sans-serif;
  color: #444;
  font-size: 13px;
    //background: white;
  }
        * {
    box-sizing: border-box;
    }
    
`;

export default GlobalStyle;
