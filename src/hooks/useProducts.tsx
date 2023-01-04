import { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Product from '../types/Product';

export default function useProducts(searchValue) {
  const [products, setProducts] = useState<Product[]>(data);

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
