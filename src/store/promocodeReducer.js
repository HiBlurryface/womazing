const defaultState = '';
const GET_PROMOCODE = "GET_PROMOCODE"

export const promocodeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PROMOCODE: 
            return action.payload;
        default:
            return state;
    }
}

export const getPromocode = (payload) => ({ type: GET_PROMOCODE, payload })