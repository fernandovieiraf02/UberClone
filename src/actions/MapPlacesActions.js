import { SET_MAP_REGION } from "./Types";

export const setMapRegion = (region) => (
    {
        type: SET_MAP_REGION,
        payload: region
    }
);