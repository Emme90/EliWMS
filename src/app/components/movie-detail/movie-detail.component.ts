import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesMap } from 'src/app/models/constants';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'hem-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movieDetail!: Movie;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onNewBookingClick() {
    this._router.navigate([RoutesMap.newBooking]);
  }
}
