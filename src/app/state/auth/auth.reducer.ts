import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "src/app/models/User";
import { loginSuccess } from "./auth.actions";

export interface State {
    token:string,
    user: User,
}

export const initialState: State = {
    token: null,
    user:null
}

const _authReducer = createReducer(
    initialState,
    on(loginSuccess,(state, {user})=> {return {
        ...state,
        user: user
    }})
)

export function authReducer(state,action){
    return _authReducer(state,action)
}

// auth is declared in app.module
// global state app
export const selectAuthState = createFeatureSelector<State>('auth')


//individual state from the auth state
export const selectUser = createSelector(selectAuthState, state=> state.user)
export const selectToke = createSelector(selectAuthState, state=> state.token)
