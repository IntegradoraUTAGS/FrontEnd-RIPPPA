import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAcademiaComponent } from './registrar-academia.component';

describe('RegistrarAcademiaComponent', () => {
  let component: RegistrarAcademiaComponent;
  let fixture: ComponentFixture<RegistrarAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
