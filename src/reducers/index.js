// reducers.js
import { combineReducers } from "redux";
import waybillReducer from "./waybill";
import productReducer from "./product";
import userReducer from "./user";
import orderReducer from "./order";
import regionReducer from "./regionReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
  users: userReducer,
  orders: orderReducer,
  regions: regionReducer,
  auth: authReducer,
});

export default rootReducer;
