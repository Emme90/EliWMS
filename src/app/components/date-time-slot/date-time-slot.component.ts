import { Component, Input, OnInit } from '@angular/core';
import { popolateTimeSlots } from 'src/app/services/utils.service';

@Component({
  selector: 'hem-date-time-slot',
  templateUrl: './date-time-slot.component.html',
  styleUrls: ['./date-time-slot.component.scss'],
})
export class DateTimeSlotComponent implements OnInit {
  @Input() date!: Date;
  timeSlots: { label: string; selected: boolean }[] = popolateTimeSlots();

  constructor() {}

  ngOnInit(): void {}

  onTimeSlotChange(label: string) {
    const selectedIndex = this.timeSlots.findIndex(
      (item) => item.label === label
    );
    this.timeSlots[selectedIndex].selected =
      !this.timeSlots[selectedIndex].selected;
  }
}
