import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConvocatoriaComponent } from './actualizar-convocatoria.component';

describe('ActualizarConvocatoriaComponent', () => {
  let component: ActualizarConvocatoriaComponent;
  let fixture: ComponentFixture<ActualizarConvocatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarConvocatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
