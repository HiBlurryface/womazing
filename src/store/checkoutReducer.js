const defaultState = null;
const GET_DATA = "GET_DATA"

export const checkoutReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DATA: 
            return action.payload;
        default:
            return state;
    }
}

export const getData = (payload) => ({ type: GET_DATA, payload })