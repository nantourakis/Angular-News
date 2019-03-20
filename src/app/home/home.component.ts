import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  news: any;

  // from html file
  length;
  // how many artciles we want to load
  pageSize = 8;
  page = 1;

  // to delete and unsubscribe from subscription
  newSubscription;

  // Import MatSnackBar Module to be used
  constructor(private newsService: NewsService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.newSubscription = this.newsService.getData(`top-headlines?country=us&pageSize=${this.pageSize}
    &page=${this.page}`).subscribe(data => {
      this.news = data;
      // pass length property for pagination to change pages - totalResults is from newsapi documentation
      this.length = data['totalResults'];
  });
 }

 // for pagination to change page and to also LOAD in the new atricles, pageIndex is from news api
 onPageChange(event){
   console.log(event);
   this.newSubscription = this.newsService.getData(`top-headlines?country=us&pageSize=${this.pageSize}
   &page=${event.pageIndex + 1}`).subscribe(data => {
     this.news = data;
     // pass length property for pagination to change pages - totalResults is from newsapi documentation
     this.length = data['totalResults'];
 });
 }

 //unsubscribe for memory leaks
 ngOnDestroy(){
   this.newSubscription.unsubscribe();
 }

 onFavorite(article){
   console.log(article);
// to store on our favorites page, create an array to store our favorited items / bring in popup(snackbar)
   let items = [];
   const val = localStorage.getItem('items');

   // if value is not equal to null / means we already have some items inside of localstorage
   if ( val != null){
    items = JSON.parse(val);
   }
   // push saved items and save them to local storage
   // add snackBar to add pop up when action taken
   items.push(article);
   localStorage.setItem('items', JSON.stringify(items));
   this.snackBar.open('Favorite Added!', 'Ok', {
     duration: 3000
   });
 }

}
