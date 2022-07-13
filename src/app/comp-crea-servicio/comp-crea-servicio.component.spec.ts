import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCreaServicioComponent } from './comp-crea-servicio.component';

describe('CompCreaServicioComponent', () => {
  let component: CompCreaServicioComponent;
  let fixture: ComponentFixture<CompCreaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCreaServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCreaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
