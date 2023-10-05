
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Scanning,
  UniqueConstraintError,
} from './scanning';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  
  private url = 'http://localhost:3100/';

  Insert(
    Details: Scanning
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'scanning/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(s_no: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}scanning/Read${s_no}`);
  }
  Delete(s_no: String): Observable<InsertedSuccess> {
    console.log(`${this.url}scanning/Delete${s_no}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}scanning/Delete${s_no}`
    );
  }
  Update(s_no: String, Details: Scanning) {
    return this.http.put(`${this.url}scanning/Update${s_no}`, Details, {
      headers: this.headers,
    });
  }



  
}