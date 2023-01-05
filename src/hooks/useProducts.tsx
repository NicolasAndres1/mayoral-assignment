import { useEffect, useState } from 'react';
import data from '../../data/data.json';
import orderBy from 'lodash/orderBy';
import { Product, Products } from '../types';
import PropTypes from 'prop-types';

export function useProducts(searchValue, sortByValue): Products {
  const [products, setProducts] = useState<Product[]>(data);

  useEffect(() => {
    const sortedProducts = orderBy(
      products,
      [(product) => product.discountPrice ?? product.price],
      sortByValue,
    );
    setProducts(sortedProducts);
  }, [sortByValue]);

  useEffect(() => {
    if (searchValue !== ' ') {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(searchValue),
      );

      setProducts(filteredProducts);
    }
  }, [searchValue]);

  return { products };
}

useProducts.propTypes = {
  searchValue: PropTypes.string,
  sortByValue: PropTypes.string,
}
