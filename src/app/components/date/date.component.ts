import { Component, Input, OnInit } from '@angular/core';
import { DayOfWeek, Month } from 'src/app/models/date';

@Component({
  selector: 'hem-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  @Input() date!: Date;

  dayNumberLabel!: string;
  weekDayLabel!: string;
  monthLabel!: string;

  constructor() {}

  ngOnInit(): void {
    this.dayNumberLabel = this.date.getDate().toString();
    this.weekDayLabel = DayOfWeek[this.date.getDay()];
    this.monthLabel = Month[this.date.getMonth()];
  }
}
