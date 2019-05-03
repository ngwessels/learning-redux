
// Similar to import redux in webpack
const { createStore } = require( 'redux');



// state
const initialState = {
  age: 21
}

// Reducer
const myReducer = (state = initialState, action) => {

  // The ... is called a spread operator. It takes an array or object and expands it into its set of items

  const newState = {...state};


  // storeDispatch calls this function. Will increment age here

  if(action.type === 'ADD') {
    newState.age += action.val;
  }
  if(action.type === 'SUBTRACT') {
    newState.age -= action.val;
  }

  // Will return new state
  return newState;
}


// Redux Store
const store = createStore(myReducer);


// Subscribe will sense whenever there is a change in store

store.subscribe(() => {
  console.log(
    'current state', store.getState());
  })

console.log(
  'initial state', store.getState());


// Store Dispatch. W ill initialize increment in age. The val is called a payload. It can be what ever you want to pass it
store.dispatch({type:'ADD', val: 10});
store.dispatch({type:'SUBTRACT', val: 1})
