import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySketchIdeaComponent } from './daily-sketch-idea.component';

describe('DailySketchIdeaComponent', () => {
  let component: DailySketchIdeaComponent;
  let fixture: ComponentFixture<DailySketchIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySketchIdeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailySketchIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
