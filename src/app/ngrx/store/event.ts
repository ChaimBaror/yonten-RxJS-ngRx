import { createAction, props } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';

export interface ISingleEvent {
  id: number;
  name: string;
  city: string
  address: string;
  createdAt: Date;
  text: string;
}


export const addEvent = createAction(
  '[Add Event] Event',
  props<ISingleEvent>()
);

export const removeEvent = createAction(
  '[Remove Event] Event',
  props<{ id: number }>()
);


export const editEvent = createAction(
  '[edit Event] Event',
  props<ISingleEvent>()
);

export interface IStateEvent {
    events: ISingleEvent[]
  
}

export interface AppState {
  events :IStateEvent,
  login : boolean
}

export const initialState: IStateEvent = {

  
    events: []
  

};
const eventsReducer = createReducer(
  initialState,
  on(addEvent, (state: IStateEvent, newEvent: ISingleEvent):IStateEvent => {
    console.log(state)
    // state.events.events.push(event) // why this not work -- immunite!!!
    // const events = [...state.events]
    // events.push(newEvent)
    return {...state,events:[...state.events,newEvent]}
  }),
  on(removeEvent, (state ,id:{id:number}) => {
    
    console.log(state.events.filter(event=>event.id!==id.id));
    
    return { ...state,} }),

);

export function reducer(state: IStateEvent | undefined, action: Action) {
  return eventsReducer(state, action);
}