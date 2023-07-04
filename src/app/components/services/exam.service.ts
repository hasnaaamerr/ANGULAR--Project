import { Answers } from './Interfaces/answers';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from './Interfaces/exam';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  baseURL: string = 'https://localhost:7275/api/Exam';
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(this.baseURL);
  }
  // exam msh product :D
  getProductById(productId: any) {
    return this.http.get(`${this.baseURL}/${productId}`);
  }

  getExam(id: any):Observable<Exam> {
    return this.http.get<Exam>( `${this.baseURL}/${id}` );
  }

  store(Answers:Answers){
    return this.http.post(this.baseURL,Answers);
  }

  getResult(examId:number,userId:number){
    const data = {
      examId,
      userId
    };

    return this.http.post(`${this.baseURL}/examResult`, data);
  }
  CheckUserExam(examId:number,userId:number){
    const data = {
      examId,
      userId
    };

    return this.http.post(`${this.baseURL}/CheckUserExam`, data);
  }

}
