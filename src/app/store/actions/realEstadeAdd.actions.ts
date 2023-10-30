import { createAction, props } from "@ngrx/store";
import { RealEstateAdd, RealEstateAdds } from "src/app/models/real-estate-add.model";

export const setRealEstateAdd = createAction(
    '[realEstateAdd] setRealEstateAdd',
    props<{realEstateAdd: RealEstateAdd}>()
)

export const setRealEstateAdds = createAction(
    '[realEstateAdds] setRealEstateAdds',
    props<{newRealEstateAdd: RealEstateAdd}>()
)