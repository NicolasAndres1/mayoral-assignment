import PropTypes from 'prop-types';
import { StyledButton } from 'styles/SortButtons';

export default function SortButton({ children, type, setSortByValue }) {
  return <StyledButton onClick={() => setSortByValue(type)}> {children} </StyledButton>;
}

SortButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  setSortByValue: PropTypes.func,
};
