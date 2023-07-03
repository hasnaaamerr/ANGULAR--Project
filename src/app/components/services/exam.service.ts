import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  baseURL: string = 'https://localhost:7275/api/Exam';
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(this.baseURL);
  }
  getProductById(productId: any) {
    return this.http.get(`${this.baseURL}/${productId}`);
  }
}
