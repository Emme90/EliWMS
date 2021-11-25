export interface Genre {
  key: string;
  value: string;
}

export interface MoviePerson {
  id: string;
  name: string;
}

export interface Poster {
  id: string;
  link: string;
  aspectRatio: number;
  language: string;
  width: number;
  height: number;
}

export interface Movie {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  releaseState: string;
  image: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  contentRating: string;
  metacriticRating: string;
  genres: string;
  genreList: Genre[];
  directors: string;
  directorList: MoviePerson[];
  stars: string;
  starList: MoviePerson[];
}

export interface MovieAPIResponse {
  items: Movie[];
}

export interface MovieDetail {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  posters: Poster[];
  backdrops: Poster[];
  errorMessage: string;
}

// MOCK DATA

export const initialMovie: Movie = {
  id: 'tt12789558',
  title: 'Belfast',
  fullTitle: 'Belfast (2021)',
  year: '2021',
  releaseState: 'November 12',
  image:
    'https://imdb-api.com/images/original/MV5BODMwYTYyY2ItOWQ5Yi00OTI1LTllYTQtYTdlNWM4YzJhYTM0XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_Ratio0.6699_AL_.jpg',
  runtimeMins: '98',
  runtimeStr: '1h 38mins',
  plot: 'A young boy and his working class family experience the tumultuous late 1960s.',
  contentRating: 'PG-13',
  metacriticRating: '70',
  genres: 'Drama',
  genreList: [
    {
      key: 'Drama',
      value: 'Drama',
    },
  ],
  directors: 'Kenneth Branagh',
  directorList: [
    {
      id: 'nm0000110',
      name: 'Kenneth Branagh',
    },
  ],
  stars: 'Jude Hill, Lewis McAskie, Caitriona Balfe, Jamie Dornan',
  starList: [
    {
      id: 'nm11879379',
      name: 'Jude Hill',
    },
    {
      id: 'nm11888099',
      name: 'Lewis McAskie',
    },
    {
      id: 'nm1495520',
      name: 'Caitriona Balfe',
    },
    {
      id: 'nm1946193',
      name: 'Jamie Dornan',
    },
  ],
};

export const initialMovieDetail: MovieDetail = {
  backdrops: [],
  errorMessage: '',
  fullTitle: '',
  imDbId: '',
  posters: [],
  title: '',
  type: '',
  year: '',
};
