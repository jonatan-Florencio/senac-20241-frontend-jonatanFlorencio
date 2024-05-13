import { montadora } from "./montadora";

export interface Carro {

  id: number;
	modelo: string;
	placa: string;
  montadora: montadora;
	ano: number;
	valor: number;

}
