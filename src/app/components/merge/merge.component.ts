import { Component, OnInit } from '@angular/core';
import { Observable, from, of, merge, concat } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  source1$: Observable<number[]> = from([ [1],[1,2] ,[1,2,3] ,[1,2,3,4] ,[1,2,3,4,5] ])
  source2$: Observable<string[]> = from([ ['a'],['a','b'] ,['a','b','c'] ,['a','b','c','d'] ,['a','b','c','d','e'] ])

  source3$ = this.source1$.pipe(
    concatMap((res: number[],index ) => {
      return of(res).pipe(delay(index * 300))
    }))  //  = [ of([1]) , of([1,2]) , of([1,2,3]) , of([1,2,3,4]) ]

  source4$ = this.source2$.pipe(
    concatMap((res: string[],index ) => {
      return of(res).pipe(delay(index * 100))
    }))  //  = [ of([1]) , of([1,2]) , of([1,2,3]) , of([1,2,3,4]) ]

  source5$:Observable<number[]|string[]> = merge(this.source3$ ,this.source4$)
  source6$:Observable<number[]|string[]> = concat(this.source3$ ,this.source4$)
  constructor() { }

  ngOnInit() {
    this.source1$.subscribe(res => { console.log( res) })
    this.source2$.subscribe(res => { console.log( res) })
    // this.source5$.subscribe(res => { console.log( res) })
    this.source6$.subscribe(res => { console.log( res) })

  }

}
