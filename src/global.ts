import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    min-height: 100%;
  }

  body {
    height: 100vh;
    background-color: #b1bfd8;
background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
  }

  button {
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }
`;
