import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELETE_PLACE } from './actionTypes';

export const addPlace = (placeName) =>{
    return {
        type: ADD_PLACE,
        placeName
    }
};

export const deletePlace = () =>{
    return {
        type: DELETE_PLACE
    }
};

export const seletePlace = (key) =>{
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
};

export const deseletePlace = () =>{
    return {
        type: DESELETE_PLACE
    }
};