import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGenCreacionComponent } from './dialog-gen-creacion.component';

describe('DialogGenCreacionComponent', () => {
  let component: DialogGenCreacionComponent;
  let fixture: ComponentFixture<DialogGenCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGenCreacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGenCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
