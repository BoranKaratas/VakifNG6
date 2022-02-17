import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  constructor(private httpClient: HttpClient) { }

  url: string = 'https://mocki.io/v1/6cf7dc2f-e6ee-4f92-8bde-f24a877244f2';

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
      .pipe(catchError((err: HttpErrorResponse) => { 
        return throwError(() => new Error(err.statusText));
      }))
  }
}
