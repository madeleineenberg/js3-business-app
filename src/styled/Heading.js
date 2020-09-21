import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  padding: 50px 30px;
  font-size: 80px;
  color: rgb(240, 151, 151);
  font-weight: 900;
  z-index: 10;
  position: absolute;
  top: 20px;
  left: 22%;

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
