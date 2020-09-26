import styled from "styled-components";

export const Heading = styled.h1`
  text-align: left;
  padding: 40px 30px 10px 30px;
  font-size: 30px;
  color: #212121;
  font-weight: 900;
  font-style: italic;

  @media (max-width: 500px) {
    font-size: 52px;
    left: 5%;
  }
`;

export const SubTitle = styled.h2`
  text-align: left;
  font-weight: 800;
  font-style: italic;
  font-size: 20px;
  padding: 20px;
  background-color: #313131;
  width: 100%;
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

export const Paragraph = styled.p`
  color: ${(props) => props.color || "#ccc"};
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  padding: 2px;
  font-size: 14px;
`;

export const Span = styled(Paragraph)`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
`;
