import { SET_MAP_REGION } from "../actions/Types";

const INITIAL_STATE = {
    region: {
        llongitude: 0,
        latitude: 0,
        longitudeDelta: 0.0134,
        latitudeDelta: 0.0143
    }
}

const MapPlacesReducer = (action = {}, state = INITIAL_STATE) => {
    switch(action.type) {
        case SET_MAP_REGION:
            const region = action.payload;
            return {...state, region};

        default:
            return state;
    }
}

export default MapPlacesReducer;