import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyBenefitsComponent } from './key-benefits.component';

describe('KeyBenefitsComponent', () => {
  let component: KeyBenefitsComponent;
  let fixture: ComponentFixture<KeyBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
