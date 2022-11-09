import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, tap } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import * as AuthActions from './auth.actions'



@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions){}
    
    // loginSuccess$ = createEffect(
    //     ()=>
    //     this.actions$.pipe(
    //         ofType(AuthActions.loginSuccess),
    //         tap(({user})=>{
    //         //    console.log(user)
    //         })
    //     ),
    // {dispatch:false}
    // )
}