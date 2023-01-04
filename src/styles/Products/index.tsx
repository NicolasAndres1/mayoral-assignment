import styled from 'styled-components';

export const StyledProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  list-style: none;

  @media (min-width: 1025px) {
    align-items: flex-start;
  }
`;
