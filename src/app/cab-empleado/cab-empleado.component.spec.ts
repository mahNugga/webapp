import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabEmpleadoComponent } from './cab-empleado.component';

describe('CabEmpleadoComponent', () => {
  let component: CabEmpleadoComponent;
  let fixture: ComponentFixture<CabEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
