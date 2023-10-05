
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Register,
  UniqueConstraintError,
} from './scanning';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegcrudService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  
  private url = 'http://localhost:2200/';

  Insert(
    Details: Register
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'register/Insert',
      Details,
      { headers: this.headers }
    );
  }
}