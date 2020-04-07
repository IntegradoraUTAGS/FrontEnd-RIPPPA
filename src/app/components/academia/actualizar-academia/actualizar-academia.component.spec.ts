import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAcademiaComponent } from './actualizar-academia.component';

describe('ActualizarAcademiaComponent', () => {
  let component: ActualizarAcademiaComponent;
  let fixture: ComponentFixture<ActualizarAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
