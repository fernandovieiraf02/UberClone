import { SET_PLACE_DESTINATION, SET_PLACE_ORIGIN } from "./Types";

export const setPlaceDestination = (destination) => (
  {
    type: SET_PLACE_DESTINATION,
    payload: destination
  }
);

export const setPlaceOrigin = (origin) => (
  {
    type: SET_PLACE_ORIGIN,
    payload: origin
  }
);