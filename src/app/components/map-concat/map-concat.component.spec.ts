/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapConcatComponent } from './map-concat.component';

describe('MapConcatComponent', () => {
  let component: MapConcatComponent;
  let fixture: ComponentFixture<MapConcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapConcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
