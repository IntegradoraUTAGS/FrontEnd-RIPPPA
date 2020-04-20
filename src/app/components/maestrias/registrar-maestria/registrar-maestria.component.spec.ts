import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaestriaComponent } from './registrar-maestria.component';

describe('RegistrarMaestriaComponent', () => {
  let component: RegistrarMaestriaComponent;
  let fixture: ComponentFixture<RegistrarMaestriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMaestriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMaestriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
