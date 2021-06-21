import {  DRAWING_DELETE_FAILURE, DRAWING_DELETE_REQUEST, DRAWING_DELETE_SUCCESS, DRAWING_LIST_FAILURE, DRAWING_LIST_REQUEST, DRAWING_LIST_SUCCESS, DRAWING_SAVE_FAILURE, DRAWING_SAVE_REQUEST, DRAWING_SAVE_SUCCESS } from "../constants/drawingConstants";

export const drawingListReducer = (state = {drawings:[]}, action) =>{
switch(action.type){
    case DRAWING_LIST_REQUEST :
        return { loading: true, drawings: [] };
    case DRAWING_LIST_SUCCESS:
        return {loading: false, drawings: action.payload};
    case DRAWING_LIST_FAILURE:
        return {loading: false, error: action.payload};
    default:
        return state;
}
}

export const drawingSaveReducer = (state = {drawing:{}}, action) =>{
switch(action.type){
    case DRAWING_SAVE_REQUEST :
        return { loading: true, drawings: [] };
    case DRAWING_SAVE_SUCCESS:
        return {loading: false, success: true, drawing: action.payload};
    case DRAWING_SAVE_FAILURE:
        return {loading: false, error: action.payload};
    default:
        return state;
}
}
export const drawingDeleteReducer = (state = {drawing:{}}, action) =>{
switch(action.type){
    case DRAWING_DELETE_REQUEST :
        return { loading: true };
    case DRAWING_DELETE_SUCCESS:
        return {loading: false, success: true, drawing: action.payload};
    case DRAWING_DELETE_FAILURE:
        return {loading: false, error: action.payload};
    default:
        return state;
}
}
