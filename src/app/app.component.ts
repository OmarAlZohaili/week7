import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceService } from './Services/firebase-service.service';
import * as firebase from 'firebase/app';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseServiceService]
})


export class AppComponent implements OnInit{
  title = 'app';
  items:FirebaseListObservable<any[]>;
  productItems:Product[];
  appState: string;
  activeKey: string;
  nameNew:string;
  priceNew:number;
  pictureNew:string;
  availableNew:number;
  categoryArray:Array<String>;
  filterArray:Array<String>;
  testVal:string;
  //filterVal:string;
  constructor(private _firebaseService: FirebaseServiceService){
    // this.items = this.af.list('/item');
  }
  ngOnInit() {
   //this.filterVal = 'New';
    this._firebaseService.getProducts().subscribe(productItems=>{
      this.productItems = productItems;
    })
    this.nameNew = '';
    this.priceNew = 0;
    this.availableNew = 0;
    this.pictureNew = '';
    this.categoryArray=new Array();
    this.categoryArray.push('New');
    this.categoryArray.push('Sale');
    // added premium for the extra points
    this.categoryArray.push('Premium');
    this.testVal = 'News';
    //this.filterVal = 'All';
    this.filterArray = new Array();
    this.filterArray.push('All');
    this.filterArray.push('New');
    this.filterArray.push('Sale');
    this.filterArray.push('Premium');
  }
  /*getProducts(){
  
   this._firebaseService.getProducts( this.filterVal).subscribe(productItems=>{
      this.productItems = productItems;
    })

  }*/
  changeState(state, key = null) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }
}

export interface Product {
  name:string;
  price:number;
  available:number;
  category:string;
  picture:string;
}
