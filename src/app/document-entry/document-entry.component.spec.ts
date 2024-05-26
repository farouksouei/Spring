import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEntryComponent } from './document-entry.component';

describe('DocumentEntryComponent', () => {
  let component: DocumentEntryComponent;
  let fixture: ComponentFixture<DocumentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
