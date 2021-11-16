import { Component, OnInit } from '@angular/core';
import { JugadorModel } from 'src/app/interfaces/jugador-model';
import { JUGADORES } from 'src/app/mocks/jugador-mock';

@Component({
  selector: 'app-jugadores-lista',
  templateUrl: './jugadores-lista.component.html',
  styleUrls: ['./jugadores-lista.component.css']
})
export class JugadoresListaComponent implements OnInit {

  jugadores: JugadorModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.jugadores = JUGADORES;
  }
  
}
