import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count, observable, retry } from 'rxjs';
import { User } from '../classes/user';
import { Repository } from '../classes/repository';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { 
    
  }

// logic to get gh profile
  public getProfile (githubUserQuery: string) {
    let dataUrl = `https://api.github.com/users/${githubUserQuery}?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRETS}`;
    return this.http.get("dataURL").pipe(
      retry (),
      catchError (this.handleErrors)
    );
  }

  public handleErrors(error:HttpErrorResponse) {
    let errorMessage:string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE : ${error.error.message}`;
    }

    else {
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }

    return throwError(errorMessage);
  }

   

}
