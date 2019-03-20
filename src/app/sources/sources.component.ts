import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  // displayed on default
  selected;
  news;

  sources = 
  [
    {
    "id": "abc-news",
    "name": "ABC News",
    },
    {
    "id": "bbc-news",
    "name": "BBC News",
    },
    {
    "id": "bleacher-report",
    "name": "Bleacher Report",
    },
    {
    "id": "bloomberg",
    "name": "Bloomberg",
    },
    {
    "id": "crypto-coins-news",
    "name": "Crypto Coins News",
    }
  ];

  // to fetch the news source data, inject service
  constructor(private newsService: NewsService, private snackBar: MatSnackBar) { }

  // setting up sources on load
  ngOnInit() {
    // selects first source in the array and specify the id
    this.selected = this.sources[0].id;
    // to get source data
    this.getData(this.selected);
  }

  // load page with new data depending on the selected source
  onSourceChange(){
    this.getData(this.selected);
  }

  // call our service
  getData(selected){
    this.newsService.getData(`top-headlines?sources=${selected}`).subscribe(data => {
      this.news = data;
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
