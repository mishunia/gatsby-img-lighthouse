import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    user-select: auto;
  }

  html {
    font-size: 16px;
  }

  body {
     font-family: -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Droid Sans", 'Inter', "Helvetica Neue", sans-serif;
    line-height: 1.45;
    color: #012147;
    font-weight: 400;
    width: 100%;
    min-height: 100%;
  }

  iframe,
  img {
    display: block;
    max-width: 100%;
  }

  body.ReactModal__Body--open {
    overflow: hidden;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .ReactModalPortal {
    position: relative;
    z-index: 100;
  }

  strong,
  h2 {
    font-weight: 600;
  }

  input {
    &:focus {
      outline: none;
    }
  }
 

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s !important;
  }

  .blur-up {
    -webkit-filter: blur(5px);
    filter: blur(5px);
    transition: filter 400ms, -webkit-filter 400ms;
  }
 
  .blur-up.lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
  }

`

export default GlobalStyles
