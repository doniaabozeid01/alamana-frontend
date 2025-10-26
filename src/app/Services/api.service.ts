import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://localhost:7170/api/';

  constructor(private http: HttpClient, private router: Router) {}

  getAllCategories(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}Categories/GetCategories?page=1&pageSize=20`
    );
  }

  CreateCategory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}Categories/CreateCategory`, data);
  }

  UpdateCategory(id: number, data: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}Categories/UpdateCategory/${id}`,
      data
    );
  }

  DeleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Categories/DeleteCategory/${id}`);
  }

  productsByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}Categories/${categoryId}/products`);
  }

  CreateProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}Products/CreateProduct`, data);
  }

  UpdateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}Products/UpdateProduct/${id}`, data);
  }

  DeleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Products/DeleteProduct/${id}`);
  }

  getAllCountries(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}Countries/GetCountries?page=1&pageSize=20`
    );
  }

  UpdateCountry(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}Countries/UpdateCountry/${id}`, data);
  }

  DeleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Countries/DeleteCountry/${id}`);
  }

  CreateCountry(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}Countries/CreateCountry`, data);
  }

  warehousesByCountry(countryId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}Countries/${countryId}/warehouses`);
  }

  CreateWarehouse(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}Warehouse/CreateWarehouse`, data);
  }

  UpdateWarehouse(id: number, data: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}Warehouse/UpdateWarehouse/${id}`,
      data
    );
  }

  DeleteWarehouse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Warehouse/DeleteWarehouse/${id}`);
  }

  getCategoriesWithProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}Categories/getCategoriesWithProducts`);
  }

  AssignWarehouseByProductsAndCategories(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}Warehouse/AssignWarehouseByProductsAndCategories`,
      data
    );
  }

  GetCategoriesByWarehouseId(categoryId: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}WarehouseCategory/GetCategoriesByWarehouseId/${categoryId}`
    );
  }

  DeleteByWarehouseIdAndCtegoryId(
    warehouseId: number,
    categoryId: number
  ): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}WarehouseCategory/DeleteByWarehouseId/${warehouseId}/AndCategoryId/${categoryId}`
    );
  }

  CreateWarehouseCategory(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}WarehouseCategory/CreateWarehouseCategory`,
      data
    );
  }

  CreateWarehouseProduct(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}WarehouseProduct/CreateWarehouseProduct`,
      data
    );
  }

  GetProductsByWarehouseCategoryAndCountry(
    warehouseId: number,
    categoryId: number
  ): Observable<any> {
    return this.http.get(
      `${this.baseUrl}WarehouseProduct/GetProductsByWarehouseCategoryAndCountry?warehouseId=${warehouseId}&categoryId=${categoryId}`
    );
  }

  DeleteByWarehouseIdAndProductId(
    warehouseId: number,
    productId: number
  ): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}WarehouseProduct/DeleteByWarehouseId/${warehouseId}/AndProductId/${productId}`
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}Products/GetAllProductsAsync`);
  }

  CreateProductCountryPrice(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}ProductCountryPrice/CreateProductCountryPrice`,
      data
    );
  }

  GetProductsByCountryIdAsync(countryId: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}ProductCountryPrice/GetProductsByCountryIdAsync/${countryId}`
    );
  }

DeleteProductCountryPrice(id:number):Observable<any>{
    return this.http.delete(
      `${this.baseUrl}ProductCountryPrice/DeleteProductCountryPrice/${id}`
    );
}

  
}
