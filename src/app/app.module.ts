import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddstudentComponent,
    UpdateComponent,
    LoginComponent,
    HomeComponent,
    AddbookComponent,
    BooksComponent,
    UpdateBookComponent,
    RegisterComponent,
    ForgotpassComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
