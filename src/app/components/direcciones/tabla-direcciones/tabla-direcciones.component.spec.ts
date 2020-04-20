import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDireccionesComponent } from './tabla-direcciones.component';

describe('TablaDireccionesComponent', () => {
  let component: TablaDireccionesComponent;
  let fixture: ComponentFixture<TablaDireccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDireccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
