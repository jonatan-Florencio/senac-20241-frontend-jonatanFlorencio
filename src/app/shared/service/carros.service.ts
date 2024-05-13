import { Carro } from './../model/carros';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroSeletor } from '../model/seletor/carro.seletor';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private readonly API: string = "http://localhost:8080/senac-backend-20241-exemplos/rest/carro";

  constructor(private HttpClient: HttpClient) { }

  consultarComFiltros(seletor: CarroSeletor): Observable<Array<Carro>> {
    return this.HttpClient.post<Array<Carro>>(this.API + '/filtro', seletor);
  }
}
