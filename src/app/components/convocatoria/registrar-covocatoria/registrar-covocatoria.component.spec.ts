import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCovocatoriaComponent } from './registrar-covocatoria.component';

describe('RegistrarCovocatoriaComponent', () => {
  let component: RegistrarCovocatoriaComponent;
  let fixture: ComponentFixture<RegistrarCovocatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCovocatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCovocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
