import * as actions from "../actions/index"

const initialState = {
    mode: null
}

export default function modeReducer(state = initialState, action) {
    switch(action.type) {
        case actions.MODE_SELECT:
            return {
                ...state,
                mode: action.payload
            }
        case actions.LOGOUT:
            return {
                ...state,
                mode: null
            }
        default:
            return state
    }
}