import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementComponent,
    DonutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgChartsModule
  ],
  exports: [
    IncrementComponent,
    DonutComponent
  ]
})

export class ComponentsModule { }
