import {USER_AUTH} from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case USER_AUTH:
      return action.payload;
    default:
      return state;
  }
}