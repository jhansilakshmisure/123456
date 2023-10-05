
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Doctor,
  UniqueConstraintError,
} from './scanning';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DoccrudService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  
  private url = 'http://localhost:5000/';

  Insert(
    Details: Doctor
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'doctor/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(id_no: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}doctor/Read${id_no}`);
}
Delete(id_no: String): Observable<InsertedSuccess> {
  console.log(`${this.url}doctor/Delete${id_no}`);
  return this.http.delete<InsertedSuccess>(
    `${this.url}doctor/Delete${id_no}`
  );
}
Update(id_no: String, Details: Doctor) {
  return this.http.put(`${this.url}doctor/Update${id_no}`, Details, {
    headers: this.headers,
  });

}
}