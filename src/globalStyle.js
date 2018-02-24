import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #222222;
  }

  body {
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #ffffff;
    font-size: 15px;
  }
`;