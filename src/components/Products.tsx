import Card from './Card';
import useProducts from '../hooks/useProducts';
import { StyledProducts } from '../styles/Products';
import { NO_RESULTS_ON_SEARCH } from '../constants';

export default function Products({ searchValue, sortByValue }) {
  const { products } = useProducts(searchValue, sortByValue);

  return (
    <StyledProducts>
      {products.length ? (
        products.map((prod, key) => (
          <Card
            key={key}
            img={prod.image}
            name={prod.name}
            price={prod.price}
            discountPercentage={prod.discountPercentage}
            discountPrice={prod.discountPrice}
          />
        ))
      ) : (
        <h2> {NO_RESULTS_ON_SEARCH} </h2>
      )}
    </StyledProducts>
  );
}
