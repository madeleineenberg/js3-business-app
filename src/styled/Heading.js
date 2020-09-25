import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  padding: 40px 30px;
  font-size: 50px;
  color: #212121;
  font-weight: 900;
  font-style: italic;

  @media (max-width: 500px) {
    font-size: 52px;
    left: 5%;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-weight: 900;
  font-style: italic;
  font-size: 42px;
  padding: 10px;
  color: ${(props) => props.color || "#212121"};
`;

export const Logo = styled.span`
  color: rgb(240, 151, 151);
  font-weight: 800;
  font-size: 26px;
  position: absolute;
  top: 12px;
  left: 35px;
  font-style: italic;
`;
