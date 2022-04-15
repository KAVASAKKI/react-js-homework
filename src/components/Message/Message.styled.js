import styled from 'styled-components';

export const Message = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: ${props => props.size || '20pt'};
  color: gray;

  margin: 15px 0px;
`;
