import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

public movieTable: any = [
  {mov_id: 901,mov_title: 'Vertigo', mov_year: 1958, mov_time: 128, mov_lang: 'English', mov_dt_rel: '1958-08-24',mov_rel_country: 'UK'},
  {mov_id: 902,mov_title: 'The Innocents', mov_year: 1958, mov_time: 128, mov_lang: 'English', mov_dt_rel: '1958-08-24',mov_rel_country: 'UK'},
  {mov_id: 903,mov_title: 'The Deer Hunter', mov_year: 1958, mov_time: 128, mov_lang: 'English', mov_dt_rel: '1958-08-24',mov_rel_country: 'UK'},
  {mov_id: 904,mov_title: 'Amadeus', mov_year: 1958, mov_time: 128, mov_lang: 'English', mov_dt_rel: '1958-08-24',mov_rel_country: 'UK'},
  {mov_id: 905,mov_title: 'Blade Runner', mov_year: 1958, mov_time: 128, mov_lang: 'English', mov_dt_rel: '1958-08-24',mov_rel_country: 'UK'},
]
public actorTable: any = [
  {act_id: 101, act_fname: 'James', act_lname: 'Stewart', act_gender: 'M',},
  {act_id: 102, act_fname: 'Deborah', act_lname: 'Kerr', act_gender: 'F',},
  {act_id: 103, act_fname: 'Peter', act_lname: 'Otoole', act_gender: 'M',},
  {act_id: 104, act_fname: 'Robert', act_lname: 'De Niro', act_gender: 'M',},
  {act_id: 105, act_fname: 'F. Murray', act_lname: 'Abraham', act_gender: 'M',}
]
public movieCastTable: any = [
  {act_id: 101, mov_id: 901, role: 'John Scottie Ferguson'},
  {act_id: 102, mov_id: 902, role: 'Miss Giddens'},
  {act_id: 103, mov_id: 903, role: 'Michael'},
  {act_id: 104, mov_id: 904, role: 'Antonio Salieri'},
  {act_id: 105, mov_id: 905, role: 'Rick Deckard'},
]
public directorTable: any = [
  {dir_id: 201, dir_fname: 'Alfred', dir_lname: 'Hitchcock'},
  {dir_id: 202, dir_fname: 'Jack', dir_lname: 'Clayton'},
  {dir_id: 203, dir_fname: 'David', dir_lname: 'Lean'},
  {dir_id: 204, dir_fname: 'Michael', dir_lname: 'Hitchcock'},
  {dir_id: 205, dir_fname: 'Milos', dir_lname: 'Forman'},
]
  constructor() { }

  public getMovieTable(){
    return this.movieTable;
  }
  public getActorTable(){
    return this.actorTable;
  }
  public getMovieCastTable(){
    return this.movieCastTable;
  }
  public getDirectorTable(){
    return this.directorTable;
  }



}
