import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundError404Component } from './components/not-found-error404/not-found-error404.component';
import { VideojuegosListaComponent } from './videojuegos/videojuegos-lista/videojuegos-lista.component';
import { JugadoresListaComponent } from './jugadores/jugadores-lista/jugadores-lista.component';
import { AngularMaterialModule } from './angular-material.module';
import { VideojuegosDetallesComponent } from './videojuegos/videojuegos-detalles/videojuegos-detalles.component';
import { VideojuegosImagenesComponent } from './videojuegos/videojuegos-imagenes/videojuegos-imagenes.component';
import { VideojuegosOpinionesComponent } from './videojuegos/videojuegos-opiniones/videojuegos-opiniones.component';
import { JugadoresDetallesComponent } from './jugadores/jugadores-detalles/jugadores-detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NotFoundError404Component,
    VideojuegosListaComponent,
    VideojuegosDetallesComponent,
    VideojuegosImagenesComponent,
    VideojuegosOpinionesComponent,
    JugadoresListaComponent,
    JugadoresDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
