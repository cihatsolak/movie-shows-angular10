import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable()
export class Cart {
  public items: CartItem[] = [];
  public itemCount: number = 0;
  public total: number = 0;

  addItem(movie: Movie, quantity: number = 1) {
    let item = this.items.find((item) => item.movie.id == movie.id);

    if (item != undefined) {
      item.quantity += quantity;
    } else {
      this.items.push(new CartItem(movie, quantity));
    }

    this.calculate();
  }

  removeItem(id: number) {
    let index = this.items.findIndex((p) => p.movie.id == id);
    this.items.splice(index, 1);
    this.calculate();
  }

  updateQuantity(movie: Movie, quantity: number) {
    let item = this.items.find((item) => item.movie.id == movie.id);

    if (item != undefined) {
      item.quantity = quantity;
      this.calculate();
    }
  }

  clearCart() {
    this.items = [];
    this.itemCount = 0;
    this.total = 0;
  }

  calculate() {
    this.itemCount = 0;
    this.total = 0;

    this.items.forEach((item) => {
      this.itemCount += item.quantity;
      this.total += item.quantity * item.movie.price;
    });
  }
}

export class CartItem {
  constructor(public movie: Movie, public quantity: number) {}
}
