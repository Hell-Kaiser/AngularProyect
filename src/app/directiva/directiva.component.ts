import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre:string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
  esImportante: boolean;
  textoGrande: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean = true;

  nombres: Array<String> = ["Maria", "Ana", "Luisa", "Andrea"]

  pestana: string = '';

  mostrarCuadrado: boolean = false;

  productos: Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 15,
      fabricante: 'Distribuidor Industrial',
      fechaVence: new Date('04/15/2020'),
      esImportante: false,
      textoGrande: false
    },
    {
      nombre: 'Maiz',
      stock: 25,
      fabricante: 'Distribuidor Industrial',
      fechaVence: new Date('04/05/2021'),
      esImportante: true,
      textoGrande: true
    },
    {
      nombre: 'Refresco',
      stock: 200,
      fabricante: 'Coca Cola',
      fechaVence: new Date('01/15/2024'),
      esImportante: true,
      textoGrande: true
    }
  ]


  constructor() { }

  ngOnInit(): void {
    //es una propiedad de javascript para ajustar el tiempo en milisegundos
    setTimeout(() => {
      //cuando inicie la app va a esperar 5 segs para decirle que 
      //cargando es falso
      this.cargando = false;
      
    }, 5000);
  }

  alternar(){
    //aqui le estamos diciendo que cada vez que presione el botón
    //cambie el estado de cargando (al principio true, luego false luego true, etc...)
    this.cargando = !this.cargando;
  }

  cambiarPestana(pestana: string){

    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }
}
