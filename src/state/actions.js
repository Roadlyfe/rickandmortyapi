import axios from 'axios';

export const ADD_CHARACTERS_RESULTS = 'ADD_CHARACTERS_RESULTS';
export const ADD_API_INFO = 'ADD_API_INFO';
export const LOADING = 'LOADING';

const addCharactersResults = (results) => {
    return { type: ADD_CHARACTERS_RESULTS, payload: results };
} 

const addApiInfo = (info) => {
    return { type: ADD_API_INFO, payload: info };
}

const toggleLoading = () => {
    return { type: LOADING }
}

export const fetchCharacters = () => (dispatch) => {
    dispatch(toggleLoading())
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
        dispatch(addCharactersResults(res.data.results))
        dispatch(addApiInfo(res.data.info))
        dispatch(toggleLoading())
    })
   .catch((err) => console.log({ err }));
};

export const changePage = (url) => (dispatch) => {
    dispatch(toggleLoading())
    axios
    .get(url)
    .then(res => {
        console.log(res)
        dispatch(addCharactersResults(res.data.results))
        dispatch(addApiInfo(res.data.info))
        dispatch(toggleLoading())
    })
   .catch((err) => console.log({ err }));
};