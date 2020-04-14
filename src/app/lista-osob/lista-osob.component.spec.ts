import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOsobComponent } from './lista-osob.component';

describe('ListaOsobComponent', () => {
  let component: ListaOsobComponent;
  let fixture: ComponentFixture<ListaOsobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOsobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOsobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
