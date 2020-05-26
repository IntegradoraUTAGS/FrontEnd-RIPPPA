import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAcademiasComponent } from './insertar-academias.component';

describe('InsertarAcademiasComponent', () => {
  let component: InsertarAcademiasComponent;
  let fixture: ComponentFixture<InsertarAcademiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarAcademiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarAcademiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
