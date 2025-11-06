import { CartProduct } from './cart-product';

export interface PaymentDto {
  products: CartProduct[];
  total: number;
}
