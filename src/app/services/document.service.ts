import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CreateDocumentCommand, DeleteDocumentCommand, DocumentViewModel, DownloadDocumentCommand, ErrorResponse, ReadDocumentCommand, UpdateDocumentCommand } from '../models/commands';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

const baseURL = environment.apiBaseUrl+"documents/";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService) { } 

  list(): Observable<DocumentViewModel[]> {
    return this.httpClient.get<DocumentViewModel[]>(baseURL + "list").pipe( 
      catchError(this.handleError)
    );;
  }
  
  download(cmd: DownloadDocumentCommand): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.post<DownloadDocumentCommand>(baseURL + 'download',
    JSON.stringify(cmd),{ headers, responseType: 'blob' as 'json' }).pipe( 
      catchError(this.handleError)
    );;  
  }

  deleteDocument(cmd: DeleteDocumentCommand): Observable<{}> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.get("token_access")
      }),
      body: JSON.stringify(cmd),
    }
    return this.httpClient.delete(baseURL + 'delete', options)
    .pipe( 
      catchError(this.handleError)
    );
  }

  addDocument(cmd: CreateDocumentCommand): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.get("token_access")
      }),
      body: JSON.stringify(cmd),
    }
    return this.httpClient.post(baseURL + 'create', options).pipe( 
      catchError(this.handleError)
    );; 
  }

  getDocumentById(cmd: ReadDocumentCommand): Observable<DocumentViewModel> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.get("token_access")
      }),
      body: JSON.stringify(cmd),
    }
    return this.httpClient.get<DocumentViewModel>(baseURL + "read").pipe( 
      catchError(this.handleError)
    );;
  }

  updatePost(cmd: UpdateDocumentCommand): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.get("token_access")
      }),
      body: JSON.stringify(cmd),
    }
    return this.httpClient.put<any>(baseURL + "update", options).pipe( 
      catchError(this.handleError)
    );
  }

   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      let resp: ErrorResponse = {
        code: error.status,
        message:error.error.message,
        errores: []
      };
      return throwError(resp);

    } else {       
      let resp: ErrorResponse = {
        code: error.status,
        message: error.error.message,
        errores: error.error.errors
      };
      return throwError(resp);
    }
  }

}
