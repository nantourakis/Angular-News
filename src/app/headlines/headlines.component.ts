import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  //export our catagories array
  categories = [
    'World',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science',
    'Bitcoin'
  ];

  news;

  // make newsService = to our service, NewsService
  constructor(private newsService: NewsService, private snackBar: MatSnackBar) { }

  // on page load, pass in first category of our categories array to be auto displayed to page
  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  // when clicking on category
  onGetCategoryData(category) {
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category){
    //category name is uppercase but we need to lowercase our category
    this.newsService.getData(`everything?q=${category.toLowerCase()}`)
    .subscribe(data => {
      this.news = data;
      // pass length property for pagination to change pages - totalResults is from newsapi documentation
    
    });
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
      //push saved items and save them to local storage
      //add snackBar to add pop up when action taken
     items.push(article);
    localStorage.setItem('items', JSON.stringify(items));
    this.snackBar.open('Favorite Added!', 'Ok', {
     duration: 3000
   });
   }

  }




