import { Component } from '@angular/core';
import { DailySketchIdeaComponent } from '../sketch/daily-sketch-idea/daily-sketch-idea.component';
import { AdminTestComponent } from '../sketch/admin-test/admin-test.component';

@Component({
    selector: 'app-home',
    imports: [DailySketchIdeaComponent, AdminTestComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {}
