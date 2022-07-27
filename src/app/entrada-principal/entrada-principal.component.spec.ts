import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaPrincipalComponent } from './entrada-principal.component';

describe('EntradaPrincipalComponent', () => {
  let component: EntradaPrincipalComponent;
  let fixture: ComponentFixture<EntradaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
