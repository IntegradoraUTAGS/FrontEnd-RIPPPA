import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDireccionesComponent } from './actualizar-direcciones.component';

describe('ActualizarDireccionesComponent', () => {
  let component: ActualizarDireccionesComponent;
  let fixture: ComponentFixture<ActualizarDireccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarDireccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
