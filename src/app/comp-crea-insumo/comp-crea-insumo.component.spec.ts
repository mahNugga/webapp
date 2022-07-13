import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCreaInsumoComponent } from './comp-crea-insumo.component';

describe('CompCreaInsumoComponent', () => {
  let component: CompCreaInsumoComponent;
  let fixture: ComponentFixture<CompCreaInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCreaInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCreaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
