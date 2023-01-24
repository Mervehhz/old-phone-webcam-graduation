import * as actions from "../actions/index";

const initialState = {
    username: null,
    token: null,
    is_streamer: false
}

export default function userReducer(state = initialState, action){
    switch(action.type) {
        case actions.LOGIN: 
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                is_streamer: action.payload.is_streamer
            };
        case actions.LOGOUT:
            return {
                ...state,
                username: null,
                token: null,
                is_streamer:false
            };
        default: 
            return state;
    }
} 