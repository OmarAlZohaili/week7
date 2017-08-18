import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseServiceService {
  productItems: FirebaseListObservable<Product[]>;

  constructor(private af: AngularFireDatabase) { }

  getProducts() {
    /*console.log(category);
      
      
        if (category != null) {
          if(category == 'All'){
            this.productItems = this.af.list('/product') as FirebaseListObservable<Product[]>;
          }else{
           this.productItems = this.af.list('/product',{
              query: {
                    orderByChild: 'category',
                    equalTo: category
                }
           }) as FirebaseListObservable<Product[]>;
         }  
        } else {
            this.productItems = this.af.list('/product') as FirebaseListObservable<Product[]>;
        }
        return this.productItems;
  } */
      this.productItems = this.af.list('/product') as FirebaseListObservable<Product[]>;
      return this.productItems;
  }
  

}
export interface Product {
  name:string;
  price:number;
  available:number;
  category:string;
  picture:string;
}
