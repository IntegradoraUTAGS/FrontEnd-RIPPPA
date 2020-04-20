import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDireccionesComponent } from './insertar-direcciones.component';

describe('InsertarDireccionesComponent', () => {
  let component: InsertarDireccionesComponent;
  let fixture: ComponentFixture<InsertarDireccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarDireccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
