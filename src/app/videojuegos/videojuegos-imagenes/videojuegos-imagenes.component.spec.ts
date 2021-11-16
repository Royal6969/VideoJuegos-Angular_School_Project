import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosImagenesComponent } from './videojuegos-imagenes.component';

describe('VideojuegosImagenesComponent', () => {
  let component: VideojuegosImagenesComponent;
  let fixture: ComponentFixture<VideojuegosImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
