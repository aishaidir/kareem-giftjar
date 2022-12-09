import { PaletteOptions, createTheme, css } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#F23C13" },
    secondary: { main: "#F3981B" },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#F23C13" },
    secondary: { main: "#F3981B" },
    mode: "dark",
  },
});

export const globalStyles = css`
  :root {
    body {
      padding: 0;
      margin: 0;
      font: 16px/1.8 Roboto, -apple-system, "SF Pro Display", BlinkMacSystemFont,
        Segoe UI, Helvetica Neue, Arial, sans-serif;
      background-color: #fff;
      color: #000;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  [data-theme="dark"] {
    body {
      background-color: #000;
      color: #fff;
    }
  }
  input::-webkit-search-cancel-button {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  .line {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #e6e7e8;
    margin: 4px 0;
  }
  html::-webkit-scrollbar {
    width: 7px;
    height: 2px;
  }
  /* The grabbable scrollbar button  */
  html::-webkit-scrollbar-thumb {
    background: #f23c13;
    border-radius: 30px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  /* The vertical scrollbar background */
  html::-webkit-scrollbar {
    width: 7px;
    height: 2px;
  }
  /* The grabbable scrollbar button  */
  html::-webkit-scrollbar-thumb {
    background: #f23c13;
    border-radius: 30px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  /* The vertical scrollbar background */
  html::-webkit-scrollbar {
    width: 7px;
    height: 2px;
  }
  /* The grabbable scrollbar button  */
  html::-webkit-scrollbar-thumb {
    background: #f23c13;
    border-radius: 30px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  /* The vertical scrollbar background */
  html::-webkit-scrollbar-track {
    background: #d1dadd;
  }
  /* The vertical scrollbar background */
  html::-webkit-scrollbar-track {
    background: #d1dadd;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: inline-block;
    fill: currentColor;
    line-height: 1;
    stroke: currentColor;
    stroke-width: 0;
    cursor: pointer;
    background: url("/images/svgs/date.svg") no-repeat right #f9fafb;
    appearance: none;
    -webkit-appearance: none;
    background-size: 16px;
    background-position: right 0px top 50%;
  }
  .line {
    border-bottom: 1px solid #e5e7eb;
    margin: 4px 0;
    width: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: left;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-fraction {
    bottom: 0 !important;
  }
  .swiper-pagination-bullet {
    width: 50px !important;
    height: 1.4px !important;
    border-radius: 5px !important;
    background: #d9d9d9 !important;
    transition: width 0.5s !important;
  }
  .swiper-pagination-bullet-active {
    background: #f3981b !importat;
    transition: width 0.5s !important;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 0px !important;
  }
`;
