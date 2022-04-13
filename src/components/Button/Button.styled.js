import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;

  padding: 4px 20px;

  color: var(--accent-color);
  background-color: white;
  border: 1px solid var(--accent-color);

  transition: all 300ms linear;

  &:hover {
    color: white;
    background-color: var(--accent-color);
  }
`;
