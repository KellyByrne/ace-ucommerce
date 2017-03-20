import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntFooterComponent } from './home-int-footer.component';

describe('HomeIntFooterComponent', () => {
  let component: HomeIntFooterComponent;
  let fixture: ComponentFixture<HomeIntFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIntFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
