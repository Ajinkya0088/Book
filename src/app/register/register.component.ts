import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  users: any = {username: '', email: '', password: ''};
  ngOnInit() {
  }

  register()
  {
    this.http.post('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/users', this.users).subscribe((Response)=>{
      this.users = Response;
      this.router.navigate(['/login']);
    })
  }

}
