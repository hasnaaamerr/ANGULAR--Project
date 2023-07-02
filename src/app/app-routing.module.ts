import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApoutUsComponent } from './components/apout-us/apout-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'Exams', component: ExamPageComponent },
  { path: 'Apout', component: ApoutUsComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: '**', component: NotFoundComponent }                 // 404 not found with any wrong url

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
