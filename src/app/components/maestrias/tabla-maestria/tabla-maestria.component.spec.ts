import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMaestriaComponent } from './tabla-maestria.component';

describe('TablaMaestriaComponent', () => {
  let component: TablaMaestriaComponent;
  let fixture: ComponentFixture<TablaMaestriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMaestriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMaestriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
