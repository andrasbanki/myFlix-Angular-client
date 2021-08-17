import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app

const apiUrl = 'https://andrasbanki-myflixapp.herokuapp.com/';

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
    console.log(userDetails);
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

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) {
  }
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
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
    console.log(res);
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
    console.log(res);
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
    console.log(res);
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
    console.log(res);
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
    console.log(res);
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

@Injectable({
  providedIn: 'root'
})
export class AddFavMovieService {
  constructor(private http: HttpClient) { }
  AddFavMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(apiUrl + 'users/:Username/favorites/:_id', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    console.log(res);
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

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) { }
  EditUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.put(apiUrl + '/users/:Username', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    console.log(res);
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

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  constructor(private http: HttpClient) { }
  DeleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(apiUrl + '/users/:Username', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    console.log(res);
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

@Injectable({
  providedIn: 'root'
})
export class DeleteFavMovieService {
  constructor(private http: HttpClient) { }
  DeleteFavMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(apiUrl + 'users/:Username/favorites/:_id', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    console.log(res);
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