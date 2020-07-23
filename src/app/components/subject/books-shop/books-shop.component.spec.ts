/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BooksShopComponent } from './books-shop.component';

describe('BooksShopComponent', () => {
  let component: BooksShopComponent;
  let fixture: ComponentFixture<BooksShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
