import { GET_FAQ } from '../actions/types.js';

const initialState = {
    faqs: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FAQ:
            return {
                ...state,
                faqs: action.payload
            };

        default:
            return state;
    }

}
