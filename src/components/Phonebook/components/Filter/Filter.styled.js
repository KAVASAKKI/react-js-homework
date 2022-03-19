import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  margin: 0px 20px;

  font-weight: 600;
  font-size: 16pt;
  color: teal;

  border-radius: 5px;
  background-color: rgba(138, 168, 228, 0.288);
`;

export const Input = styled.input`
  outline: none;
  border: 2px solid teal;
  border-radius: 5px;
  width: 160px;
  padding-left: 5px;
  margin-top: 5px;
  font-size: 12pt;
  color: teal;
  background-color: white;
`;
