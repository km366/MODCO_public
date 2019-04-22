import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDisplayPage } from './search-display.page';

describe('SearchDisplayPage', () => {
  let component: SearchDisplayPage;
  let fixture: ComponentFixture<SearchDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
