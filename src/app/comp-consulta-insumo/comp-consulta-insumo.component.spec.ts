import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompConsultaInsumoComponent } from './comp-consulta-insumo.component';

describe('CompConsultaInsumoComponent', () => {
  let component: CompConsultaInsumoComponent;
  let fixture: ComponentFixture<CompConsultaInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompConsultaInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompConsultaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
