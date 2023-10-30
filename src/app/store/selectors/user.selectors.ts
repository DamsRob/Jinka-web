import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Users, User } from "src/app/models/user.model";

export const selectUserState = createFeatureSelector<User>('user')
export const selectUsersState = createFeatureSelector<Users>('users')

export const selectUser = createSelector(
    selectUserState,
    (state)=> state
)

export const selectUsers = createSelector(
    selectUserState,
    (state)=>state
)