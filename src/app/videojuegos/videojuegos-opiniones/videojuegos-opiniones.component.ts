import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OpinionModel } from 'src/app/interfaces/opinion-model';
import { VideojuegoModel } from 'src/app/interfaces/videojuego-model';
import { OPINIONES, VIDEOJUEGOS } from 'src/app/mocks/videojuego-mock';

@Component({
  selector: 'app-videojuegos-opiniones',
  templateUrl: './videojuegos-opiniones.component.html',
  styleUrls: ['./videojuegos-opiniones.component.css']
})
export class VideojuegosOpinionesComponent implements OnInit {

  videojuego: VideojuegoModel | undefined;

  opiniones: OpinionModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.videojuego = VIDEOJUEGOS[id];
      })
      // una vez que hemos definido el método para las opiniones, lo llamamos aquí
      this.opinionesDeCadaVideojuego();
  }

  opinionesDeCadaVideojuego(): void {
    this.opiniones = OPINIONES.filter(
      (item) => item.idVideojuego == this.videojuego?.id
    );
  }

}
