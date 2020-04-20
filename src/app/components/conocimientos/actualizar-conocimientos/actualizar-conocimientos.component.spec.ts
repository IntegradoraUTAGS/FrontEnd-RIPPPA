import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConocimientosComponent } from './actualizar-conocimientos.component';

describe('ActualizarConocimientosComponent', () => {
  let component: ActualizarConocimientosComponent;
  let fixture: ComponentFixture<ActualizarConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
