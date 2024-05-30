import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessusItComponent } from './processus-it.component';

describe('ProcessusItComponent', () => {
  let component: ProcessusItComponent;
  let fixture: ComponentFixture<ProcessusItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessusItComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessusItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
