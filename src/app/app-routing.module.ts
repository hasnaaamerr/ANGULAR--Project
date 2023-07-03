import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'Exams', component: ExamPageComponent },
  { path: '**', component: NotFoundComponent }, // 404 not found with any wrong url

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
