import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar.component';

const ROUTE: Routes = [
  { path: '', component: RegistrarComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
  ]
})
export class RegistrarModule { }
