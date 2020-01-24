import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private http: HttpClient , private router: Router) { }
  students: any = { name : '', book : '', standard: '', division: '', days : ''};
  ngOnInit() {
  }

  add()
  {
    this.http.post('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/student',this.students).subscribe((response)=>{
    this.router.navigate(['/students']);
    })
  }

}
