import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texto'
})
export class TextoPipe implements PipeTransform {

  transform(valor: string ): string {
    if(valor.toString().length > 90){
      //substr sirve para mantener el texto en un rango
      //quiere decir que si hay texto antes o despues del
      //rango, lo corta o lo "elimina"
      valor = valor.substr(0,90)
    }
    valor+= "...";
    return valor;
  }

}
