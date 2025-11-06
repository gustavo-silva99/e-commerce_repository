import { Component, input, OnInit, output } from '@angular/core';
import { CartProduct } from '../../../shared/models/cart-product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-product',
  imports: [CurrencyPipe],
  templateUrl: './cart-product.component.html',
})
export class CartProductComponent implements OnInit {
  cartProduct = input.required<CartProduct>();
  total: number = 0;

  updateCartEvent = output<void>();

  ngOnInit(): void {
    this.updateTotal();
  }

  updateQantity(num: number) {
    let result = this.cartProduct().quantity + num;

    if (result == 0) {
      result = 1;
    }

    this.cartProduct().quantity = result;
    this.updateTotal();
    this.updateCart();
    this.updateCartEvent.emit();
  }

  removeProduct() {
    const cartProducts: CartProduct[] = JSON.parse(
      localStorage.getItem('cart-products') as string
    );
    const filteredCartProducts = cartProducts.filter(
      ({ product }) => product.id !== this.cartProduct().product.id
    );
    localStorage.setItem('cart-products', JSON.stringify(filteredCartProducts));
    this.updateCartEvent.emit();
  }

  private updateTotal() {
    this.total = this.cartProduct().product.price * this.cartProduct().quantity;
  }

  private updateCart() {
    const cartProducts: CartProduct[] = JSON.parse(
      localStorage.getItem('cart-products') as string
    );
    const filteredCartProducts = cartProducts.filter(
      ({ product }) => product.id !== this.cartProduct().product.id
    );
    const updatedCartProducts = [...filteredCartProducts, this.cartProduct()];
    localStorage.setItem('cart-products', JSON.stringify(updatedCartProducts));
  }
}
