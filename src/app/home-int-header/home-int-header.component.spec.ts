import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntHeaderComponent } from './home-int-header.component';

describe('HomeIntHeaderComponent', () => {
  let component: HomeIntHeaderComponent;
  let fixture: ComponentFixture<HomeIntHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIntHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
