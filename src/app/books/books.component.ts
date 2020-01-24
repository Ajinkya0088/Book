import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private http: HttpClient, private Service: BookService, private router: Router) { }
  books: any;
  ngOnInit() {
    this.getBooks();
  }

  getBooks()
  {
    this.http.get('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/books').subscribe((response)=>{
      this.books = response;
    })
  }

  deleteBook(b)
  {
    this.http.delete('http://ec2-52-203-103-152.compute-1.amazonaws.com:8080/api/books/'+ b.id).subscribe((response)=>{
      this.books = this.books.filter(item => item !== b);
    })
  }

  update_Book(b)
  {
    this.Service.books = b;
    this.router.navigate(['/updatebooks']);
  }
}
