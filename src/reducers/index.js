import { combineReducers } from 'redux';
import MapPlacesReducer from './MapPlacesReducer';
import DirectionsReducers from './DirectionsReducers';


export default combineReducers({
    MapPlacesReducer,
    DirectionsReducers
});