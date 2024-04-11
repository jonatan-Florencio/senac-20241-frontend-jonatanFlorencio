import {Carta}from'../../shared/model/carta';
import { Component, OnInit } from '@angular/core';
import {CartasService} from '../../shared/service/cartas.service';

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrls: ['./carta-listagem.component.scss']
})
export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = []
  constructor( private cartaService: CartasService) {}

  ngOnInit(): void {
    this.cartaService.listarTodas().subscribe(
      resultado => {
        //Retorno bem-sucedido de chamada HTTP
        this.cartas = resultado;
      },
      erro => {
        // Retorno com erros de chamada HTTP

        console.error('Erro ao consultar cartas', erro);
      }
    )

  }
}
