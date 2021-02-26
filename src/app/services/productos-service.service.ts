import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../components/interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  private urlApi:string = 'http://127.0.0.1:8000/api/productos';

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Producto[]>(this.urlApi, { observe: 'response'});
  }
}
