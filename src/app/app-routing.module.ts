import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfFromComponent } from './components/of-from/of-from.component'
import { MapConcatComponent } from './components/map-concat/map-concat.component'
import { ConcatMapDelayComponent } from './components/of-from-delay/of-from-delay.component'
import { MergeComponent } from './components/merge/merge.component'
import { BooksShopComponent } from './components/subject/books-shop/books-shop.component'
import { AddBookComponent } from './components/subject/add-book/add-book.component'
import { BookListComponent } from './components/subject/book-list/book-list.component'
import { FromEventMouseComponent } from './components/from-event-mouse/from-event-mouse.component'
import { ThrottleTimeComponent } from './components/throttle-time/throttle-time.component'
import { BuffersComponent } from './components/buffers/buffers.component'
import { HttpClientComponent } from './components/http-client/http-client.component'
import { AddEventComponent } from './ngrx/add-event/add-event.component'
import { AdminEventsListComponent } from './ngrx/admin-events-list/admin-events-list.component'
const routes: Routes = [
  { path: 'step-a-from-of', component: OfFromComponent },
  { path: 'step-b-map-concat', component: MapConcatComponent },
  { path: 'step-c-concatMap-delay', component: ConcatMapDelayComponent },
  { path: 'step-d-merge', component: MergeComponent },
  { path: 'step-e-subject', component: BooksShopComponent },
  { path: 'step-f-fromevent', component: FromEventMouseComponent },
  { path: 'step-g-throttle', component: ThrottleTimeComponent },
  { path: 'step-h-buffers', component: BuffersComponent },
  { path: 'step-i-http', component: HttpClientComponent },
  { path: 'step-j-ngrx', component: AddEventComponent },
  { path: 'step-j-ngrx-admin', component: AdminEventsListComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [OfFromComponent
    , MapConcatComponent
    , ConcatMapDelayComponent
    , MergeComponent
    , BooksShopComponent
    , BookListComponent
    , AddBookComponent
    , FromEventMouseComponent
    , ThrottleTimeComponent
    , BuffersComponent
    , HttpClientComponent
    , AddEventComponent
    , AdminEventsListComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
