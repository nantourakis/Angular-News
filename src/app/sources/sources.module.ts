// controls the path / lazy load

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SourcesComponent } from './sources.component';
import { MaterialModule } from '../material.module';

// routes/component to use sources
const routes: Routes = [
  {
    path: '',
    component: SourcesComponent
  }
];

@NgModule({
  declarations: [SourcesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class SourcesModule { }
