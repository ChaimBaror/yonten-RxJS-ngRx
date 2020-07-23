import { Component, OnInit } from '@angular/core';

import { fromEvent, iif, of } from 'rxjs';
import { mergeMap, map, throttleTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.css']
})
export class ThrottleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const red$ = of(`RED`);
    const green$ = of(`GREEN`);

    fromEvent(document, 'mousemove')
      .pipe(
        throttleTime(3000),
        filter((move: MouseEvent) => move.clientY < 210),
        map((move: MouseEvent) => move.clientY),
        mergeMap(yCoord => iif(() => yCoord < 110, red$, green$))
      )
      .subscribe(console.log);
  }


}
