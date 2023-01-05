import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  text-align: center;
`;

export const Header = styled.header`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-flow: row-reverse;
    align-items: center;
    margin: 0 25px;

    Input {
      width: 50%;
      align-self: start;
    }
  }
`;
