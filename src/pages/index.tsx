import { useState } from 'react';
import { NextPage } from 'next';
import { Container, Header } from 'styles/Home';
import Products from 'components/Products';
import SearchBar from 'components/SearchBar';
import SortButtons from 'components/SortButtons';
import { SEARCH_PLACEHOLDER } from '../constants';

const HomePage: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortByValue, setSortByValue] = useState('asc');

  return (
    <Container>
      <Header>
        <SortButtons setSortByValue={setSortByValue} />
        <SearchBar placeholder={SEARCH_PLACEHOLDER} setSearchValue={setSearchValue} />
      </Header>
      <Products searchValue={searchValue} sortByValue={sortByValue} />
    </Container>
  );
};
export default HomePage;
