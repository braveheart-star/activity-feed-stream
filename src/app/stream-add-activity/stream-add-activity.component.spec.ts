/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreamAddActivityComponent } from './stream-add-activity.component';

describe('StreamAddActivityComponent', () => {
  let component: StreamAddActivityComponent;
  let fixture: ComponentFixture<StreamAddActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamAddActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamAddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
