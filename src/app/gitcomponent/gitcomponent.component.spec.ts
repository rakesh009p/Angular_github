import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { gitcomponent } from './gitcomponent.component';

describe('GitcomponentComponent', () => {
  let component: gitcomponent;
  let fixture: ComponentFixture<gitcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ gitcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(gitcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
