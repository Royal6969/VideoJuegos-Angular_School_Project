import { Component, OnInit } from '@angular/core';
import { VideojuegoModel } from 'src/app/interfaces/videojuego-model';
import { VIDEOJUEGOS } from 'src/app/mocks/videojuego-mock';

@Component({
  selector: 'app-videojuegos-lista',
  templateUrl: './videojuegos-lista.component.html',
  styleUrls: ['./videojuegos-lista.component.css']
})
export class VideojuegosListaComponent implements OnInit {

  videojuegos: VideojuegoModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.videojuegos = VIDEOJUEGOS;
  }

}
