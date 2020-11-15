import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';


const routes: Routes = [
  {
    path: '', component: TitulosComponent
  },
  {//en path se pone el nombre del redireccionamiento
    path: 'pipes', component: PipesComponent
  },//en component se pone la clase del componente
  {
    path: 'ejemplo', component: EjemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
