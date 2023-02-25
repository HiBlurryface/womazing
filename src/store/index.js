import {createStore, combineReducers} from 'redux'; 
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';
import { promocodeReducer } from './promocodeReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    checkout: checkoutReducer,
    promocode: promocodeReducer,
})

export const store = createStore(rootReducer);  