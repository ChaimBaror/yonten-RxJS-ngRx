import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  source1$: Observable<number[]> = of([1, 2, 3, 4, 5, 6])
  source2$ = from([1, 2, 3, 4, 5, 6])
  
  constructor() { }

  ngOnInit(): void {
    this.source1$.subscribe(console.log)
    this.source2$.subscribe(console.log)
  }
  

}
