import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 12pt;
  color: teal;
`;

export const Number = styled.span`
  text-align: left;
  /* font-weight: 600; */
  font-size: 12pt;
  color: teal;
`;

export const Button = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  background-color: red;

  &:hover {
    cursor: pointer;
  }
`;
