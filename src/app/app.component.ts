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
  public input: string = ""  
  public searchText: string = "";

  public globalList: any = []

  constructor(
    private movieService: MovieService,
  ) { }

  public getMovieList(){
    this.movieList = this.movieService.getMovieTable()
    console.log(this.movieList)
    this.getActorList()
  }
  public getActorList(){
    this.actorList = this.movieService.getActorTable()
    this.getMovieCastList()
  }
  public getMovieCastList(){
    this.movieCastList = this.movieService.getMovieCastTable()
    this.getDirectorList()
  }
  public getDirectorList(){
    this.directorList = this.movieService.getDirectorTable()
    this.globalList = [this.movieList, this.actorList, this.movieCastList, this.directorList].reduce((a, b) => a.concat(b));
    console.log(this.globalList)
  }

  public search(){
    // console.log('input', this.input)
    console.log(this.movieList.filter((item: { mov_title: string; }) => item.mov_title === this.input))
    // return this.movieList.filter((item: { mov_title: string; }) => item.mov_title === this.input);
  }

  ngOnInit(): void {
    this.getMovieList();
  }



}
