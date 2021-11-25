import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieDetail } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'hem-movie-list-detail',
  templateUrl: './movie-list-detail.component.html',
  styleUrls: ['./movie-list-detail.component.scss'],
})
export class MovieListDetailComponent implements OnInit {
  @Input()
  movie!: Movie;

  constructor(private restSrv: RestService, private dataSrv: DataService) {}

  ngOnInit(): void {}

  onMovieSelect(id: string) {
    this.restSrv.getMovieDetail(id).subscribe(
      (response: Movie) => this.dataSrv.movieSubject.next(response),
      (error) => console.warn('ERROR: ', error)
    );
  }
}
