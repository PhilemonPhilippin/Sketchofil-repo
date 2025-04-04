import { Component, inject } from '@angular/core';
import { SketchService } from '../../../apis/sketch.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-daily-sketch-idea',
  imports: [AsyncPipe],
  templateUrl: './daily-sketch-idea.component.html',
  styleUrl: './daily-sketch-idea.component.css',
})
export class DailySketchIdeaComponent {
  sketchIdea$!: Observable<string>;
  private sketchService = inject(SketchService);

  constructor() {
    this.sketchIdea$ = this.sketchService.getDailySketchIdea();
  }
}
