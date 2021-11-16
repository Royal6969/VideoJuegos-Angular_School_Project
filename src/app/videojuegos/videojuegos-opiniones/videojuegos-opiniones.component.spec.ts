import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosOpinionesComponent } from './videojuegos-opiniones.component';

describe('VideojuegosOpinionesComponent', () => {
  let component: VideojuegosOpinionesComponent;
  let fixture: ComponentFixture<VideojuegosOpinionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosOpinionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
