import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clients2SectionComponent } from './clients2-section.component';

describe('Clients2SectionComponent', () => {
  let component: Clients2SectionComponent;
  let fixture: ComponentFixture<Clients2SectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clients2SectionComponent]
    });
    fixture = TestBed.createComponent(Clients2SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
