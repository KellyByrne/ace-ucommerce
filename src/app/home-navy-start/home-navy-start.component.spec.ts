import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavyStartComponent } from './home-navy-start.component';

describe('HomeNavyStartComponent', () => {
  let component: HomeNavyStartComponent;
  let fixture: ComponentFixture<HomeNavyStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavyStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
