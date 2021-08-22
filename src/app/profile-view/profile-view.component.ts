import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { DeleteFavMovieService } from '../fetch-api-data.service';
import { DeleteUserService } from '../fetch-api-data.service';
import { UpdateProfileViewComponent } from '../update-profile-view/update-profile-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  user: any = {};
  movies: any = [];
  favorit: any = [];
  Email: any = [];
  Birthday: any = [];

  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataFavMovDelete: DeleteFavMovieService,
    public fetchApiDataUserDelete: DeleteUserService,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    let FavoritMovies = localStorage.getItem('FavoritMovies');
    let Username = localStorage.getItem('user');
    let Email = localStorage.getItem('Email');
    let Birthday = localStorage.getItem('Birthday');
    this.user = {
      "FavoritMovies": FavoritMovies,
      "Username": Username,
      "Email": Email,
      "Birthday": Birthday,
    }
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.filterFavorites();
    });
  }

  filterFavorites(): void {
    this.movies.forEach((movie: any) => {
      if (this.user.FavoritMovies.includes(movie._id)) {
        this.favorit.push(movie);
      }
    });
    return this.favorit;
  }

  removeFavorites(_id: string, title: string): void {
    this.fetchApiDataFavMovDelete.DeleteFavMovie(_id).subscribe((resp) => {
      console.log(resp);
      let favmovies = resp.FavoritMovies;
      localStorage.setItem('FavoritMovies', favmovies);
      this.snackBar.open(
        `${title} has been removed from your favourites!`,
        'OK',
        {
          duration: 2000,
        }
      );
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

  profileUpdateDialog(): void {
    this.dialog.open(UpdateProfileViewComponent, {
    });
  }

  deleteUser(): void {
      this.fetchApiDataUserDelete.DeleteUser().subscribe(() => {
        localStorage.clear();
        this.router.navigate(['welcome']);
        this.snackBar.open('Profile deleted', 'OK', {
          duration: 2000,
        });
      });
  }
}