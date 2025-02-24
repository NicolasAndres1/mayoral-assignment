import PropTypes from 'prop-types';
import Card from './Card';
import { useProducts } from '../hooks/useProducts';
import { StyledProducts } from '../styles/Products';
import { NO_RESULTS_ON_SEARCH } from '../constants';

export default function Products({ searchValue, sortByValue }): JSX.Element {
  const { products } = useProducts(searchValue, sortByValue);

  return (
    <StyledProducts data-testid={'products'}>
      {products?.length ? (
        products.map((prod, key) => (
          <Card data-testid={'card-component'}
            key={key}
            image={prod.image}
            name={prod.name}
            price={prod.price}
            discountPercentage={prod.discountPercentage}
            discountPrice={prod.discountPrice}
          />
        ))
      ) : (
        <li> {NO_RESULTS_ON_SEARCH} </li>
      )}
    </StyledProducts>
  );
}

Products.propTypes = {
  searchValue: PropTypes.string,
  sortValue: PropTypes.string,
};
