import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAcademiaComponent } from './tabla-academia.component';

describe('TablaAcademiaComponent', () => {
  let component: TablaAcademiaComponent;
  let fixture: ComponentFixture<TablaAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
