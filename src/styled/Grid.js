import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background-color: whitesmoke;
  grid-gap: 20px;

  margin: 5%;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const GridBox = styled.div`
  width: 100%;
  height: 100%;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  background-color: ${(props) => props.color || "#fff"};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;
