import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosListaComponent } from './videojuegos-lista.component';

describe('VideojuegosListaComponent', () => {
  let component: VideojuegosListaComponent;
  let fixture: ComponentFixture<VideojuegosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
