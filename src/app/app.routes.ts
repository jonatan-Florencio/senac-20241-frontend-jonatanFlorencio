import {Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'cartas', pathMatch: 'full'},
  {
    path: 'cartas',
    loadChildren:() =>
       import('./cartas/cartas.module').then(m => m.CartasModule)
  }
];


