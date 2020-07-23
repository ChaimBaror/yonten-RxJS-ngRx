import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  source1$: Observable<number[]> = of([1, 2, 3, 4, 5, 6])

  source2$ = from([1, 2, 3, 4, 5, 6])
}
