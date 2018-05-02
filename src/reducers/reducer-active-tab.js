import {TAB_SELECTED} from '../actions/index';

export default function (state = 'about', action) {
  switch (action.type) {
    case TAB_SELECTED:
      return action.payload;
    default: return state;
  }
}
