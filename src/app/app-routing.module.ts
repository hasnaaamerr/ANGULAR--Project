import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExamPageComponent } from './components/exam-page/exam-page.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }
  { path: '', component: HomeComponent },
  { path: 'Exams', component: ExamPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
