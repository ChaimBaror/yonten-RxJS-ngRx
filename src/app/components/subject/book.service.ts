import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Book } from './add-book/add-book.component';

@Injectable({ providedIn: 'root' })
export class BookService {

  books$: Subject<Book[]> = new Subject();
  booksArr: Book[] = [];
  constructor() { }

  addBook(book: Book) {
    // debugger
    this.booksArr.push(book)
    this.books$.next(this.booksArr)
  }
  getList(): Observable<Book[]> {
    return this.books$.asObservable()
  }
}
