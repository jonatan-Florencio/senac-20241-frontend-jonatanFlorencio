import { MontadoraService } from 'src/app/shared/service/montadora.service';
import { montadora } from './../../shared/model/montadora';
import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/shared/service/carros.service';
import { CarroSeletor } from 'src/app/shared/model/seletor/carro.seletor';
import { Carro } from 'src/app/shared/model/carros';

@Component({
  selector: 'app-carros-listagem',
  templateUrl: './carros-listagem.component.html',
  styleUrl: './carros-listagem.component.scss'
})
export class CarrosListagemComponent implements OnInit {

public pesquisar(){
    this.carrosService.consultarComFiltros(this.seletor).subscribe(
      resultado => {
        this.carros = resultado;
      },
      erro => {
        console.log('Erro ao buscar todos os carros' + erro)
      }
    )
  }

  limpar(){
    this.seletor = new CarroSeletor();
  }

  private consultarTodosOsCarros(){
    this.carrosService.consultarComFiltros(this.seletor).subscribe(
      resultado => {
         this.carros = resultado;
      },
      erro => {
        console.log('Erro ao buscar todos os carros' + erro)
      }
    );
  }

  public carros: Array<Carro> = new Array();
  public seletor: CarroSeletor = new CarroSeletor();
  public montadoras: Array<montadora> = new Array();

  constructor(private carrosService: CarroService,
             private montadoraService: MontadoraService){

  }

  ngOnInit(): void {
    this.montadoraService.consultarTodas().subscribe(
      resultado => {
        this.montadoras = resultado;
      },
      erro => {
        console.log('Erro ao consultar as montadoras', erro);
      }
    );
  }
}

