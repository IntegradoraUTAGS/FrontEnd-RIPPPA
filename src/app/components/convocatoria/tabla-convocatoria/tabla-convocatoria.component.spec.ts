import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConvocatoriaComponent } from './tabla-convocatoria.component';

describe('TablaConvocatoriaComponent', () => {
  let component: TablaConvocatoriaComponent;
  let fixture: ComponentFixture<TablaConvocatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConvocatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
