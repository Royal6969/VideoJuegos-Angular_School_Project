import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresListaComponent } from './jugadores-lista.component';

describe('JugadoresListaComponent', () => {
  let component: JugadoresListaComponent;
  let fixture: ComponentFixture<JugadoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadoresListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
