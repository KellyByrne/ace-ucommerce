import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDisclaimerComponent } from './home-disclaimer.component';

describe('HomeDisclaimerComponent', () => {
  let component: HomeDisclaimerComponent;
  let fixture: ComponentFixture<HomeDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
