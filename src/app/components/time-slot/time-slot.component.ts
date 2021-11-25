import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hem-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss'],
})
export class TimeSlotComponent implements OnInit {
  @Input() time!: { label: string; selected: boolean };

  @Output() slotClickEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.slotClickEmitter.emit(this.time.label);
  }
}
