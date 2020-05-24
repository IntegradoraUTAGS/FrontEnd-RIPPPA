import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPerfilComponent } from './tabla-perfil.component';

describe('TablaPerfilComponent', () => {
  let component: TablaPerfilComponent;
  let fixture: ComponentFixture<TablaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
