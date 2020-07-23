import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, concat } from 'rxjs';
import { delay, map } from 'rxjs/operators'
@Component({
  selector: 'app-map-concat',
  templateUrl: './map-concat.component.html',
  styleUrls: ['./map-concat.component.css']
})
export class MapConcatComponent implements OnInit, OnDestroy {

  tsetObser$: Observable<string | number> = from([4, 9, "6", 43, 3])
  source1$: Observable<number[]> = of([1, 56 ],[ 3, 4, 5, 6])
  source2$ = of([7, 8, 9, 10])
  source3$ = of(['a', 'b', 'c', 'd'])

  source4$: Observable<number[] | string[]> = concat(this.source1$, this.source2$, this.source3$);

  source5$: Observable<number[]> = this.source1$.pipe( map((res) => { res[2]+(100); return res
    })
    , map(
      (res: number[]) => res.map(value => value * 2)
    )

  )


  constructor() { }

  ngOnInit(): void {
    this.source4$.subscribe(console.log)
  }

  ngOnDestroy() {
    // add subscriber....
  }

}
