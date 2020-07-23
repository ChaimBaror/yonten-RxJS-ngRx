import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable, of, Subject } from 'rxjs';
import { Book } from '../add-book/add-book.component';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<Book[]>

  currentDescription: string;
 
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookList$ = this.bookService.getList()
  }
  expand(description:string) {
    // console.log(index);
    this.currentDescription = description
    
  }
}
