import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabClienteComponent } from './cab-cliente.component';

describe('CabClienteComponent', () => {
  let component: CabClienteComponent;
  let fixture: ComponentFixture<CabClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
