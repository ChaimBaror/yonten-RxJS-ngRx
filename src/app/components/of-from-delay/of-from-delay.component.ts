import { Component, OnInit } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { mergeMap, delay, takeUntil, concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-concatMap-delay',
  templateUrl: './of-from-delay.component.html',
  styleUrls: ['./of-from-delay.component.css']
})
export class ConcatMapDelayComponent implements OnInit {


  source1$: Observable<number> = from([1, 2, 3, 4,5,6])
  source00$: Observable<number[]> = of([1, 2, 3, 4,5,6])
  source2$ = this.source00$.pipe(delay(1000)) // what happen here ? all emits delay by 1 sec - so we don't se different

  source3$ = this.source1$.pipe(
    concatMap((res: number) => {
      return of(res).pipe(delay(res * 200))
    }))  //  = [ of([1]) , of([1,2]) , of([1,2,3]) , of([1,2,3,4]) ]


  arrayDelay: number[] = []
  source4$ = this.source3$.pipe(map(res=>{
    console.log(res)
    this.arrayDelay.push(res);
    console.log(this.arrayDelay)

    return this.arrayDelay
  }))
  constructor() { }

  ngOnInit(): void {
    this.source1$.subscribe(res => { console.log('from: ' + res) })
    this.source2$.subscribe((res: number) => console.log('%c with  delay ' + res, 'color:green'))
    this.source3$.subscribe((res: number) => console.log('%c with growing delay ' + res, 'color:red'))
    this.source4$.subscribe((res: number[]) => console.log('%c with array growing delay ' + res, 'color:blue'))

  }
}
//https://rxjs-dev.firebaseapp.com/api/operators/delay
