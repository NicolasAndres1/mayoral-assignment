export interface Product {
  image: string;
  name: string;
  price: number;
  discountPercentage?: number;
  discountPrice: number;
}

export interface Products {
  products: Product[];
}
