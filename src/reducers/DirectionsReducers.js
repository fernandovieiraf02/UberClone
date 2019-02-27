import { SET_PLACE_DESTINATION, SET_PLACE_ORIGIN } from "../actions/Types";

const initialState = {
  destination: null,
  origin: null
};

export default (state = initialState, action) => {
  switch (action.type) {

  case SET_PLACE_DESTINATION:
    const destination = action.payload;
    return { ...state, destination };

  case SET_PLACE_ORIGIN:
    const origin = action.payload;
    return { ...state, origin };

  default:
    return state
  }
};
