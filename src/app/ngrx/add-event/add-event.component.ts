import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addEvent, ISingleEvent } from '../store/event'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  name: string;
  city: string
  address: string;
  createdAt: Date;
  text: string; 
  counter : number=0;
  constructor(private store:Store<any>,private fb: FormBuilder) { }

  // addfrom = this.fb.group({
  //   name: ['chaim', [Validators.required, Validators.minLength(2)]],
  //   city: ['', Validators.email],
  //   address: ['', [Validators.required, Validators.min(3), Validators.max(17)]],
  //   text: [null]
  // })

  ngOnInit() {
  }

  add( ) {
    this.store.dispatch(addEvent( this.createEvent()));
    this.name='';
    this.city='';
    this.address='';
    this.text=''; 
  
  }
  createEvent():ISingleEvent{

    return {
      id: ++this.counter ,
      name: this.name,
      city: this.city,
      address: this.address,
      createdAt: new Date(),
      text: this.text
    }
  }

}
