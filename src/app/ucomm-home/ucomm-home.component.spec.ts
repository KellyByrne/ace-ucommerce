import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcommHomeComponent } from './ucomm-home.component';

describe('UcommHomeComponent', () => {
  let component: UcommHomeComponent;
  let fixture: ComponentFixture<UcommHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcommHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcommHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
