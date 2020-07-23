/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FromEventMouseComponent } from './from-event-mouse.component';

describe('FromEventMouseComponent', () => {
  let component: FromEventMouseComponent;
  let fixture: ComponentFixture<FromEventMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEventMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
