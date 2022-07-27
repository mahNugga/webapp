import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabMainComponent } from './cab-main.component';

describe('CabMainComponent', () => {
  let component: CabMainComponent;
  let fixture: ComponentFixture<CabMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
