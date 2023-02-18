import {createStore, combineReducers} from 'redux'; 
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    checkout: checkoutReducer  
})

export const store = createStore(rootReducer);  