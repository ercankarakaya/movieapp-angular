import { Component, OnInit } from '@angular/core';
import movieListData from '../movies/MovieListData.json';
import LocalJsonData from '../LocalJsonData.json';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/repository/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  //movies=['GODFATHER','X-MEN','THE GOOG,THE BAD AND THE UGLY'];
  // movies=movieListData;

  GeneralTextData = LocalJsonData;
  movies: Movie[];
  movieRepository: MovieRepository;
  //popularMovies: Movie[];

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    console.log(this.movieRepository.getMovieById(2));
    //this.popularMovies=this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {}

  // movies: Movie[] = [
  //   {
  //     id: 1,
  //     title: 'GODFATHER',
  //     imageUrl: 'godfather.jpg',
  //     desc: "An organized crime dynasty's aging patriarch transfers control of  his clandestine empire to his reluctant son.",
  //   },
  //   {
  //     id: 2,
  //     title: 'X-MEN',
  //     imageUrl: 'x-men.jpg',
  //     desc: ' X-Men: Directed by Bryan Singer. With Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen.',
  //   },
  //   {
  //     id: 3,
  //     title: 'THE GOOG,THE BAD AND THE UGLY',
  //     imageUrl: 'good-bad-ugly.jpg',
  //     desc: 'The Good, the Bad and the Ugly: Directed by Sergio Leone. With Eli Wallach, Clint Eastwood, Lee Van Cleef, Aldo Giuffrè.',
  //   }
  // ];
}
