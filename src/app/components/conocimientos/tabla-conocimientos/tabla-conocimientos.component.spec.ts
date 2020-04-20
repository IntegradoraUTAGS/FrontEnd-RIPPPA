import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConocimientosComponent } from './tabla-conocimientos.component';

describe('TablaConocimientosComponent', () => {
  let component: TablaConocimientosComponent;
  let fixture: ComponentFixture<TablaConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
