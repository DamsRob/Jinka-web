import { createAction, props } from "@ngrx/store";
import { RealEstateAdd } from "src/app/models/real-estate-add.model";
import { User } from "src/app/models/user.model";

export const logUser = createAction(
    '[User] Log User',
    props<{user: User}>()
)

export const subscribeUser = createAction(
    '[User] Subscribe User',
    props<{newUser: User}>()
)

export const addLike = createAction(
    '[User] addLike',
    props<{realEstateAdd : RealEstateAdd}>()
)

export const removeLike = createAction(
    '[User] remove like',
    props<{realEstateAdd: RealEstateAdd}>()
)

export const putToTrash = createAction(
    '[User] Put To Trash',
    props<{realEstateAdd: RealEstateAdd}>()
)