import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../models/Employee';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiUrl =  `${environment.ApiUrl}/Employees/BuscaFuncionarios`

  constructor( private http: HttpClient) { }

  GetEmploees() : Observable<Response<Employees[]>> {
    return this.http.get<Response<Employees[]>>(this.apiUrl);
  }

}
