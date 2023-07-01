import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  baseURL: string = 'http://localhost:3005/products';
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(this.baseURL);
  }
  getProductById(productId: any) {
    return this.http.get(`${this.baseURL}/${productId}`);
  }
}
