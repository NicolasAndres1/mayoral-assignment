import { StyledInput } from '../styles/SearchBar';

export default function SearchBar({ placeholder, setSearchValue }) {
  const handleOnChange = (e) => {
    if (e.key === 'Enter') setSearchValue(e.target.value.trim());
  };

  return <StyledInput placeholder={placeholder} onKeyDown={(e) => handleOnChange(e)} />;
}
