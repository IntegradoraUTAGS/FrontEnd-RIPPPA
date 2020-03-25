import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriasComponent } from './maestrias.component';

describe('MaestriasComponent', () => {
  let component: MaestriasComponent;
  let fixture: ComponentFixture<MaestriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
