import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosDetallesComponent } from './videojuegos-detalles.component';

describe('VideojuegosDetallesComponent', () => {
  let component: VideojuegosDetallesComponent;
  let fixture: ComponentFixture<VideojuegosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
