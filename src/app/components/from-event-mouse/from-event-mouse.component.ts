import { Component, OnInit, ViewChild ,ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, Subscription, merge, interval, NEVER, of } from 'rxjs';
import { tap, mapTo, switchMap, scan, takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-from-event-mouse',
  templateUrl: './from-event-mouse.component.html',
  styleUrls: ['./from-event-mouse.component.css']
})
export class FromEventMouseComponent implements OnInit , AfterViewInit{

  counter: number = 0;

  @ViewChild('startBtn') startBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('pauseBtn') pauseBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('resetBtn') resetBtn: ElementRef<HTMLButtonElement>;

  tickData= {
    tickSpeed:500,
  }
  startBtn$:Observable<boolean> // what is need to be and how to find it ?
  pauseBtn$:Observable<boolean>
  resetBtn$:Observable<boolean>
  startBtnSubscription:Subscription
  pauseBtnSubscription:Subscription
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  
    console.log(this.startBtn.nativeElement);
    

    //create stream 1
    this.startBtn$ = fromEvent (this.startBtn.nativeElement,"click").pipe(
      tap(res=>console.log(res))
      ,mapTo(true)
    )
    //create stream 2
    this.pauseBtn$ = fromEvent (this.pauseBtn.nativeElement,"click").pipe(
      tap(res=>console.log(res))
      ,mapTo(false)
    )

    //create stream 3 
    this.resetBtn$=(fromEvent(this.resetBtn.nativeElement,"click")).pipe(
      mapTo(false)
    )

    // process values from both streams
    merge(this.startBtn$ , this.pauseBtn$ ).pipe(
      switchMap( (isTicking:boolean)=>isTicking?
      //emit value in sequence every 1 second
      interval(this.tickData.tickSpeed):
      // return uncompleted observable
      NEVER 
      //try this and see what happen
      // of(1)
       )
      //  ,scan((acc:number)=>acc++)
      //  ,scan((acc:number)=>++acc)
      ,takeUntil(this.resetBtn$)
      ,take(40)
    )
    .subscribe(res=>{
      console.log(res);
      
      this.counter =res
    })

    // this.startBtnSubscription = this.startBtn$.subscribe()
    // this.pauseBtnSubscription = this.pauseBtn$.subscribe()
  }
  

  pause() {

  }
  start() {

  }

}
