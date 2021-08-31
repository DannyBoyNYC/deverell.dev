import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --light: rgb(240, 240, 240);
  --dark: rgba(30, 30, 30, 0.7);
  --text: #111;
  --red: rgb(230, 30, 30);
  --link: #007eb6;
  --bg-blue: #004a86;
}
body {
  // background: var(--light);
  background: var(--bg-blue);
  // margin-top: 20vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.25rem;
  color: var(--text);
  line-height: 1.4;
  @media print {
      background-color: white !important;
      color: black !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      font-size: 0.75rem !important;
  }
}
h1,
h2,
h3 {
  margin: 0;
}

a {
  color: var(--link);
  opacity: 0.85;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
`;
