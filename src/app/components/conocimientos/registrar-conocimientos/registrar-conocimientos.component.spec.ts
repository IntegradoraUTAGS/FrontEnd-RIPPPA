import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarConocimientosComponent } from './registrar-conocimientos.component';

describe('RegistrarConocimientosComponent', () => {
  let component: RegistrarConocimientosComponent;
  let fixture: ComponentFixture<RegistrarConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
