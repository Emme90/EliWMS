import { Component, OnInit } from '@angular/core';
import { MovieDetail } from './models/movie';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  moviePoster!: MovieDetail;

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    this.dataSrv.moviePoster.subscribe(
      (movie: MovieDetail) => (this.moviePoster = movie),
      (error) => console.warn('ERROR: ', error)
    );
  }
}
