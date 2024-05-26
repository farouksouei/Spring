import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentEntry } from './document-entry.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentEntryService {

  private apiUrl = 'http://localhost:8085/documents';

  constructor(private http: HttpClient) { }

  uploadDocument(documentEntry: { file: File | null; name: any; timestamp: Date }): Observable<DocumentEntry> {
    const formData: FormData = new FormData();
    formData.append('name', documentEntry.name);
    formData.append('timestamp', documentEntry.timestamp.toISOString());
    // @ts-ignore
    formData.append('file', documentEntry.file, documentEntry.file.name);

    return this.http.post<DocumentEntry>(this.apiUrl, formData);
  }
}
