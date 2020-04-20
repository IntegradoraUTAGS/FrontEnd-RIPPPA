import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOComponent } from './actualizar-o.component';

describe('ActualizarOComponent', () => {
  let component: ActualizarOComponent;
  let fixture: ComponentFixture<ActualizarOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
