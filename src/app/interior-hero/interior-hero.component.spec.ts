import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorHeroComponent } from './interior-hero.component';

describe('InteriorHeroComponent', () => {
  let component: InteriorHeroComponent;
  let fixture: ComponentFixture<InteriorHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
