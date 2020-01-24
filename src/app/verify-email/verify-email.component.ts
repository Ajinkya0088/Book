import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  email = "";
  msg = "";
  ngOnInit() {
  }

  getcode()
  {
    this.http.post('http://http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/verifymail', this.email).subscribe((Response)=>{
      this.router.navigate(['/forgotpass']);
    },
    (error)=>{
      this.msg= "Email does not exists!!!!";
    }
    )
  }
}
