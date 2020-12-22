import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTE: Routes = [
  { path: '', component: RegistrarComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTE),
  ]
})
export class RegistrarModule { }
