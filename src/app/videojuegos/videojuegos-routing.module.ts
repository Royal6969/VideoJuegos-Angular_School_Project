import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegosDetallesComponent } from './videojuegos-detalles/videojuegos-detalles.component';
import { VideojuegosImagenesComponent } from './videojuegos-imagenes/videojuegos-imagenes.component';
import { VideojuegosOpinionesComponent } from './videojuegos-opiniones/videojuegos-opiniones.component';
import { NotFoundError404Component } from '../components/not-found-error404/not-found-error404.component';
import { VideojuegosListaComponent } from './videojuegos-lista/videojuegos-lista.component';

const routes: Routes = [
  {
    path: '',
    component: VideojuegosListaComponent
  },
  {
    path: 'videojuegos/:id',
    component: VideojuegosDetallesComponent,
    children: [
      {
        path: 'imagenes',
        component: VideojuegosImagenesComponent
      },
      {
        path: 'opiniones',
        component: VideojuegosOpinionesComponent
      },
      {
        path: '',
        redirectTo: 'imagenes',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundError404Component
      }
    ]
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
export class VideojuegosRoutingModule { }
