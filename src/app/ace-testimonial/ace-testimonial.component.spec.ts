import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceTestimonialComponent } from './ace-testimonial.component';

describe('AceTestimonialComponent', () => {
  let component: AceTestimonialComponent;
  let fixture: ComponentFixture<AceTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
