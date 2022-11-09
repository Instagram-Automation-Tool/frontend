import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromAuth from '../../state/auth/auth.reducer'

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  
  user$ = this.store.select(fromAuth.selectUser)
  constructor(private store: Store<fromAuth.State>) {}


  ngOnInit() {}
}
