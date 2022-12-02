import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: Verdana, Geneva, Tahoma, sans-serif;

    --color-white: #f6faff;
    --color-black: #36393b;
    --color-grey: #b1b8bd;
    --color-blue: #278de0;
    --color-blue-light: #5eb4fa;
    --color-red: #da2d2d;
    --color-green: #29b347;

    --border-radius: .4rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--color-white);
    color: var(--color-black);
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`
