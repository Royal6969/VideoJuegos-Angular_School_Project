import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JugadorModel } from 'src/app/interfaces/jugador-model';
import { JUGADORES } from 'src/app/mocks/jugador-mock';

@Component({
  selector: 'app-jugadores-detalles',
  templateUrl: './jugadores-detalles.component.html',
  styleUrls: ['./jugadores-detalles.component.css']
})
export class JugadoresDetallesComponent implements OnInit {

  jugador: JugadorModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.jugador = JUGADORES[id];
        this.jugador = JUGADORES.find((item) => item.id === id);
      })
  }

}
