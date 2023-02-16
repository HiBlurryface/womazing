const defaultState = []

const ADD_PRODUCT = "ADD_PRODUCT"
const REMOVE_PRODUCT = "REMOVE_PRODUCT"

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const removeProductAction = (payload) => ({type: REMOVE_PRODUCT, payload})