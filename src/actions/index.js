export const PASS_ORDER = 'pass_order';
export const TAB_SELECTED = 'active_tab';
export const USER_AUTH = 'user_auth';

export const passOrder = order => ({
  type: PASS_ORDER,
  payload: order
});

export const selectTab = tab => ({
  type: TAB_SELECTED,
  payload: tab
});

export const userAuth = user => ({
  type: USER_AUTH,
  payload: user
});