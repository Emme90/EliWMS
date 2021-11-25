import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'hem-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  selectedMovie!: Movie;

  constructor(private _dataSrv: DataService) {
    this._dataSrv.movieSubject.subscribe(
      (response: Movie) => {
        this.selectedMovie = response;
      },
      (error) => console.warn('ERROR: ', error)
    );
  }

  ngOnInit(): void {}
}
