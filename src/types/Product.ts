export default interface Product {
  image: string;
  name: string;
  price: number;
  discountPercentage?: number;
  discountPrice: number;
}
