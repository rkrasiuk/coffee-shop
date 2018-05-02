import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import orderReducer from './reducer-order';
import tabReducer from './reducer-active-tab';

const rootReducer = combineReducers({
  form: formReducer,
  order: orderReducer,
  tabSelected: tabReducer
});

export default rootReducer;
