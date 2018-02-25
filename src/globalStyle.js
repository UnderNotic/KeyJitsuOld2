import { injectGlobal } from "styled-components";

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

  .container-fluid{
    padding: 0 15% 5% 15%;
  }

  .rotate180 {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}
`;
