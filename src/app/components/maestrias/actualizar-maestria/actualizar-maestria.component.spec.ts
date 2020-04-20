import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMaestriaComponent } from './actualizar-maestria.component';

describe('ActualizarMaestriaComponent', () => {
  let component: ActualizarMaestriaComponent;
  let fixture: ComponentFixture<ActualizarMaestriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarMaestriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarMaestriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
