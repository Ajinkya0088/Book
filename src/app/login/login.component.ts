import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  email = "";
  password = "";
  msg = "";

  ngOnInit() {
  }

  login() {
    this.http.get('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/login',{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'email': this.email,
      'password': this.password,

    })}).subscribe(
      (user: any) => {
        localStorage.setItem('username', JSON.stringify(user.email));
        this.router.navigate(['/students']);
      },
      (error) => {
        this.msg = 'Username or password is Incorrect!!!';
      }
    )
  }

}
