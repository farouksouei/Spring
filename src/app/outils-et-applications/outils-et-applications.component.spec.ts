import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilsEtApplicationsComponent } from './outils-et-applications.component';

describe('OutilsEtApplicationsComponent', () => {
  let component: OutilsEtApplicationsComponent;
  let fixture: ComponentFixture<OutilsEtApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutilsEtApplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutilsEtApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
