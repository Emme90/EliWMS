import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  initialMovie,
  initialMovieDetail,
  Movie,
  MovieDetail,
} from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public movies: Movie[] = [];
  public movieSubject: BehaviorSubject<Movie> = new BehaviorSubject<Movie>(
    initialMovie
  );
  public moviePoster: BehaviorSubject<MovieDetail> =
    new BehaviorSubject<MovieDetail>(initialMovieDetail);

  constructor() {}
}
