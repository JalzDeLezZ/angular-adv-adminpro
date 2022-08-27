import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent implements OnInit {
  ngOnInit() {
    this.a_btnColor = `btn ${this.a_btnColor}`;
  }

  @Input('inn_value') a_progress: number = 0;
  @Input() a_btnColor: string = 'btn-primary';

  @Output() mSendValue: EventEmitter<number> = new EventEmitter();

  mChangeValue(value: number) {
    if (this.a_progress >= 100 && value >= 0) {
      this.mSendValue.emit(100);
      return (this.a_progress = 100);
    }
    if (this.a_progress <= 0 && value < 0) {
      this.mSendValue.emit(0);
      return (this.a_progress = 0);
    }
    this.a_progress = this.a_progress + value;
    return this.mSendValue.emit(this.a_progress);
  }

  mOnChange(pInn: number) {
    if (pInn >= 100) {
      this.a_progress = 100;
    } else if (pInn <= 0) {
      this.a_progress = 0;
    } else {
      this.a_progress = pInn;
    }
    this.mSendValue.emit(this.a_progress);
  }
}
