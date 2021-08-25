import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app

const apiUrl = 'https://andrasbanki-myflixapp.herokuapp.com/';

/**
  * API call to the user registration endpoint.
  * @returns Adds a new user to the database.
  * @param userDetails An object containing the user's info.
  */
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * API call to the user login endpoint.
  * @param username Username of type string.
  * @param password Password of type string.
  * @returns Object with username and bearer token.
  */
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) {
  }
  public userLogin(userDetails: any): Observable<any> {
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
} 

/**
  * API call to the movies endpoint.
  * @returns Returns a list of all the movies from database.
  */
@Injectable({
  providedIn: 'root'
})
export class GetAllMoviesService {
  constructor(private http: HttpClient) { }
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * API call to a single movie endpoint.
  * @params Movie title of type string.
  * @returns Returns a movie's data selected by title.
  */
@Injectable({
  providedIn: 'root'
})
export class GetOneMovieService {
  constructor(private http: HttpClient) { }
  getOneMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * API call to the director name endpoint.
  * @param directorName Name of movie director of type string.
  * @returns Returns the director data.
  */
@Injectable({
  providedIn: 'root'
})
export class GetDirectorService {
  constructor(private http: HttpClient) { }
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'directors/:Name', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * API call to the genre name endpoint.
  * @param genre Name of genre of type string.
  * @returns Returns the genre data.
  */
@Injectable({
  providedIn: 'root'
})
export class GetGenreService {
  constructor(private http: HttpClient) { }
  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'genres/:Name', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * API call to the user username endpoint.
  * @param user Username of user of type string.
  * @returns Returns user from database.
  */
@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/users/:Username', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * Adds a movie to the favorites movies list.
  * @param _id The id of the selected movie.
  * @returns Returns an array of the selected movie.
  */
@Injectable({
  providedIn: 'root'
})
export class AddFavMovieService {
  constructor(private http: HttpClient) { }
  AddFavMovie(_id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.post(`${apiUrl}users/${user}/favorites/${_id}`, _id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * API call to to edit the user data.
  * @param userDetails Object of user name, password, email and date of birth.
  * @returns User object.
  */
@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) { }
  EditUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.put(`${apiUrl}users/${user}`, userDetails, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * Allows a user to delete their account.
  */
@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  constructor(private http: HttpClient) { }
  DeleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.delete(`${apiUrl}users/${user}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

/**
  * Delete a movie from the favorite movies list.
  * @returns Returns an array of the favorites.
  * @param _id The id of the selected movie.
  */
@Injectable({
  providedIn: 'root'
})
export class DeleteFavMovieService {
  constructor(private http: HttpClient) { }
  DeleteFavMovie(_id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.delete(`${apiUrl}users/${user}/favorites/${_id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}