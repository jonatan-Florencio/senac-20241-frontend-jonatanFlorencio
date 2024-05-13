import {Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'carros', pathMatch: 'full'},
  {
    path: 'carros',
    loadChildren:() =>
       import('./carros/carros.module').then(m => m.CarrosModule)
  }
];


