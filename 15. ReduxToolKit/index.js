const store = require("./App/Store");
const cakeActions = require("./Features/Cake/CakeSlice").cakeActions;
const iceCreamActions = require("./features/IceCream/IceCreamSlice").iceCreamActions;
const fetchUsers = require("./Features/Users/UsersSlice").fetchUsers


console.log("Initial State ", store.getState());
const unSubscribe = store.subscribe(() => {

//   Logger middleware take care
 console.log("Updated State ", store.getState());
});


store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.reStocked(3));

// unSubscribe();
