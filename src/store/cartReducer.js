const defaultState = []

const ADD_PRODUCT = "ADD_PRODUCT"
const REMOVE_PRODUCT = "REMOVE_PRODUCT"
const CLEAR_CART = "CLEAR_CART"

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.payload);
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}

export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const removeProductAction = (payload) => ({type: REMOVE_PRODUCT, payload})
export const clearCart = (payload) => ({type: CLEAR_CART, payload})