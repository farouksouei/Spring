import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableComponent } from './document-table.component';

describe('DocumentTableComponent', () => {
  let component: DocumentTableComponent;
  let fixture: ComponentFixture<DocumentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
