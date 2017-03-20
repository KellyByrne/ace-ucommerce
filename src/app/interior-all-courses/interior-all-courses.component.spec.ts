import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorAllCoursesComponent } from './interior-all-courses.component';

describe('InteriorAllCoursesComponent', () => {
  let component: InteriorAllCoursesComponent;
  let fixture: ComponentFixture<InteriorAllCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorAllCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
