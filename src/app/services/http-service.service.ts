import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { Repository } from '../classes/repository';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
}
