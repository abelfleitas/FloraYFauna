import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CreateContactCommand, ErrorResponse } from '../models/commands';

const baseURL = environment.apiBaseUrl+"contact/";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  create(cmd: CreateContactCommand): Observable<any> {
    return this.httpClient.post<any>(baseURL + 'create', JSON.stringify(cmd),
    this.httpHeader).pipe( 
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
