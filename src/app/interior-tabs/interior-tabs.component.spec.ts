import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorTabsComponent } from './interior-tabs.component';

describe('InteriorTabsComponent', () => {
  let component: InteriorTabsComponent;
  let fixture: ComponentFixture<InteriorTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
