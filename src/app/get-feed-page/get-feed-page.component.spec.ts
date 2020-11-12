/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetFeedPageComponent } from './get-feed-page.component';

describe('GetFeedPageComponent', () => {
  let component: GetFeedPageComponent;
  let fixture: ComponentFixture<GetFeedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFeedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
