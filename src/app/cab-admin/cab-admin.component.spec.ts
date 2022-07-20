import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabAdminComponent } from './cab-admin.component';

describe('CabAdminComponent', () => {
  let component: CabAdminComponent;
  let fixture: ComponentFixture<CabAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
