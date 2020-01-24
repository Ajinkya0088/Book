import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private http: HttpClient, private service: BookService, private router: Router) { }

  ngOnInit() {
  }

  updatebook()
  {
    // tslint:disable-next-line: max-line-length
    this.http.put('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/books/'+ this.service.books.id, this.service.books).subscribe((response)=>{
      this.router.navigate(['/books']);

    })
  }

}
