import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompConsultaServicioComponent } from './comp-consulta-servicio.component';

describe('CompConsultaServicioComponent', () => {
  let component: CompConsultaServicioComponent;
  let fixture: ComponentFixture<CompConsultaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompConsultaServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompConsultaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
