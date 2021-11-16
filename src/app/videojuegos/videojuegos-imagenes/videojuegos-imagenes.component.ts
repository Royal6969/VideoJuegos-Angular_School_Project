import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VideojuegoModel } from 'src/app/interfaces/videojuego-model';
import { VIDEOJUEGOS } from 'src/app/mocks/videojuego-mock';

@Component({
  selector: 'app-videojuegos-imagenes',
  templateUrl: './videojuegos-imagenes.component.html',
  styleUrls: ['./videojuegos-imagenes.component.css']
})
export class VideojuegosImagenesComponent implements OnInit {

  idVideojuego: number | undefined;
  
  videojuego: VideojuegoModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap
      .subscribe((paramMaps: ParamMap) => {
        this.idVideojuego = Number(paramMaps.get('id'));

        let idVideojuego = Number(paramMaps.get('id'));
        this.videojuego = VIDEOJUEGOS[idVideojuego];
      })
  }

}
