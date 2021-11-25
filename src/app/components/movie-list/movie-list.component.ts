import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GENRE_LIST } from 'src/app/models/constants';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'hem-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @ViewChild('movieListRef') movieListRef!: ElementRef;

  @Input()
  set movieList(newValue: Movie[]) {
    this._movieList = newValue;
    this.visibleMovieList = this._movieList;
  }
  get movieList() {
    return this._movieList;
  }

  genreButtonList: { label: string; active: boolean }[] = GENRE_LIST;
  visibleMovieList: Movie[] = [];

  private _movieList!: Movie[];

  constructor() {}

  ngOnInit(): void {}

  onGenreSelect(genre: string) {
    this.changeBtnActive(genre);
    const tempGenreStringList: string[] = [
      ...this.genreButtonList
        .filter((btn) => btn.active)
        .map((btn) => btn.label),
    ];
    this.visibleMovieList = this.filterMovieList(tempGenreStringList);
  }

  onLeftArryClick() {
    this.movieListRef.nativeElement.scrollLeft -= 300;
  }

  onRightArrowClick() {
    this.movieListRef.nativeElement.scrollLeft += 300;
  }

  changeBtnActive(genre: string) {
    this.genreButtonList.forEach((btn) => {
      if (btn.label === genre) {
        btn.active = !btn.active;
      }
    });
  }

  filterMovieList(selectedGenres: string[]): Movie[] {
    let tempMovieList = [...this._movieList];
    if (selectedGenres.length === 0) {
      return tempMovieList;
    }
    let resultArray: Movie[] = [];
    selectedGenres.forEach((genre) => {
      resultArray = tempMovieList.filter((movie) => {
        const genreList = movie.genreList.map((g) => g.key);
        return genreList.indexOf(genre) !== -1;
      });
    });
    return resultArray;
  }
}
