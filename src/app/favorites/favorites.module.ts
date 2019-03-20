import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { MaterialModule } from '../material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  {
    path: '',
    // load in Favorites Component
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class FavoritesModule { }
