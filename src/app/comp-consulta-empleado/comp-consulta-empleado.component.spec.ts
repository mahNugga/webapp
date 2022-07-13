import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompConsultaEmpleadoComponent } from './comp-consulta-empleado.component';

describe('CompConsultaEmpleadoComponent', () => {
  let component: CompConsultaEmpleadoComponent;
  let fixture: ComponentFixture<CompConsultaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompConsultaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompConsultaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
