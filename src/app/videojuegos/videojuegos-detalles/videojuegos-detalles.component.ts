import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VideojuegoModel } from 'src/app/interfaces/videojuego-model';
import { VIDEOJUEGOS } from 'src/app/mocks/videojuego-mock';

@Component({
  selector: 'app-videojuegos-detalles',
  templateUrl: './videojuegos-detalles.component.html',
  styleUrls: ['./videojuegos-detalles.component.css']
})
export class VideojuegosDetallesComponent implements OnInit {

  videojuego: VideojuegoModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.videojuego = VIDEOJUEGOS[id];
        this.videojuego = VIDEOJUEGOS.find((item) => item.id === id);
      })
  }

}
