import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  border-radius: 10px;
  padding: 50px 60px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  margin-top: 100px;
  margin-bottom: 50px;
  /* width: 450px; */
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border: none;
  padding: 20px;
  border-radius: 5px;
  border-bottom: 2px solid ${(props) => props.border || "#d65db1"};
  background-color: ${(props) => props.color || "#313131"};

  &:focus {
    background-color: #cecece;
    outline: 2px solid #d65db1;
  }
`;

export const Label = styled.label`
  font-style: italic;
  font-size: 14px;
  color: ${(props) => props.color || "#ccc"};
`;

export const FormCreateCustomer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  border-radius: 10px;
  padding: 50px 60px;
`;
