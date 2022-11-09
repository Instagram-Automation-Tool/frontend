import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { InstagramService } from "src/app/services/instagram/instagram.service";
import * as fromAuth from '../../state/auth/auth.reducer'

@Component({
  selector: "app-instagram",
  templateUrl: "instagram.component.html"
})
export class InstagramComponent implements OnInit {
  
  user$ = this.store.select(fromAuth.selectUser)
  accounts$ =this.igService.getAccounts()
  constructor(private store: Store<fromAuth.State>, private igService: InstagramService) {}



  loginIG(username: string, password: string){
    this.igService.loginIG(username,password).subscribe(
      {
        next: ()=> alert('Logging in'),
        error: (error)=>  {
          console.log(error)
          }
      }
    )
  }

  followProfile(username: string){
    this.igService.followProfile(username).subscribe(
        {
            next:()=> alert('YOOOO'),
            error:(error)=> {
                console.log(error)
            }
        }
    )
  }



  ngOnInit() {}
}
