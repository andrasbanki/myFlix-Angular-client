import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetAllMoviesService } from '../fetch-api-data.service'
import { DescriptionViewComponent } from '../description-view/description-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { AddFavMovieService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataAddFavMov: AddFavMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
    this.movies = resp;
    console.log(this.movies);
    return this.movies;
    });
  }

  showDescription(
    title:string, 
    description: string
  ): void{
    this.dialog.open(DescriptionViewComponent,{
      data: { title, description },
      width: "600px"
    });
  }

  showDirector(
    name:string, 
    bio: string,
    birthday: Date,
  ): void{
    this.dialog.open(DirectorViewComponent,{
      data: { name, bio, birthday },
      width: "600px"
    });
  }

  showGenre(
    name:string, 
    description: string,
  ): void{
    this.dialog.open(GenreViewComponent,{
      data: { name, description },
      width: "600px"
    });
  }

  addFavorite(_id: string, title: string): void {
    this.fetchApiDataAddFavMov.AddFavMovie(_id).subscribe((resp: any) => {
      console.log("AddFavMovie");
      console.log(resp);
      let favmovies = resp.FavoritMovies;
      localStorage.setItem('FavoritMovies', favmovies);
      this.snackBar.open(`${title} has been added to your favorite movies list`, 'OK', {
        duration: 2000,
      });
    });
  }
}