import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapSectionComponent } from './roadmap-section.component';

describe('RoadmapSectionComponent', () => {
  let component: RoadmapSectionComponent;
  let fixture: ComponentFixture<RoadmapSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
