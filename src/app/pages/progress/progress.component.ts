import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  a_progress1: number = 0;
  a_progress2: number = 0;

  get getProgress1() {
    return `${this.a_progress1}%`;
  }
  get getProgress2() {
    return `${this.a_progress2}%`;
  }
}
