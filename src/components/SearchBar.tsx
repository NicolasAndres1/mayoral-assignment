import PropTypes from 'prop-types';
import { StyledInput } from '../styles/SearchBar';

export default function SearchBar({ placeholder, setSearchValue }): JSX.Element {
  const handleOnChange = (e) => {
    if (e.key === 'Enter') setSearchValue(e.target.value.trim());
  };

  return <StyledInput placeholder={placeholder} onKeyDown={(e) => handleOnChange(e)} />;
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  setSearchValue: PropTypes.func,
};
