import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcommInteriorComponent } from './ucomm-interior.component';

describe('UcommInteriorComponent', () => {
  let component: UcommInteriorComponent;
  let fixture: ComponentFixture<UcommInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcommInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcommInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
