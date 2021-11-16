import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresDetallesComponent } from './jugadores-detalles/jugadores-detalles.component';
import { JugadoresListaComponent } from './jugadores-lista/jugadores-lista.component';

const routes: Routes = [
  {
    path: '',
    component: JugadoresListaComponent
  },
  {
    path: 'jugadores/:id',
    component: JugadoresDetallesComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JugadorRoutingModule { }
