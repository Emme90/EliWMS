import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'heam-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() available: boolean = true;
  @Output() selectSeat = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onSeatClick() {
    this.available = !this.available;
    this.available ? this.selectSeat.emit(true) : this.selectSeat.emit(false);
  }
}
