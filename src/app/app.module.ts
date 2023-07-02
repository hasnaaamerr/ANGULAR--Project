import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApoutUsComponent } from './components/apout-us/apout-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ExamPageComponent,
    NotFoundComponent,
    ApoutUsComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
