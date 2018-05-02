import {PASS_ORDER} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case PASS_ORDER:
      return action.payload;
    default: return state;
  }
}
