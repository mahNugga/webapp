import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaEmpleadoComponent } from './entrada-empleado.component';

describe('EntradaEmpleadoComponent', () => {
  let component: EntradaEmpleadoComponent;
  let fixture: ComponentFixture<EntradaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
