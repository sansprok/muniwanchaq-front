import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadocuentaComponent } from './estadocuenta.component';

describe('EstadocuentaComponent', () => {
  let component: EstadocuentaComponent;
  let fixture: ComponentFixture<EstadocuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadocuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
