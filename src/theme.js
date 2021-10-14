import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  themeName: "light",
  navBg: "#373B53",
  bodyBg: "#F8F8FB",
  invoiceBg: "#FFF",
  fontPriColor: "#0C0E16",
  fontSecColor: "#858BB2",
  iconPosY: "-20px"
};

export const darkTheme = {
  themeName: "dark",
  navBg: "#1E2139",
  bodyBg: "#141625",
  invoiceBg: "#1E2139",
  fontPriColor: "#FFF",
  fontSecColor: "#DFE3FA",
  iconPosY: "0px"
};

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.bodyBg};
    transition: background-color .2s;
    font-family: 'Spartan', sans-serif;
    margin: 0;
    padding: 0;
  }

  form {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
  fieldset {
    all: unset;
  }
`;
