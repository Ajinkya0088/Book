import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdateComponent} from './update/update.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'students', component: StudentsComponent },
  {path : 'add', component: AddstudentComponent },
  {path : 'update', component: UpdateComponent },
  {path : 'login', component: LoginComponent },
  {path : 'students', component: StudentsComponent },
  {path : 'addbook', component: AddbookComponent },
  {path : 'books', component: BooksComponent},
  {path : 'updatebooks', component: UpdateBookComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'home', component: HomeComponent},
  {path : 'verifymail', component: VerifyEmailComponent},
  {path : 'forgotpass', component: ForgotpassComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
