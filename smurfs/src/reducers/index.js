import {ADD_SMURF, FETCH_SMURF_START, FETCH_SMURF_SUCCESS} from '../actions';


const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                erorr: '',
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: state.smurfs
            }
        default: 
            return state;
    }
}