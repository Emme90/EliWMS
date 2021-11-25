import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Movie,
  MovieAPIResponse,
  MovieDetail,
  Poster,
} from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'hem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  backdrops: Poster[] = [];
  movieSubscription: Subscription = new Subscription();
  movieList: Movie[] = [];
  moviePoster!: MovieDetail;
  selectedMovie!: Movie;
  selectedMovieSubscription: Subscription = new Subscription();

  constructor(private restSrv: RestService, private dataSrv: DataService) {}

  ngOnInit(): void {
    this.movieSubscription = this.restSrv.getMovies().subscribe(
      (response: MovieAPIResponse) => {
        this.movieList = response.items;
        this.dataSrv.movies = this.movieList;
      },
      (error) => console.warn('ERROR', error)
    );
    this.selectedMovieSubscription = this.dataSrv.movieSubject.subscribe(
      (response: Movie) => {
        this.restSrv.getMoviePoster(response.id).subscribe(
          (response: MovieDetail) => {
            this.moviePoster = response;
            this.backdrops = response.backdrops;
            this.dataSrv.moviePoster.next(response);
          },
          (error) => console.warn('ERROR: ', error)
        );
        this.selectedMovie = response;
      },
      (error) => console.warn('ERROR: ', error)
    );
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
    this.selectedMovieSubscription.unsubscribe();
  }
}
