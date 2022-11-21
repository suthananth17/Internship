import React from "react";
import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "../Features/Cake/CakeSlice";
import iceCreamReducer from "../Features/IceCream/IceCreamSlice";
import userReducer from "../Features/Users/UsersSlice";

const RootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  user: userReducer,

  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default RootReducer;
