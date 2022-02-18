import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mock';

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

  addDepartment(department:Department):Observable<Department>{
    let option = {
      headers: new HttpHeaders({
         'Content-Type':'application/json',
         'Authorization':'Basic username:password' 
      })
    };
    return this.httpClient.post(this.url,department,option);
  }

 



}
