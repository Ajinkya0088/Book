import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router , private service: StudentService) { }

  ngOnInit() {
  }

  update()
  {
    // tslint:disable-next-line: max-line-length
    this.http.put('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/students/'+ this.service.students.id, this.service.students).subscribe((Response)=>{
    this.router.navigate(['/students']);
    })
  }
}
