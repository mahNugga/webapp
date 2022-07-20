import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaClienteComponent } from './entrada-cliente.component';

describe('EntradaClienteComponent', () => {
  let component: EntradaClienteComponent;
  let fixture: ComponentFixture<EntradaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
