import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAdministradorComponent } from './insertar-administrador.component';

describe('InsertarAdministradorComponent', () => {
  let component: InsertarAdministradorComponent;
  let fixture: ComponentFixture<InsertarAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
