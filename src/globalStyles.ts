import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  /* Colors */
  /* Primary */
  --primary-blue: hsl(246, 80%, 60%);
  --work: hsl(15, 100%, 70%);
  --selfcare: hsl(43, 84%, 65%);
  --study: hsl(348, 100%, 68%);
  --play: hsl(195, 74%, 62%);
  --exercise: hsl(145, 58%, 55%);
  --social: hsl(264, 64%, 52%);

  /* Neutral */
  --white: hsl(0, 0%, 100%);
  --pale-blue: hsl(236, 100%, 87%);
  --desaturated-blue: hsl(235, 45%, 61%);
  --dark-blue: hsl(235, 46%, 20%);
  --very-dark-blue: hsl(226, 43%, 10%);
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0px auto;
    width: 100%;
    background: var(--very-dark-blue);
    color: var(--white);
    box-sizing: border-box;
  }

  html {
    // This defines what 1rem is.
    font-size: 62.5%; // 1rem = 10px;
    font-style: normal;
    font-weight: normal;
  }

  body {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 1.8rem;
    background: url(./images/pattern-hills.svg) bottom center repeat-x, url(./images/bg-stars.svg) top center;
  }
`;

export default GlobalStyle;
