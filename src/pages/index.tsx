import { useState } from 'react';
import { NextPage } from 'next';
import { Container } from 'styles/Home';
import Products from 'components/Products';
import SearchBar from 'components/SearchBar';
import OrderButtons from 'components/OrderButtons';
import { SEARCH_PLACEHOLDER } from '../constants';

const HomePage: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container>
      <OrderButtons />
      <SearchBar placeholder={SEARCH_PLACEHOLDER} setSearchValue={setSearchValue} />
      <Products searchValue={searchValue} />
    </Container>
  );
};
export default HomePage;
