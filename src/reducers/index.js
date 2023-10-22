// reducers.js
import { combineReducers } from 'redux';
import waybillReducer from './waybill';
import productReducer from './product';
import userReducer from './user';
import orderReducer from './order';

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
  users: userReducer,
  orders: orderReducer,
});

export default rootReducer;
