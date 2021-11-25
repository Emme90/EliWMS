import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie, MovieAPIResponse, MovieDetail } from '../models/movie';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  assetDataPath: string = '../../assets/data/';
  posterPath: string = 'poster/';
  movieJSON: string = 'movie.json';

  constructor(private http: HttpClient, private dataSrv: DataService) {}

  public getMovies(): Observable<MovieAPIResponse> {
    return this.http.get(
      `${this.assetDataPath}${this.movieJSON}`
    ) as Observable<MovieAPIResponse>;
  }

  public getMovieDetail(id: string): Observable<Movie> {
    return of(
      this.dataSrv.movies.find((movie: Movie) => movie.id === id)
    ) as Observable<Movie>;
  }

  public getMoviePoster(id: string): Observable<MovieDetail> {
    return this.http.get(
      `${this.assetDataPath}${this.posterPath}${id}.json`
    ) as Observable<MovieDetail>;
  }
}
