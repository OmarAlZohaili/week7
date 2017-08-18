import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBk5qr23HE5Yg2i5xWI0ORh0UE6SfABtkI",
    authDomain: "week7-14b5b.firebaseapp.com",
    databaseURL: "https://week7-14b5b.firebaseio.com",
    projectId: "week7-14b5b",
    storageBucket: "week7-14b5b.appspot.com",
    messagingSenderId: "929465986488"
};
@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
