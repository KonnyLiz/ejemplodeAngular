import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { Producto } from '../interfaces/producto.interface';
//import { Jsonp } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private productos?: Producto[];

  constructor(
    public _prod:ProductosServiceService
  ) { 
    this.productos = [];
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this._prod.getAll().subscribe(data => {
      console.log(data);
      this.productos = data.body;
      console.log(this.productos);
    });
  }
}
