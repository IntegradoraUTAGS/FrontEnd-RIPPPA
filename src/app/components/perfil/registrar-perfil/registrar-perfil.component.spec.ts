import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPerfilComponent } from './registrar-perfil.component';

describe('RegistrarPerfilComponent', () => {
  let component: RegistrarPerfilComponent;
  let fixture: ComponentFixture<RegistrarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
