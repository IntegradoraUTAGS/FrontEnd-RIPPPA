import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOComponent } from './tabla-o.component';

describe('TablaOComponent', () => {
  let component: TablaOComponent;
  let fixture: ComponentFixture<TablaOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
