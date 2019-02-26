import { PLACE_SELECTED } from "./Types";

export const setPlaceSelected = (places) => (
    {
        type: PLACE_SELECTED,
        payload: places
    }
);