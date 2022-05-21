import { combineReducers } from "redux";
import { ADD_API_INFO, ADD_CHARACTERS_RESULTS, LOADING } from './actions'



const initInfoState = {
    count: 0,
    pages: 0,
    next: '',
    prev: ''
}
const infoReducer = (state = initInfoState, action) => {
    switch (action.type) {
        case ADD_API_INFO:
            return action.payload;
        default:
            return state;
    }
}

const initialResultState = []


const resultsReducer = (state = initialResultState, action) => {
    switch (action.type) {
        case ADD_CHARACTERS_RESULTS:
            return action.payload
        default:
            return state
    }
}

const initLoadingState = false;

const loadingReducer = (state = initLoadingState, action) => {
    switch (action.type) {
        case LOADING:
            return !state
        default:
            return state
    }
}

export default combineReducers({
    infoState: infoReducer,
    resultsState: resultsReducer,
    loadingState: loadingReducer
})