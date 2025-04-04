import { Component, inject, OnInit } from '@angular/core';
import { SketchService } from '../../../apis/sketch.service';

@Component({
    selector: 'app-daily-sketch-idea',
    imports: [],
    templateUrl: './daily-sketch-idea.component.html',
    styleUrl: './daily-sketch-idea.component.css'
})
export class DailySketchIdeaComponent implements OnInit {
  private sketchService = inject(SketchService);

  sketchIdea: string = '';

  ngOnInit(): void {
    this.sketchService.getDailySketchIdea().subscribe((response) => {
      this.sketchIdea = response;
    });
  }
}
