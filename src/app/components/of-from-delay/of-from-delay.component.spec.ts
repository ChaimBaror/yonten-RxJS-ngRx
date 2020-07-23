import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapDelayComponent } from './of-from-delay.component';

describe('OfFromDelayComponent', () => {
  let component: ConcatMapDelayComponent;
  let fixture: ComponentFixture<ConcatMapDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatMapDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
