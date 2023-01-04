import { useEffect, useState } from 'react';
import data from '../../data/data.json';
import orderBy from 'lodash/orderBy';
import Product from '../types/Product';

export default function useProducts(searchValue, sortByValue) {
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
