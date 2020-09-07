import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import  { Cuenta } from '../interfaces/cuenta';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
  
})
export class CuentaService {

  BASE_URL: string = 'https://wanchaqestadocuenta.herokuapp.com/';
  //BASE_URL: string = '';
  //BASE_URL: string = '';
  //--proxy-config proxy.conf.json (comando para adionar en el start de package.json)
  //http://localhost:3000/cuenta/5ef0c78b77025b3fd4914835

  constructor(private http:HttpClient) { }
/*
  getCuentas(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(`${this.BASE_URL}/cuenta`);
  }

  getCuenta(id:string): Observable<Cuenta>{
    return this.http.get<Cuenta>(`${this.BASE_URL}/cuenta/${ id}`);
  }
*/
  getCuentas(): Observable<Cuenta[]>{
    return this.http.get<Cuenta[]>(`${this.BASE_URL}/cuenta`);
  }
  
  getCuenta(id:string): Observable<Cuenta>{
    return this.http.get<Cuenta>(`${this.BASE_URL}/cuenta/${ id}`);
  }
  getCuentaByIDCiudadano(idciudadano:string): Observable<Cuenta[]>{
    return this.http.get<Cuenta[]>(`${this.BASE_URL}/cuenta/codigo/${ idciudadano}`);
  }
  /*getCuentaByIDCiudadano(idciudadano:string): Observable<Cuenta>{
    return this.http.get<Cuenta>(`/cuenta/codigo/${idciudadano}`);
  }*/

  createCuenta(cuenta: Cuenta):Observable<Cuenta>{
    return this.http.post<Cuenta>(`${this.BASE_URL}/cuenta/create/`,cuenta); 
  }
  deleteCuenta(id: string):Observable<Cuenta>{
    return this.http.delete<Cuenta>(`${this.BASE_URL}/cuenta/delete?cuentaID=${id}`);
  }
  updateCuenta(id: string, cuenta: Cuenta):Observable<Cuenta>{
    return this.http.put<Cuenta>(`${this.BASE_URL}/cuenta/update?cuentaID=${id}`, cuenta);
  }
} 
