import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingComponent } from './staffing.component';

describe('StaffingComponent', () => {
  let component: StaffingComponent;
  let fixture: ComponentFixture<StaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
