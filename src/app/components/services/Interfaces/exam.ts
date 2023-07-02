export interface Exam {
  Id: number;
  Name: string;
  createdAt: string;
  QuestionCount: number;
  ExamQuestions: ExamQuestionList;
}

export interface ExamQuestionList {
  $id: string;
  $values: ExamQuestion[];
}

export interface ExamQuestion {
  $id: string;
  Id: number;
  Title: string;
  Exam: ExamRef;
  ExamId: number;
  Options: ExamOptionList;
}

export interface ExamOptionList {
  $id: string;
  $values: ExamOption[];
}

export interface ExamOption {
  $id: string;
  Id: number;
  Title: string;
  IsRight: boolean;
  ExamQuestionId: number;
}

export interface ExamRef {
  $ref: string;
}