import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background-color: white;
  font-size: 32px;
  color: #aeaeae;
  cursor: pointer;
  margin: 0 12px;
  padding: 0;
`;

export default function SortButton({ children, type, setSortByValue }) {
  return <StyledButton onClick={() => setSortByValue(type)}> {children} </StyledButton>;
}
