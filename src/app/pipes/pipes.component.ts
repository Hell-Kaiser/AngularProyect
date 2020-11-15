import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titulo:string = "Hola Esta es una prueba"

  totalDinero:number = 133500
  gananciasFinales:number = 0.28
  fechaRegistro:Date = new Date()

  textoLargo:string = "kasdja asjdjasdlka lkasjdkasjkdkalsdj aksdhbhsbh hahdbahsdahsbd bahsbhasbdhb ahbdaefuah uaajsdhauwd ausduadahuduq uadu a"
  constructor() { }

  ngOnInit(): void {
  }

}
