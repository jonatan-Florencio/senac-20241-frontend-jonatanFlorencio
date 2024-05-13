import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { montadora } from '../model/montadora';

@Injectable({
  providedIn: 'root'
})
export class MontadoraService {

  constructor(private HttpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/senac-backend-20241-exemplos/rest/montadora";

  consultarEstoqueCarros(idMontadora: number): Observable<number> {
    return this.HttpClient.get<number>(this.API +`/montadora/estoque-carros/`+{idMontadora});
  }

  consultarTodas(): Observable<Array<montadora>> {
    return this.HttpClient.get<Array<montadora>>(this.API + '/todas');
  }
}
