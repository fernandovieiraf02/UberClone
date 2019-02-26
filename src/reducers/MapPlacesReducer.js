import { PLACE_SELECTED } from "../actions/Types";

const INITIAL_STATE = {
    places: {
        longitude: 0,
        latitude: 0
    }
}

const MapPlacesReducer = (action = {}, state = INITIAL_STATE) => {
    switch(action.type) {
        case PLACE_SELECTED:
            const places = action.payload;
            return {...state, places};

        default:
            return {...state};
    }
}

export default MapPlacesReducer;