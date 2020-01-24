import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentService} from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private http: HttpClient, private service: StudentService, private router: Router) { }
  students: any;

  ngOnInit() {
    this.getStudent();
  }
  getStudent() {
    this.http.get('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/students').subscribe((respose) =>{
      this.students = respose;
    })
  }

  deleteStudent(s)
  {
    this.http.delete('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/students/'+ s.id).subscribe((response)=>{
      this.students = this.students.filter(item => item !== s)
    })
  }

  UpdateStudent(s)
  {
    this.service.students = s;
    this.router.navigate(['/update']);
  }


}
