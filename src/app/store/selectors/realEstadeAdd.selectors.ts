import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RealEstateAdds, RealEstateAdd } from "src/app/models/real-estate-add.model";

export const selectRealEstateAddsState = createFeatureSelector<RealEstateAdds>('realEstateAdds')
export const selectRealEstateAddState = createFeatureSelector<RealEstateAdd>('realEstateAdd')

export const selectRealEstateAdds = createSelector(
    selectRealEstateAddsState,
    (state)=>state
)

export const selectRealEstateAdd = createSelector(
    selectRealEstateAddState,
    (state)=>state
)