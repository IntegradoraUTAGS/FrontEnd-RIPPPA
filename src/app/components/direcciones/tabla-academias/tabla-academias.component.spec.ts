import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAcademiasComponent } from './tabla-academias.component';

describe('TablaAcademiasComponent', () => {
  let component: TablaAcademiasComponent;
  let fixture: ComponentFixture<TablaAcademiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAcademiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAcademiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
