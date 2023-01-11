import { Component } from '@angular/core';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-App';
  public movieList: any = []
  public actorList: any = []
  public movieCastList: any = []
  public directorList: any = []

  constructor(
    private movieService: MovieService,
  ) { }

  public getMovieList(){
    this.movieList = this.movieService.getMovieTable()
    console.log('movie',this.movieList)
    this.getActorList()
  }
  public getActorList(){
    this.actorList = this.movieService.getActorTable()
    console.log('actor',this.actorList)
    this.getMovieCastList()
  }
  public getMovieCastList(){
    this.movieCastList = this.movieService.getMovieCastTable()
    console.log('movie cast',this.movieCastList)
    this.getDirectorList()
  }
  public getDirectorList(){
    this.directorList = this.movieService.getDirectorTable()
    console.log('director',this.directorList)
  }

  ngOnInit(): void {
    this.getMovieList();
  }



}
