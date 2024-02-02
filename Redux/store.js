import { legacy_createStore as createStore } from 'redux';
import rootReducer from './Reducers/Rootreducer';
// Assuming you have a rootReducer if there are multiple reducers
 // You can use Redux Thunk for async actions

const store = createStore(rootReducer);

export default store;