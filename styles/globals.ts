import { createGlobalStyle  } from "styled-components";

const globalStyles = createGlobalStyle`
  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: 'Titillium Web, sans-serif';
    font-size: 1.6rem;
    background: rgb(11, 0, 26);
    color: hsl(204,23.8%,95.9%);
    cursor: default;
    height: 100%;
  }

  #__next {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6,button {
    font-family: 'Poppins';
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`

export default globalStyles;