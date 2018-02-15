import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
  firebase.initializeApp({
    apiKey: "AIzaSyAJOsGbCsGtJT2W6Q6pOVhsDaycBjHOSLI",
    authDomain: "ng-recipe-book-34bfb.firebaseapp.com"
  });
  }
}
