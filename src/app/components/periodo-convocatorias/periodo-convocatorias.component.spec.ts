import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoConvocatoriasComponent } from './periodo-convocatorias.component';

describe('PeriodoConvocatoriasComponent', () => {
  let component: PeriodoConvocatoriasComponent;
  let fixture: ComponentFixture<PeriodoConvocatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoConvocatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
