import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent {
  @Input() a_title: string = 'Not Title';

  @Input('a_data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{ data: [350, 450, 100] }],
  };
}