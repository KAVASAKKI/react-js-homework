import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  color: white;
  font-size: 14pt;

  background-color: var(--accent-color);

  padding: 15px 10px 15px 10px;
  width: 200px;
  margin: 0 auto;

  border: none;
  border-radius: 5px;

  transition: all 200ms linear;

  &:hover {
    cursor: pointer;
    background-color: var(--hover-color);
  }
`;
