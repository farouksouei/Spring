import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentEntryService } from '../document-entry.service';

@Component({
  selector: 'app-document-entry',
  templateUrl: './document-entry.component.html',
  styleUrls: ['./document-entry.component.css']
})
export class DocumentEntryComponent {

  documentForm: FormGroup;
  fileToUpload: File | null = null;

  constructor(
    private fb: FormBuilder,
    private documentEntryService: DocumentEntryService
  ) {
    this.documentForm = this.fb.group({
      name: ['', Validators.required],
      timestamp: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
      this.documentForm.patchValue({
        file: this.fileToUpload
      });
    }
  }

  onSubmit() {
    if (this.documentForm.valid) {
      const documentEntry = {
        name: this.documentForm.get('name')?.value,
        timestamp: new Date(this.documentForm.get('timestamp')?.value),
        file: this.fileToUpload
      };
      this.documentEntryService.uploadDocument(documentEntry).subscribe(
          (response: any) => {
          console.log('Document uploaded successfully', response);
        },
          (error: any) => {
          console.error('Error uploading document', error);
        }
      );
    }
  }
}
