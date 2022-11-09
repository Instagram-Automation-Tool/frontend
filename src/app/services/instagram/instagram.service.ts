import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { profile } from 'console';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient, private store: Store) {}

  getAccounts(){
    return this.http.get(this.apiRoot.concat('accounts'))
  }

  loginIG(username: string, password: string){
    return this.http.get(this.apiRoot.concat(`storecredentials?username=${username}&password=${password}`))
  }

  followProfile(username: string){
    return this.http.get(this.apiRoot.concat('follow'))
  }
}
