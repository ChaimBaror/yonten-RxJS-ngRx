import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, IStateEvent, ISingleEvent } from '../store/event'


export const selectFeature :MemoizedSelector<object,IStateEvent>= createFeatureSelector<AppState, IStateEvent>('events');

export const eventsFeature:MemoizedSelector<object,ISingleEvent[]> = createSelector(
  selectFeature,
  (state):ISingleEvent[]=>state.events
)

export const selectFeatureCity:MemoizedSelector<object,string[]> = createSelector(
  selectFeature,
  (state: IStateEvent) :string[]=> state.events.map(event=>event.city)
);