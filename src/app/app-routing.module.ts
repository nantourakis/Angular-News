import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { SourcesComponent } from './sources/sources.component';
import { FavoritesComponent } from './favorites/favorites.component';

// define our routes here
const routes: Routes = [{
  path: '', 
  component: HomeComponent
},
{
  path: 'headlines', 
  // component: HeadlinesComponent
  // lazy loading headlines component - only loads when module called upon
 loadChildren: './headlines/headlines.module#HeadlinesModule' 
},
{
  path: 'sources',
  // component: SourcesComponent,
  // Lazy Loading
  loadChildren: './sources/sources.module#SourcesModule' 
},
{
  path: 'favorites',
  //component: FavoritesComponent
  // Lazy Loading
  loadChildren: './favorites/favorites.module#FavoritesModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
