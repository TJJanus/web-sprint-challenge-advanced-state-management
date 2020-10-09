import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START  });
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch((err) => console.log(err))
}

export const addSmurf = (form) => (dispatch) => {
    axios
        .post("http://localhost:3333/smurfs", form)
        .then((res) => {
            dispatch({ type: ADD_SMURF, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
}