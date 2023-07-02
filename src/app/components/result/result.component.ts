import { ExamService } from './../services/exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  examId: any;
  exam:any;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private ActivatedRoute:ActivatedRoute,
    private ExamSerivce:ExamService,
    private router:Router
  ) {
    this.examId = this.ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // get exam result
    this.ExamSerivce.getResult(this.examId,6).subscribe({
      next:(response) =>{
        this.exam = response;
        console.log(response);
        this.viewSuccess();
      },
      error:(error:any) =>{
        this.router.navigate(['/']);
      }
    });
  }

  public surprise(): void {

    const canvas = this.renderer2.createElement('canvas');
 
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
 
    const myConfetti = confetti.create(canvas, {
      resize: true
    });
 
    myConfetti();
 
  }

  viewSuccess(){
    if(this.exam.isPassed){
      this.surprise();
      setTimeout(() => {
        this.surprise();
      }, 1200);
    }
  }
}
