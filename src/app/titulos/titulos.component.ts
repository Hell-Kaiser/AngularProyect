import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  nombre: string = 'Maria'

  alumno: any = {
    nombre: 'Carlos',
    apellido: 'Pineda',
    edad: 21
  }

  inputNuevo: string = 'Hola Soy un Input'

  correo: string = ""
  password: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  ingresar(evento){

    //utilizar console.log(evento)
    //para ver los detalles del evento
    console.log(evento)
    // if(evento.key == "Enter"){
    //   console.log(this.correo)
    //   console.log(this.password)
    // }

  }

  escribirModelo(){

  console.log(this.password)
  }

  escribir(valor: string){
    console.log(valor)
  }

  cambiarEstilo(evento){

    evento.srcElement.style.background = 'red'
    evento.srcElement.style.width = '200px'

  }
  cambiarTamano(evento){
    evento.srcElement.style.width = '500px'
    evento.srcElement.style.height = '200px'
    evento.srcElement.style.border = '1px solid red'
  }
  aumentarTamano(evento){
    evento.srcElement.style.width = '800px'
    evento.srcElement.style.height = '500px'
    evento.srcElement.style.border = '1px solid green'

  }
}
