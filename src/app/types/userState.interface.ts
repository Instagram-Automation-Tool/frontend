import { User } from "../models/User";

export interface UserStateInterface {
    isLoading: boolean;
    user:User
}