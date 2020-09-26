import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html, body {
  
  background: linear-gradient(180deg, #845ec2, #d65db1, #ff6f91, #ff9671);
  width: 100%;
  min-height: 100%;
  font-family: "Poppins", sans-serif;
  
}
`;
