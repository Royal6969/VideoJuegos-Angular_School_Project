import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundError404Component } from './components/not-found-error404/not-found-error404.component';
import { JugadoresDetallesComponent } from './jugadores/jugadores-detalles/jugadores-detalles.component';
import { JugadoresListaComponent } from './jugadores/jugadores-lista/jugadores-lista.component';
import { VideojuegosDetallesComponent } from './videojuegos/videojuegos-detalles/videojuegos-detalles.component';
import { VideojuegosImagenesComponent } from './videojuegos/videojuegos-imagenes/videojuegos-imagenes.component';
import { VideojuegosListaComponent } from './videojuegos/videojuegos-lista/videojuegos-lista.component';
import { VideojuegosOpinionesComponent } from './videojuegos/videojuegos-opiniones/videojuegos-opiniones.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'videojuegos',
    // component: VideojuegosListaComponent
    loadChildren: () => import('./videojuegos/videojuegos.module').then((m) => m.VideojuegosModule)
  },
  // {
  //   path: 'videojuegos/:id',
  //   component: VideojuegosDetallesComponent,
  //   children: [
  //     {
  //       path: 'imagenes',
  //       component: VideojuegosImagenesComponent
  //     },
  //     {
  //       path: 'opiniones',
  //       component: VideojuegosOpinionesComponent
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'imagenes',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: '**',
  //       component: NotFoundError404Component
  //     }
  //   ]
  // },
  {
    path: 'jugadores',
    // component: JugadoresListaComponent
    loadChildren: () => import('./jugadores/jugador.module').then((m) => m.JugadorModule)
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundError404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
