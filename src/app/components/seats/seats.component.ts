import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hem-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
})
export class SeatsComponent implements OnInit {
  public seats: number[][] = [];

  constructor() {
    this.seats = this.createSeats(this.seats);
    console.log(this.seats);
  }

  createSeats(seats: number[][]): number[][] {
    for (let i = 0; i < 14; i++) {
      seats[i] = [] as number[];
      for (let j = 0; j < 16; j++) {
        if (i === 0 && j > 9) {
          continue;
        } else if (i === 1 && j > 11) {
          continue;
        } else if (i > 1 && i < 7 && j > 13) {
          continue;
        } else if (i > 6 && i < 12 && j > 15) {
          continue;
        } else if (i === 12) {
          continue;
        } else {
          seats[i].push(j);
        }
      }
    }
    return seats;
  }

  ngOnInit(): void {}
}
