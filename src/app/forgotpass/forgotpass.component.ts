import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  code = "";
  email = "";
  password = "";
  msg = "";

  ngOnInit() {
  }
  reset(){
    this.http.get('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/reset/' + this.code, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'email': this.email,
      'password': this.password,

    })}).subscribe(
      (response : any) => {
        this.msg = "Password successfully set!!!"
        this.router.navigate(['/login']);
      },
      (error) => {
        this.msg = 'Username or password is Incorrect!!!';
      }
    )
  }

}
