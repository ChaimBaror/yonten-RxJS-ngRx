import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
export interface Book {
  bookName: string;
  bookDescription: string;
}
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookName: string;
  bookDescription: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  add() {
    this.bookService.addBook({
      bookName: this.bookName,
      bookDescription: this.bookDescription
    })
  }

}
