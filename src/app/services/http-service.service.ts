import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private username: string;
  private CLIENT_SECRETS:"0c65ef0e74794ee0d49e76ba791a4ccef33b5df9" | undefined;
  constructor(private httpClient:HttpClient) {
    this.username='ElsieLearnsToCode';
   }
   getProfileInfo(){
     var profile= this.httpClient.get("https://api.github.com/users/" + this.username)
     .pipe(map((response: any)=>response));
     console.log(profile)
     return profile
   }
   getProfileRepos(){
    var repos= this.httpClient.get("https://api.github.com/users/" + this.username + "/repos")
    .pipe(map((response: any)=>response));
    return repos;
   }
   updateProfile(username: string){
     this.username= username
   }
}