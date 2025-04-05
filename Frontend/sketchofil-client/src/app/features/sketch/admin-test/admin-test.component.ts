import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SketchService } from '../../../apis/sketch.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin-test',
  imports: [AsyncPipe],
  templateUrl: './admin-test.component.html',
  styleUrl: './admin-test.component.css',
})
export class AdminTestComponent {
  adminTest$!: Observable<string>;
  private sketchService = inject(SketchService);

  constructor() {
    this.adminTest$ = this.sketchService.getAdminTest();
  }
}
