import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrincipalEmpleadoComponent } from './comp-principal-empleado.component';

describe('CompPrincipalEmpleadoComponent', () => {
  let component: CompPrincipalEmpleadoComponent;
  let fixture: ComponentFixture<CompPrincipalEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPrincipalEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrincipalEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
