import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  /* background: linear-gradient(180deg, #845ec2, #d65db1, #ff6f91, #ff9671); */
  background-attachment: fixed;
  font-family: "Poppins", sans-serif;
  
}
`;
