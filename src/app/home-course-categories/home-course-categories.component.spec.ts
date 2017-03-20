import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCourseCategoriesComponent } from './home-course-categories.component';

describe('HomeCourseCategoriesComponent', () => {
  let component: HomeCourseCategoriesComponent;
  let fixture: ComponentFixture<HomeCourseCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCourseCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCourseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
