import { PLACE_SELECTED } from "../actions/Types";

const INITIAL_STATE = {
    place: {}
}

const MapPlacesReducer = (action = {}, state = INITIAL_STATE) => {
    switch(action.type) {
        case PLACE_SELECTED:
            const place = action.paylaod;
            return {...state, ...place};
    }
}

export default MapPlacesReducer;