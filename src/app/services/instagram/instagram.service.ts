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

  followProfile(username: string,profile:string){
    const igLink = 'https://instagram.com/'+ username
    return this.http.get(this.apiRoot.concat(`follow?link=${igLink}&username=${profile}`))
  }

  likeProfile(link:string,profile:string){
    return (this.http.get(this.apiRoot.concat(`like?link=${link}&username=${profile}`)))

  }
  scrapeFollowers(username:string,amount:number,profile:string){
    const igLink='https://www.instagram.com/' + username +'/'
    return this.http.get(this.apiRoot.concat(`scrapefollowers?link=${igLink}&amount=${amount}&username=${profile}`))
  }

  commentOnProfilePosts(target:string, comments:string,count:number, profile:string){
    return this.http.get(this.apiRoot.concat(`commentOnProfilePosts?targetUsername=${target}&comment=${comments}&like=on&count=${count}&username=${profile}`))
  }
}
