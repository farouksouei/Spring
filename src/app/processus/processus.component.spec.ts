import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessusComponent } from './processus.component';

describe('ProcessusComponent', () => {
  let component: ProcessusComponent;
  let fixture: ComponentFixture<ProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
