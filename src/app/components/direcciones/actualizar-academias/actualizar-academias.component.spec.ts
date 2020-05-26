import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAcademiasComponent } from './actualizar-academias.component';

describe('ActualizarAcademiasComponent', () => {
  let component: ActualizarAcademiasComponent;
  let fixture: ComponentFixture<ActualizarAcademiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarAcademiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAcademiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
