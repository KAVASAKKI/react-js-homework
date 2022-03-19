import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px;
  background-color: rgba(138, 168, 228, 0.288);

  padding: 20px;
  margin: 20px;

  height: 150px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  padding-bottom: 15px;

  font-weight: 600;
  font-size: 12pt;
  color: teal;
`;

export const Input = styled.input`
  outline: none;
  border: 2px solid teal;
  border-radius: 5px;
  width: 160px;
  padding-left: 5px;
  font-size: 12pt;
  color: teal;
  background-color: white;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill {
    -webkit-text-fill-color: teal;
    box-shadow: 0 0 0px 1000px white inset;
  }
`;

export const Button = styled.button`
  text-align: center;
  font-size: 13pt;
  color: white;

  border: none;
  border-radius: 5px;
  background-color: teal;

  min-width: 150px;
  max-width: 200px;

  padding: 10px;
  margin: 0px auto;

  transition: all 150ms linear;

  &:hover {
    cursor: pointer;
    color: aqua;
  }

  &:active {
    color: white;
  }
`;
