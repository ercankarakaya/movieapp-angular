import { Movie } from '../movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'GODFATHER',
        imageUrl: 'godfather.jpg',
        desc: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        isPopular:false,
        datePublished:new Date("2021,08,08")
      },
      {
        id: 2,
        title: 'X-MEN',
        imageUrl: 'x-men.jpg',
        desc: ' X-Men: Directed by Bryan Singer. With Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen.',
        isPopular:true,
        datePublished:new Date("2021,08,08")
      },
      {
        id: 3,
        title: 'THE GOOG,THE BAD AND THE UGLY',
        imageUrl: 'good-bad-ugly.jpg',
        desc: 'The Good, the Bad and the Ugly: Directed by Sergio Leone. With Eli Wallach, Clint Eastwood, Lee Van Cleef, Aldo Giuffrè.',
        isPopular:true,
        datePublished:new Date("2021,08,08")
      },
      {
        id: 4,
        title: 'LORD OF THE RINGS',
        imageUrl: 'lotr.jpg',
        desc: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R.',
        isPopular:true,
        datePublished:new Date("2021,08,08")
      },
      {
        id: 5,
        title: 'JOKER',
        imageUrl: 'joker.jpg',
        desc: 'Joker is a 2019 American psychological thriller film based on the DC Comics character of the same name.',
        isPopular:false,
        datePublished:new Date("2021,08,08")
      }
    ];
  }

  //get all movies
  getMovies(): Movie[] {
    return this.movies;
  }

  // get popular movies
  getPopularMovies(): Movie[] {
    return this.movies.filter(item=>item.isPopular); // item.isPopular==true
  }

  // get movie by id
  //or
  getMovieById(id: number): Movie {
    return this.movies.filter((item) => item.id == id)[0];
  }

  //or
  getMovieById_2(id: number): Movie | undefined {
    return this.movies.find((item) => item.id == id);
  }

  //or
  /**
   *  Bunun için tsconfig.json dosyasına "strictNullChecks":false ekledik.
   * @param id
   * @returns
   */
  getMovieById_3(id: number): Movie {
    return this.movies.find((item) => item.id == id);
  }
}
