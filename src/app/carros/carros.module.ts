import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarrosListagemComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule
  ]
})
export class CarrosModule { }
