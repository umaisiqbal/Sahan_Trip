import {createStore} from 'redux';
import rootReducer from './reducer/Reducers';

const store = createStore(rootReducer);

export default store;
