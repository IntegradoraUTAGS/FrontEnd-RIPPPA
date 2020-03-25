import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosConocimientosComponent } from './otros-conocimientos.component';

describe('OtrosConocimientosComponent', () => {
  let component: OtrosConocimientosComponent;
  let fixture: ComponentFixture<OtrosConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
