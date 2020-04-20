import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOComponent } from './registrar-o.component';

describe('RegistrarOComponent', () => {
  let component: RegistrarOComponent;
  let fixture: ComponentFixture<RegistrarOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
