import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  articles;

  // Import MatSnackBar Mondule from Angular Material to be used
  constructor(private snackBar: MatSnackBar) { }

  // get favorites on load
  ngOnInit() {
    this.getFavorites();
  }

  // get values of the items within localstorage
  getFavorites(){

    const val = localStorage.getItem('items');

    if(val != null){
      this.articles = JSON.parse(val);
    }
  }

  // Remove Favorite and from localstorage and bring in popup(snackBar)
  onUnFavorite(article){
    const index = this.articles.indexOf(article);
    //splice method to remove articles form index, wanting to remove one article
    this.articles.splice(index, 1);
    // save items back to localstorage
    localStorage.setItem('items', JSON.stringify(this.articles));
    this.snackBar.open('Favorite Removed!', 'Ok', {
      duration: 3000
    });
  }


}
