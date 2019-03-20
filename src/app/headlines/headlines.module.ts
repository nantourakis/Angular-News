import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines.component';
import { MaterialModule } from '../material.module';

//Roting Config with app-routing
const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  }
]

// declare HeadlinesComponent and import RouterModule & MaterialModule for Routes
@NgModule({
  declarations: [HeadlinesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HeadlinesModule { }
