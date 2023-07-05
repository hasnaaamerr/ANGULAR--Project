import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  questionsForm!: FormGroup;
  questionCount = Array.from({ length: 1 }, (_, i) => i + 1);
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.questionsForm = this.fb.group({
      examName: ['', Validators.required],
      Titles1: ['', Validators.required],
      Options11: ['', Validators.required],
      Options12: ['', Validators.required],
      Options13: ['', Validators.required],
      Options14: ['', Validators.required],
    });
  }

  addNewQuestion() {
    this.questionCount.push(this.questionCount.length + 1);
    const questionControlName = `Titles${this.questionCount.length}`;
    const option1ControlName = `Options${this.questionCount.length}1`;
    const option2ControlName = `Options${this.questionCount.length}2`;
    const option3ControlName = `Options${this.questionCount.length}3`;
    const option4ControlName = `Options${this.questionCount.length}4`;
  
    this.questionsForm.addControl(questionControlName, this.fb.control('', Validators.required));
    this.questionsForm.addControl(option1ControlName, this.fb.control('', Validators.required));
    this.questionsForm.addControl(option2ControlName, this.fb.control('', Validators.required));
    this.questionsForm.addControl(option3ControlName, this.fb.control('', Validators.required));
    this.questionsForm.addControl(option4ControlName, this.fb.control('', Validators.required));
  }

  submitForm() {
    const formValues = {
      questionCount: this.questionCount.length,
      ...this.questionsForm.value
    };
    console.log(formValues);
  }
  
}
