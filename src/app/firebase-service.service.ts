import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseServiceService {
  productItems: FirebaseListObservable<Product[]>;

  constructor(private af: AngularFireDatabase) { }

  getProducts() {
      this.productItems = this.af.list('/product') as FirebaseListObservable<Product[]>;
      return this.productItems;
  }
  addProduct(newProduct) {
      return this.productItems.push(newProduct);
  }

}
export interface Product {
  name:string;
  price:number;
  available:number;
  category:string;
  picture:string;
}
