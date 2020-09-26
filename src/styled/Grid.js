import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 1200px;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, minmax(400px) 1fr);
  background-color: #181818;
  grid-gap: 15px;
  margin-bottom: 10%;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const GridBox = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  background-color: ${(props) => props.color || "#212121"};
  overflow: hidden;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;
