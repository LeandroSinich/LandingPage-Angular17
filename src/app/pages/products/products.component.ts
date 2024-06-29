import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  listaProductos:IProduct[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) =>{
      this.listaProductos = data;
    })
  }

  productDetailNavigate(id:number){
    this._router.navigate(['/products', id])
  }
 

}
