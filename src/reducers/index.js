// reducers.js
import { combineReducers } from "redux";
import waybillReducer from "./waybill";
import productReducer from "./product";
import userReducer from "./user";
import orderReducer from "./order";
import regionReducer from "./regionReducer";

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
  users: userReducer,
  orders: orderReducer,
  regions: regionReducer,
});

export default rootReducer;
