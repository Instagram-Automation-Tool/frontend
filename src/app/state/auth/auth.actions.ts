import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/User";

export const loginSuccess = createAction('[Auth] Login Success', props<{user: User}>())
export const loginError = createAction('[Auth] Login Error', props<{credentials:{email:string, passowrd:string}}>())

