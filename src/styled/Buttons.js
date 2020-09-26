import styled from "styled-components";

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #212121;
  border-radius: 10px;
  width: 245px;
  text-decoration: none;
  color: #ccc;
  text-align: center;
  align-self: center;
  margin-bottom: 30px;
  transition: ease-in-out 0.5s;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
  border: 2px solid #d65db1;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background: linear-gradient(45deg, peachpuff, #d060f9);
    color: black;
    transition: linear 0.3s;
  }
`;

export const CreateButton = styled.input`
  display: inline-block;
  padding: 10px 20px;
  background-color: #212121;
  border-radius: 10px;
  width: 245px;
  text-decoration: none;
  color: #ccc;
  text-align: center;
  align-self: center;
  margin-bottom: 30px;
  transition: ease-in-out 0.5s;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
  border: 2px solid ${(props) => props.border || "#d65db1"};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hover || "#d65db1"};
    text-decoration: none;
    color: black;
  }
`;
