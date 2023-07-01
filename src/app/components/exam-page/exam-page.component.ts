import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
  Exams: any;
  constructor(private ExamService: ExamService) {}
  ngOnInit(): void {
    this.ExamService.getAllProducts().subscribe({
      next: (response) => {
        this.Exams = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
