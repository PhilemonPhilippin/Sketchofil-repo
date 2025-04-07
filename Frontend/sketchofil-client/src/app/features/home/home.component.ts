import { Component } from '@angular/core';
import { DailySketchIdeaComponent } from '../sketch/daily-sketch-idea/daily-sketch-idea.component';

@Component({
  selector: 'app-home',
  imports: [DailySketchIdeaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
