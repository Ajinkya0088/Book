import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  books: any = { book: '', author: '', department: '', publication: '', totalbook: '' };

  ngOnInit() {
  }

  addbook()
  {
    this.http.post('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/book', this.books).subscribe((response)=>{
      this.router.navigate(['/books']);
    })
  }

}
