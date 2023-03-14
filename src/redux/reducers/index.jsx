import { combineReducers } from 'redux';
import { productReducers } from './productReducer';

export const reducers = combineReducers({
    allProducts: productReducers,
});


