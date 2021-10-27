/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SegurosComponent } from './seguros.component';

describe('SegurosComponent', () => {
  let component: SegurosComponent;
  let fixture: ComponentFixture<SegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
