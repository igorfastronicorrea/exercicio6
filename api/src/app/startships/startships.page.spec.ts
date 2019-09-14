import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipsPage } from './startships.page';

describe('StartshipsPage', () => {
  let component: StartshipsPage;
  let fixture: ComponentFixture<StartshipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartshipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
